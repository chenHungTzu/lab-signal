import { ChangeDetectionStrategy, Component, ElementRef, Injectable, OnChanges, Signal, SimpleChanges, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { App1Service } from '../app-1/app-1.component';
import { App11Service } from '../app-1-1/app-1-1.component';
import { App121Component } from '../app-1-2-1/app-1-2-1.component';

@Injectable()
export class App12Service {
  //prop1$: BehaviorSubject<string> = new BehaviorSubject<string>("p12");
  //prop1 : string = "p12";
  prop1 : WritableSignal<string> = signal("p12");
}


@Component({
  selector: 'app-app-1-2',
  standalone: true,
  providers: [],
  imports: [CommonModule , App121Component],
  templateUrl: './app-1-2.component.html',
  styleUrl: './app-1-2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App12Component {
  // service = inject(App12Service);
  // service_ = inject(App11Service);
  // service_root = inject(App1Service);


  constructor(public service: App12Service,
    public service_: App11Service,
    public service_root: App1Service,
    public elementRef: ElementRef) {

    // this.service.prop1$.subscribe(x => console.log(`${x} app1-2`));
    // this.service_.prop1$.subscribe(x => console.log(`${x} app1-2`));
  }

  click() {
    this.service_root.prop1.set('by2');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck1-2')
  }

}
