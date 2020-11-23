export abstract class PluginLoaderService {
	protected constructor() {
		this.provideExternals();
	}

	abstract provideExternals(): void;

	abstract load(pluginName: string): Promise<{ ownPlugin: PluginConfig; entry: IAddon }>;
}
