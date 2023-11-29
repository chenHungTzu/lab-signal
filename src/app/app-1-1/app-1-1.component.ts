import { ChangeDetectionStrategy, Component, ElementRef, Injectable, OnChanges, Signal, SimpleChanges, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { App1Service } from '../app-1/app-1.component';
import { App12Service } from '../app-1-2/app-1-2.component';
import { App111Component } from '../app-1-1-1/app-1-1-1.component';

@Injectable()
export class App11Service {
  //prop1$: BehaviorSubject<string> = new BehaviorSubject<string>("p11");
  //prop1: string = "p11";
  prop1 : WritableSignal<string> = signal("p11");
}


@Component({
  selector: 'app-app-1-1',
  standalone: true,
  providers: [],
  imports: [CommonModule , App111Component],
  templateUrl: './app-1-1.component.html',
  styleUrl: './app-1-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App11Component {



  // service = inject(App11Service);
  // service_ = inject(App12Service);
  // service_root = inject(App1Service);

  constructor(public service: App11Service,
    public service_: App12Service,
    public service_root: App1Service,
    public elementRef: ElementRef) {

    // this.service.prop1$.subscribe(x => console.log(`${x} app1-1`));
    // this.service_.prop1$.subscribe(x => console.log(`${x} app1-1`));
    //this.service_root.prop1$.subscribe(console.log);
  }

  click() {
    this.service_root.prop1.set('by1');
  }


  ngDoCheck(): void {
    console.log('ngDoCheck1-1')
  }

}
