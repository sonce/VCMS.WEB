// ./src/mybuildstep.ts
import { Project, VariableDeclarationKind, InterfaceDeclaration } from 'ts-morph';

const project = new Project();
// source file with IMyTable interface
const sourceFile = project.addSourceFileAtPath('./src/services/iframe/IChildIframeAPI.ts');
// target file to write the keys string array to
const destFile = project.createSourceFile('./src/services/iframe/ChildIframeEvents.ts', '', {
	overwrite: true // overwrite if exists
});

function createKeys(node: InterfaceDeclaration) {
	const allKeys = node.getProperties().map((p) => p.getName());
	destFile.addVariableStatement({
		declarationKind: VariableDeclarationKind.Const,
		declarations: [
			{
				name: 'keys',
				initializer: (writer) => writer.write(`${JSON.stringify(allKeys)} as const`)
			}
		]
	});
}

createKeys(sourceFile.getInterface('IChildIframeEvents'));
destFile.saveSync(); // flush all changes and write to disk
