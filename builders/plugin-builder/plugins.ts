const pluginconfig = require('../../projects/plugins/src/plugins-config.json');
import { spawn } from 'cross-spawn';

interface PluginsConfig {
	[key: string]: PluginConfig;
}

//ng build --project plugins --aot --modulePath=./plugin1/plugin1.module#Plugin1Module --pluginName=plugin1 --sharedLibs=shared --outputPath=./src/assets/plugins

const args = process.argv;
const isProd = args.includes('--prod');
const buildShared = args.includes('--buildshared');

let pluginsName: string[] = [];
const strPlugins = args.find((x) => x.indexOf('--plugins=') != -1);
const pconfig: PluginsConfig = pluginconfig as PluginsConfig;
const allPluginsName: string[] = Object.getOwnPropertyNames(pconfig);

if (strPlugins) {
	pluginsName = strPlugins.replace('--plugins=', '').split(',');
	const noPluginNames = pluginsName.filter((x) => !allPluginsName.includes(x));
	if (noPluginNames.length > 0) {
		console.log(`不存在插件：${noPluginNames.join('、')}`);
		pluginsName = pluginsName.filter((x) => allPluginsName.includes(x));
	}
} else {
	pluginsName = Object.getOwnPropertyNames(pconfig);
}

console.log(`一共${pluginsName.length}插件：${pluginsName.join('、')}`);

if (!buildShared && pluginsName.length <= 0) {
	console.log('无插件需要编译，退出');
} else {
	if (isProd) console.log('发布模式编译');

	const compilePluginConfig: PluginConfig[] = [];
	pluginsName.forEach((pname) => {
		const theConfig: PluginConfig = pconfig[pname];
		theConfig.name = pname;
		compilePluginConfig.push(pconfig[pname]);
	});

	if (buildShared) {
		//ng build shared && ng build --project plugins --aot --modulePath=shared#SharedModule --pluginName=shared  --outputPath=./src/assets/plugins
		console.log(`\n开始编译公共库 Shared`);
		spawn.sync('ng', ['build', 'shared', isProd ? '--prod=true' : '--prod=false'], { stdio: 'inherit' });

		spawn.sync(
			'ng',
			[
				'build',
				'--project',
				'plugins',
				isProd ? '--prod' : '--aot',
				'--modulePath=shared#SharedModule',
				'--pluginName=shared',
				'--outputPath=./src/assets/plugins'
			],
			{ stdio: 'inherit' }
		);
	}

	compilePluginConfig.forEach((cpconfig) => {
		console.log(`\n开始编译插件：${cpconfig.title}`);
		spawn.sync(
			'ng',
			[
				'build',
				'--project',
				'plugins',
				isProd ? '--prod' : '--aot',
				`--modulePath=./${cpconfig.name.toLowerCase()}/${cpconfig.name.toLowerCase()}.module#${cpconfig.moduleName}`,
				`--pluginName=${cpconfig.name.toLowerCase()}`,
				'--sharedLibs=shared',
				'--outputPath=./src/assets/plugins'
			],
			{ stdio: 'inherit' }
		);
	});
}
