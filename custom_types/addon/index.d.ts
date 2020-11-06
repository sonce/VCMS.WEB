// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ElementInfo<T = any> {
	id: string;
	type: string;
	pos: {
		left: number;
		top: number;
		width: number;
		height: number;
	};
	config?: T;
	addon?: IAddon;
	// ChildElement?: ElementInfo;
}

interface PluginConfig {
	name?: string;
	moduleName: string;
	title: string;
	path: string;
	deps: string[];
}

/**
 * 所有Addon的基类
 */
declare interface IAddon {
	OwnPlugin?: PluginConfig;
	Title: string;
	/**
	 * 是否可以拖拽
	 */
	CanDrag?: boolean;

	/**
	 * 是否可以删除
	 */
	CanDel?: boolean;
	// /**
	//  * 是否显示工具栏
	//  */
	// ShowToolbar: boolean;
	// /** 是否可以移动 */
	// CanMove: boolean;
	/**
	 * 是否容器
	 */
	IsContainer?: boolean;
	// /**
	//  * 是否可以编辑
	//  */
	// CanEdit: boolean;
	// /**
	//  * 图标
	//  */
	// Icon: string;
	onHover?: () => void;
	onClick?: () => void;
	indexComponent: unknown;
	/** 依赖 */
	dependencies?: {
		/** 脚本 */
		scripts: string[];
	};
}
