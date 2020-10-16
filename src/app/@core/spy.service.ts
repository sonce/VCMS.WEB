export class SpyService {
  runRecord: (...args: any[]) => void;

  args: any[];
  run(...args: any[]) {
    this.args = args;
    if (this.runRecord) this.runRecord(args);
  }
}
