import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondGenerationComponent } from './generaciones/second-generation/second-generation.component';
import { MaterialModule } from 'src/shared/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SecondGenerationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ]
})
export class PagesModule { }
