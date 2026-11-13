import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { MyBoxComponent } from './my-box.component';

@Component({
    selector: 'app-my-box-route-index',
    templateUrl: './index.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MyBoxComponent]
})
export class MyBoxRouteIndexComponent { }
