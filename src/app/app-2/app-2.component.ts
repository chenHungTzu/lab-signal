import { ChangeDetectionStrategy, Component, Injectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { App1Service } from '../app-1/app-1.component';
import { App11Service } from '../app-1-1/app-1-1.component';
import { App12Service } from '../app-1-2/app-1-2.component';
import { App111Service } from '../app-1-1-1/app-1-1-1.component';
import { App121Service } from '../app-1-2-1/app-1-2-1.component';

@Injectable()
export class App2Service {
  prop1$: BehaviorSubject<string> = new BehaviorSubject<string>("App2");
}

@Component({
  selector: 'app-app-2',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './app-2.component.html',
  styleUrl: './app-2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2Component {
  service = inject(App2Service);
  service1 = inject(App1Service);
  child_service1 = inject(App11Service);
  child_service2 = inject(App12Service);
  child_child_service1 = inject(App111Service);
  child_child_service2 = inject(App121Service);

  click_count = 0;

  click() {
    if (this.click_count % 2 == 0) {
      //this.child_service1.prop1$.next('byr');
      //this.child_service1.prop1 = "byr";
      this.service1.prop1.set("byr"+ this.click_count);
    } else {
      //this.child_service2.prop1$.next('byr');
      //this.child_service2.prop1 = "byr";
      this.child_child_service2.prop1.set("byr"+ this.click_count);
    }
    this.click_count++;

  }
  ngDoCheck(): void {
    console.log('ngDoCheck2')
  }
}
