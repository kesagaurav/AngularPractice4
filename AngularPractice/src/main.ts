import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { EmployeeFormComponent } from './app/employee-form/employee-form.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
