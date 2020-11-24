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
	parent: {
		/** 子元素数量 */
		childCount: number;
		/** 在父元素中的位置 */
		inParentIndex: number;
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
interface IAddon {
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
	/**
	 * 删除
	 *
	 * @param elementInfo 元素信息
	 */
	del?: (elementInfo: ElementInfo) => boolean | PromiseLike<boolean>;
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
	IsRootContainer?: boolean;
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
	/** 依赖 */
	dependencies?: {
		/** 脚本 */
		scripts: string[];
	};
}
