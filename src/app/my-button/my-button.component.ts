import {
  Component,
  OnInit
} from '@angular/core';

import {
  AddinClientService
} from '@blackbaud/skyux-lib-addin-client';

import {
  AddinClientInitArgs,
  AddinButtonStyle
} from '@blackbaud/sky-addin-client';

import {
  SkyModalCloseArgs
} from '@skyux/modals';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html'
})
export class MyButtonComponent implements OnInit {

  constructor(
    private addinClientService: AddinClientService
  ) {}

  public ngOnInit() {

    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {
      args.ready({
        showUI: true,
        title: 'Add customer',
        buttonConfig: { style: AddinButtonStyle.Add }
      });
    });

    this.addinClientService.buttonClick.subscribe(() => {
      this.showSkyUxModal();
    });
  }

  public showSkyUxModal() {
    // define context for the modal
    let context = {
      firstName: 'John',
      lastName: 'Doe'
    };

    this.showModal('https://localhost:4200/add-customer', context);
  }

  private showModal(url: string, context: any) {

    this.addinClientService.showModal({
      url: url,
      context: context
    }).subscribe((modalResponse: SkyModalCloseArgs) => {
      let res = JSON.stringify(modalResponse, undefined, 2);
      console.log(res);
    });
  }

}
