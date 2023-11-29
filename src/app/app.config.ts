import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { App1Service } from './app-1/app-1.component';
import { App11Service } from './app-1-1/app-1-1.component';
import { App12Service } from './app-1-2/app-1-2.component';
import { App2Service } from './app-2/app-2.component';
import { App111Service } from './app-1-1-1/app-1-1-1.component';
import { App121Service } from './app-1-2-1/app-1-2-1.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes) , App1Service , App11Service , App12Service ,  App2Service  , App111Service , App121Service]
};
