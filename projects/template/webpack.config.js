const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

conf = {
	entry: { main: [path.resolve(__dirname, 'src/index.ts'), path.resolve(__dirname, 'src/scss/index.scss')] },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		pathinfo: false
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: path.resolve(__dirname, 'tsconfig.app.json')
						}
					}
				],
				exclude: [/node_modules/]
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	]
};

module.exports = (env, options) => {
	let production = options.mode === 'production';
	conf.devtool = production ? false : 'eval-sourcemap';
	return conf;
};
