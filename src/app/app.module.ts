import 'hammerjs';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import { Zona1Component } from './zona1/zona1.component';
import { Zona2Component } from './zona2/zona2.component';
import { Zona3Component } from './zona3/zona3.component';
import { Zona4Component } from './zona4/zona4.component';
import { Zona5Component } from './zona5/zona5.component';
import { Zona6Component } from './zona6/zona6.component';
import { Zona7Component } from './zona7/zona7.component';
import { Zona8Component } from './zona8/zona8.component';
import { Zona9Component } from './zona9/zona9.component';
import { Zona12Component } from './zona12/zona12.component';
import { Zona10Component } from './zona10/zona10.component';
import { Zona15Component } from './zona15/zona15.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { Zona14Component } from './zona14/zona14.component';
import { Zona13Component } from './zona13/zona13.component';
import { Zona11Component } from './zona11/zona11.component';
import { DD_MM_YYYY_Format } from './entities';
import { VatamariComponent } from './vatamari/vatamari.component';
import { AditionaleComponent } from './aditionale/aditionale.component';
import { DisplayErrorsComponent } from './display-errors/display-errors.component';
import { MartorComponent } from './martor/martor.component';
import { GoogleComponent } from './google/google.component';
import { ConditiiComponent } from './conditii/conditii.component';
import { DocumenteNecesareComponent } from './documente-necesare/documente-necesare.component';
import { GDPRComponent } from './gdpr/gdpr.component';
import { TermeniSiConditiiComponent } from './termeni-si-conditii/termeni-si-conditii.component';
import { PolitaComponent } from './polita/polita.component';
import { PrerequisitesComponent } from './prerequisites/prerequisites.component';
import { PagubaAutoComponent } from './paguba-auto/paguba-auto.component';
import { PagubaObiectComponent } from './paguba-obiect/paguba-obiect.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DndDirective } from './dnd.directive';
import { ProgressComponent } from './progress/progress.component';
import { ZonaFisiereComponent } from './zona-fisiere/zona-fisiere.component';

@NgModule({
  declarations: [
    AppComponent,
    Zona1Component,
    Zona2Component,
    Zona3Component,
    Zona4Component,
    Zona5Component,
    Zona6Component,
    Zona7Component,
    Zona8Component,
    Zona9Component,
    Zona12Component,
    Zona10Component,
    Zona15Component,
    Zona14Component,
    Zona13Component,
    Zona11Component,
    VatamariComponent,
    AditionaleComponent,
    DisplayErrorsComponent,
    MartorComponent,
    GoogleComponent,
    ConditiiComponent,
    DocumenteNecesareComponent,
    GDPRComponent,
    TermeniSiConditiiComponent,
    PolitaComponent,
    PrerequisitesComponent,
    PagubaAutoComponent,
    PagubaObiectComponent,
    FileUploadComponent,
    DndDirective,
    ProgressComponent,
    ZonaFisiereComponent  
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,    
    FormsModule,
    ReactiveFormsModule,
    SignaturePadModule,    
    GoogleMapsModule,
    HttpClientModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ro-RO'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_Format}],
  bootstrap: [AppComponent]
})
export class AppModule { }
