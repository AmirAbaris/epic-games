import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgOptimizedImage } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { errorInterceptor } from './interceptors/error.interceptor';

// swiper config
import { register } from 'swiper/element/bundle';
import { ScaleOnActivateDirective } from './directives/scale-on-activate.directive';
import { TextHoverIndicatorDirective } from './directives/text-hover-indicator.directive';
register();

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, ScaleOnActivateDirective, TextHoverIndicatorDirective],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgOptimizedImage,
    MatButton,
    MatDivider,
  ],
  providers: [provideAnimationsAsync(), provideHttpClient(withInterceptors([errorInterceptor]))],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
