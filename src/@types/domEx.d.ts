interface String {
  /**
   *
   * @param c 前后去除的字符
   */
  Trim(c: string): string;
  /**
   *
   * @param c 去除前面的字符
   */
  TrimStart(c: string): string;
  /**
   *
   * @param c 去除后面的字符
   */
  TrimEnd(c: string): string;
  format(...args: string[]): string;
}

interface StringConstructor {
  /**
   * 字符串是否为null或者空字符
   * @param val 字符串
   */
  isNullOrEmpty(val: string): boolean;
  /**
   * 拼接为URL
   * @param strArray url的集合
   */
  urlJoin(...strArray: string[]): string;
}
interface ObjectConstructor {
  /**
   * 对象是否为null
   * @param val 对象
   */
  isNull(val: object | number | string): boolean;
}
interface Array<T> {
  pushArray: Function;
}
