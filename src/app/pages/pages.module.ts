import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondGenerationComponent } from './generaciones/second-generation/second-generation.component';
import { MaterialModule } from 'src/shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { ThirdGenerationComponent } from './generaciones/third-generation/third-generation.component';
import { FourthGenerationComponent } from './generaciones/fourth-generation/fourth-generation.component';
import { FifthGenerationComponent } from './generaciones/fifth-generation/fifth-generation.component';
import { SixthGenerationComponent } from './generaciones/sixth-generation/sixth-generation.component';
import { SeventhGenerationComponent } from './generaciones/seventh-generation/seventh-generation.component';
import { EighthGenerationComponent } from './generaciones/eighth-generation/eighth-generation.component';


@NgModule({
  declarations: [
    SecondGenerationComponent,
    ThirdGenerationComponent,
    FourthGenerationComponent,
    FifthGenerationComponent,
    SixthGenerationComponent,
    SeventhGenerationComponent,
    EighthGenerationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ]
})
export class PagesModule { }
