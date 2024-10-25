import { Component, OnInit } from '@angular/core';

import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';

import { AddinClientInitArgs } from '@blackbaud/sky-addin-client';

@Component({
  selector: 'app-my-box',
  templateUrl: './my-box.component.html',
  styleUrls: ['./my-box.component.scss'],
})
export class MyBoxComponent implements OnInit {
  public environmentId: string | undefined;
  public context: string | undefined;
  public userIdentityToken: string | undefined;

  constructor(private addinClientService: AddinClientService) {}

  public ngOnInit() {
    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {
      args.ready({
        showUI: true,
        title: 'Custom Box',
        boxConfig: {
          controls: [
            {
              name: 'Action 1',
              action: 'action1',
            },
            {
              name: 'Action 2',
              action: 'action2',
            },
          ],
        },
      });
    });
  }

  public getUserIdentityToken() {
    this.userIdentityToken = undefined;

    this.addinClientService
      .getUserIdentityToken()
      .subscribe((token: string) => {
        this.userIdentityToken = token;
      });
  }
}
