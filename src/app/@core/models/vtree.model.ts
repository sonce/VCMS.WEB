/** 树 模型 */
export interface VtreeModel {
	/** 标题 */
	Title: string;
	/** 子节点 */
	Items: VtreeModel[];
}
