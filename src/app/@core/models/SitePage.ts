import { SitePageType } from './SitePageType';

/**
 * 网站页面
 */
export class SitePage {
  constructor(
    /**
     * 网站页面ID
     */
    public id: string,
    /**
     * 网站页面标题
     */
    public name: string,
    /**
     * 网址
     */
    public Url: string,
    /**
     * 父页面Id
     */
    public ParentId: string = '0',
    /**
     * 显示顺序
     */
    public Order: number = 0,
    /**
     * 是否为首页
     */
    public IsHomePage: boolean = false,
    /**
     * 页面类型
     */
    public PageType: SitePageType = SitePageType.Page,

    /** 子页面 */
    public children: SitePage[] = []
  ) {}
  /**
   * 是否隐藏
   */
  public Hidden: boolean = false;

  /** 打开的目标 */
  public Target: '_blank' | '_self' | string = '_self';

  public ParentPage: SitePage;

  /** 更新时间 */
  UpdateDateTime: Date;

  /** 自定义数据 */
  public customData?: string;

  // /** 页面模板ID */
  // PageTemplateId?: string
}
