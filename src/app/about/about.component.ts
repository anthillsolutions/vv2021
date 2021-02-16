import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  // eslint-disable-next-line max-params
  constructor(
    public readonly activatedRoute: ActivatedRoute,
    private readonly meta: Meta,
    private readonly title: Title
  ) {
    this.title.setTitle('About - Valentin Vitus');
    this.meta.addTag({ name: 'og:type', content: 'website' });
    this.meta.addTag({ name: 'og:title', content: 'About - Valentin Vitus' });
    this.meta.addTag({ name: 'og:url', content: 'https://valentinvitus.ch/about' });
    this.meta.addTag({ name: 'og:image', content: 'assets/png/sigle_noir_SERRE.png' });
    this.meta.addTag({ name: 'description', content: 'About Valentin Vitus' });
  }

}
