import Postmate from 'postmate';
declare module 'postmate' {
  /**
   * Composes an API to be used by the parent
   */
  interface ParentAPI {
    /**
     * Listen to a particular event from the child
     *
     * @param eventName the name of the event
     * @param callback the event handler function
     */
    on(eventName: PostmatEventNames, callback: (data?: any) => void): void;
  }

  /**
   * Composes an API to be used by the child
   */
  interface ChildAPI {
    /**
     * Emits an event to the parent
     *
     * @param name the name of the event
     * @param data event data
     */
    emit<T = any>(name: PostmatEventNames, data?: T): void;
  }
}
