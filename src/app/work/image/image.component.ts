import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Asset } from '../../core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {

  @Input()
  public asset?: Asset;

  public get imageUrl(): string {
    return this.asset ? `${environment.api}${this.asset.asset?.url}` : '';
  }

  public get preview(): string {
    return this.asset ? `${environment.api}${this.asset.asset.formats.small.url}` : '';
  }

}
