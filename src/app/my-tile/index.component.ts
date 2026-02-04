import {
  Component
} from '@angular/core';
import { MyTileComponent } from './my-tile.component';

@Component({
    selector: 'app-my-tile-route-index',
    templateUrl: './index.component.html',
    imports: [MyTileComponent]
})
export class MyTileRouteIndexComponent { }
