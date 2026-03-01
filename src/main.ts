import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import 'chartjs-adapter-date-fns';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));