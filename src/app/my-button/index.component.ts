import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { MyButtonComponent } from './my-button.component';

@Component({
    selector: 'app-my-button-route-index',
    templateUrl: './index.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MyButtonComponent]
})
export class MyButtonRouteIndexComponent { }
