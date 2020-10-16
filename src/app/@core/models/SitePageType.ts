/**
 * 页面类型
 */
export enum SitePageType {
  None = 0,
  /** 链接 */
  URL = 1,
  /** 页面 */
  Page = 2,
  /** 锚点 */
  Anchor = 3,
  /** 网页位置 */
  Position = 4,
  /** 邮箱 */
  MailTo = 5,
  /** 电话 */
  Tel = 6,
  /** 文件夹，不带链接，可在下面增加页面。 */
  Folder = 100,
}
