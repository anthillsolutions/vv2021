import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable, Subscription, timer } from 'rxjs';
import {
  trigger,
  transition,
  style,
  animate,
  state
} from '@angular/animations';
import { debounceTime, filter, switchMap, tap } from 'rxjs/operators';
import { StrapiStore } from '../../stores/strapi.store';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('upAnim', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.3s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('.3s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LandingComponent implements OnInit, OnDestroy {

  @ViewChild('content')
  public content?: ElementRef;

  public isOpen = false;
  public goUp = false;
  public readonly subs = new Subscription();

  private readonly filter = new BehaviorSubject<string | undefined>(undefined);
  public readonly filter$ = this.filter.asObservable();

  // eslint-disable-next-line max-params
  constructor(
    public readonly strapiStore: StrapiStore,
    private readonly meta: Meta,
    private readonly title: Title
  ) {
    this.title.setTitle('Valentin Vitus');
    this.meta.addTag({ name: 'og:type', content: 'website' });
    this.meta.addTag({ name: 'og:title', content: 'Valentin Vitus' });
    this.meta.addTag({ name: 'og:url', content: 'https://valentinvitus.ch' });
    this.meta.addTag({ name: 'og:image', content: 'assets/png/sigle_noir_SERRE.png' });
    this.meta.addTag({ name: 'description', content: 'Independent graphic designer in Geneva.' });
  }

  ngOnInit(): void {
    this.subs.add(this.strapiStore.fetchAssets().subscribe());
    this.subs.add(this.listenToScroll().subscribe());
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public setFilter(filter?: string): void {
    this.filter.next(filter);
  }

  public scrollTop(): void {
    this.content?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private listenToScroll(): Observable<unknown> {
    return fromEvent(document, 'wheel').pipe(
      filter((event: any) => event.deltaY > 0),
      debounceTime(100),
      tap(() => console.log('up')),
      tap(() => this.goUp = true),
      switchMap(() => timer(3000).pipe(tap(() => this.goUp = false)))
    );
  }

}
