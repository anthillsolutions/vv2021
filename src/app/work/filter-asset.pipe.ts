import { Pipe, PipeTransform } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Asset } from '../core';

@Pipe({
  name: 'filterAsset'
})
export class FilterAssetPipe implements PipeTransform {

  transform(assets$: Observable<Asset[]>, filter: Observable<string | undefined>): Observable<Asset[]> {
    return combineLatest([
      assets$,
      filter
    ]).pipe(
      map(([assets, filter]) => {
        return filter ? assets.filter((asset) => asset.type.slug === filter) : assets;
      })
    );
  }

}
