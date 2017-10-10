import { any } from 'codelyzer/util/function';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
declare var $ ;
declare var jQuery;


$(document).ready(function(){
$('.slider').slider({
  indicators:false
});
});



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
