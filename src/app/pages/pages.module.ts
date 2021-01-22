import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
}
const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    MatCardModule,
    CommonModule,
    MatTabsModule,
    PagesRoutingModule,
    DashboardModule,
    ToasterModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
  ],
})
export class PagesModule {
}
