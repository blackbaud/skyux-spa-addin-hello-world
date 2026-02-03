import {
  Component
} from '@angular/core';
import { MyBoxComponent } from './my-box.component';

@Component({
    selector: 'app-my-box-route-index',
    templateUrl: './index.component.html',
    imports: [MyBoxComponent]
})
export class MyBoxRouteIndexComponent { }
