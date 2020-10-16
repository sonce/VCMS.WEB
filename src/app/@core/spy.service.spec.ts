import { SpyService } from './spy.service';

describe('SpyOn', () => {
  var spyService: SpyService;
  var spy: jasmine.Spy;
  beforeEach(function () {
    spyService = new SpyService();
  });

  it('跟踪方法', function () {
    spy = spyOn(spyService, 'run');
    spyService.run(1);
    spyService.run(2);

    //调用过
    expect(spyService.run).toHaveBeenCalled();
    //调用次数2次
    expect((spyService.run as jasmine.Spy).calls.count()).toBe(2);
    //调用参数1
    expect(spyService.run).toHaveBeenCalledWith(1);

    //没有执行
    expect(spyService.args).toBeUndefined();
  });

  it('跟踪方法并执行方法', function () {
    spy = spyOn(spyService, 'run').and.callThrough();
    spyService.run(1);
    spyService.run(2);

    expect(spyService.args).not.toBeUndefined();
  });
});
