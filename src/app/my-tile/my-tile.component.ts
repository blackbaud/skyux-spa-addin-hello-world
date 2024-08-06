import {
  Component,
  OnInit
} from '@angular/core';

import {
  AddinClientService
} from '@blackbaud/skyux-lib-addin-client';

import {
  AddinClientInitArgs
} from '@blackbaud/sky-addin-client';

import {
  SkyModalCloseArgs
} from '@skyux/modals';

@Component({
  selector: 'app-my-tile',
  templateUrl: './my-tile.component.html',
  styleUrls: ['./my-tile.component.scss']
})
export class MyTileComponent implements OnInit {
  public environmentId: string | undefined;
  public context: string | undefined;
  public userIdentityToken: string | undefined;
  public modalResponse: string | undefined;

  constructor(
    private addinClientService: AddinClientService
  ) {}

  public ngOnInit() {
    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {
      this.environmentId = args.envId;
      this.context = JSON.stringify(args.context, undefined, 2);

      args.ready({
        showUI: true,
        title: 'My Custom Tile (SKY UX)'
      });
    });
  }

  public getUserIdentityToken() {
    this.userIdentityToken = undefined;

     this.addinClientService.getUserIdentityToken().subscribe((token: string) => {
       this.userIdentityToken = token;
     });
  }

  public invokeNavigation() {
    this.addinClientService.navigate({
      url: 'https://www.blackbaud.com'
    });
  }

  public openHelp() {
    this.addinClientService.openHelp({
      helpKey: 'applications.html'
    });
  }

  public showSimpleModal() {
    // define context for the modal
    let context = {
      someValue: 'this value was passed to the modal'
    };

    this.showModal('https://localhost:44358/helloworldmodal.html', context);
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
    this.modalResponse = undefined;

    this.addinClientService.showModal({
      url: url,
      context: context
    }).subscribe((modalResponse: SkyModalCloseArgs) => {
      this.modalResponse = JSON.stringify(modalResponse, undefined, 2);
    });
  }

}
