type PostmatMethodNames = keyof PostmateMethod;
declare var PostmateMethod: PostmateMethod;
declare interface PostmateMethod {
  InDesign: boolean;
  // Addons: IAddon[];
  // AddAddons: (...addons: IAddon[]) => void;
  IFrameLeft: number;
  IFrameTop: number;
  SetIframePos: (left: number, top: number) => boolean;
  ToggleDesignState: (isPreview: boolean) => void;
  AddClass: (selector: string, className: string) => void;
  RemoveClass: (selector: string, className: string) => void;
  Del: (addonId: string, removeEmptyParent: boolean) => boolean;
  loadScript: (fileName: string, callback: () => void, into: HTMLElementTagNameMap) => Promise<boolean>;
  loadCSS: (fileName: string, callback: () => void, into: HTMLElementTagNameMap) => Promise<boolean>;
}

/**
 * 所有Addon的基类
 */
declare interface IAddon {
  /**
   * 插件标题
   */
  Title: string;
  /** 唯一的名称 */
  Name: string;
  /**
   * 插件的元素选择器
   */
  Selector: string;
  /**
   * 是否可以拖拽
   */
  CanDrag: boolean;

  /**
   * 是否可以删除
   */
  CanDel: boolean;
  /**
   * 是否显示工具栏
   */
  ShowToolbar: boolean;
  /** 是否可以移动 */
  CanMove: boolean;
  /**
   * 是否容器
   */
  IsContainer: boolean;
  /**
   * 是否可以编辑
   */
  CanEdit: boolean;
  /**
   * 图标
   */
  Icon: string;
  /**
   * 排序
   */
  Order: number;
}
