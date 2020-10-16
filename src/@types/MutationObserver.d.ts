interface Window {
  WebkitMutationObserver: OMutationObserver;
  MozMutationObserver: OMutationObserver;
}
interface OMutationObserver extends MutationObserver {
  new (callback: MutationCallback): MutationObserver;
}
