import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, EMPTY, Observable } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';
import { Asset, Type } from '../core';
import { StrapiService } from '../services/strapi.service';

@Injectable({
  providedIn: 'root'
})
export class StrapiStore {

  private readonly types = new BehaviorSubject<Type[]>([]);
  public readonly types$ = this.types.asObservable();

  private readonly assets = new BehaviorSubject<Asset[]>([]);
  public readonly assets$ = this.assets.asObservable();

  constructor(
    private readonly strapiService: StrapiService
  ) { }

  public fetchTypes(): Observable<unknown> {
    return this.strapiService.getTypes().pipe(
      tap((types) => this.types.next(types))
    );
  }

  public fetchAssets(): Observable<unknown> {
    const limit = 2;
    return this.strapiService.getAssetsCount().pipe(
      mergeMap((count) => {
        const size = Math.ceil(count / limit);
        const runs = [...new Array(size)].map((_, index) => this.getAssets(index * limit, limit));
        return combineLatest(runs);
      })
    );
  }

  private getAssets(start: number, limit: number): Observable<unknown> {
    return this.strapiService.getAssets(start, limit).pipe(
      tap((assets) => this.assets.next([...this.assets.value, ...assets]))
    );
  }

}
