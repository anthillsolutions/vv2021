import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { StrapiService } from '../services/strapi.service';

@Injectable({
  providedIn: 'root'
})
export class AboutResolver implements Resolve<unknown> {

  constructor(
    private readonly strapiService: StrapiService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    return this.strapiService.getAbout().pipe(
      take(1)
    );
  }

}
