import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Asset, Type, Work } from '../core';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public getAssets(start: number, limit: number): Observable<Asset[]> {
    return this.http.get<Asset[]>(`${environment.api}/assets?_start=${start}&_limit=${limit}`);
  }

  public getAssetsCount(): Observable<number> {
    return this.http.get<number>(`${environment.api}/assets/count`);
  }

  public getWorks(): Observable<Work[]> {
    return this.http.get<Work[]>(`${environment.api}/works`);
  }

  public getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(`${environment.api}/types`);
  }

  public getContact(): Observable<unknown> {
    return this.http.get<unknown>(`${environment.api}/contact`);
  }

  public getAbout(): Observable<unknown> {
    return this.http.get<unknown>(`${environment.api}/about`);
  }
}
