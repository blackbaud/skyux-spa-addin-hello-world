import {
  NgModule
} from '@angular/core';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyAlertModule
} from '@skyux/indicators';

/**
 * @deprecated Each SKY UX module should be imported into each feature module
 * that references the SKY UX module, and this module should be removed.
 */
@NgModule({
  exports: [
    SkyAlertModule,
    SkyI18nModule
  ]
})
export class AppSkyModule { }
