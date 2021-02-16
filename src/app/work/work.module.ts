import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ImageComponent } from './image/image.component';
import { ItemComponent } from './item/item.component';
import { FilterAssetPipe } from './filter-asset.pipe';


@NgModule({
  declarations: [LandingComponent, ImageComponent, ItemComponent, FilterAssetPipe],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
