import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StrapiStore } from './stores/strapi.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private readonly subs = new Subscription();

  constructor(
    private readonly strapiStore: StrapiStore
  ) { }

  ngOnInit(): void {
    this.subs.add(this.strapiStore.fetchTypes().subscribe());
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
