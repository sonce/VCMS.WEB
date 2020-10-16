import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import _ from 'lodash-es';

@Injectable()
export class AddonService {
  constructor(private apiService: ApiService) {}

  /**
   * 获取当前用户所有可用的插件
   */
  getAll(): Observable<IAddon[]> {
    return this.apiService.get<IAddon[]>('/addon/getall').pipe(
      tap((item) => {
        item.forEach((addon) => {
          addon.Title = _.isEmpty(addon.Title) ? addon.Name : addon.Title;
          // addon.Selector = _.isEmpty(addon.Selector)
          //   ? `[data-addon="${addon.Name.toLocaleLowerCase()}"]`
          //   : addon.Selector;
          addon.Selector = `[data-addon="${addon.Name.toLocaleLowerCase()}"]`;
        });
      })
    );
  }
}
