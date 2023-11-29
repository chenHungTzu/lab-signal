import { ChangeDetectionStrategy, Component, ElementRef, Injectable, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App12Service } from '../app-1-2/app-1-2.component';
import { App1Service } from '../app-1/app-1.component';

@Injectable()
export class App121Service {
  //prop1$: BehaviorSubject<string> = new BehaviorSubject<string>("p11");
  //prop1: string = "p11";
  prop1 : WritableSignal<string> = signal("p121");
}

@Component({
  selector: 'app-app-1-2-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-1-2-1.component.html',
  styleUrl: './app-1-2-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App121Component {

  constructor(public service: App121Service,
    public service_: App12Service,
    public service_root: App1Service,
    public elementRef: ElementRef) {

    // this.service.prop1$.subscribe(x => console.log(`${x} app1-1`));
    // this.service_.prop1$.subscribe(x => console.log(`${x} app1-1`));
    //this.service_root.prop1$.subscribe(console.log);
  }

  click() {
    this.service_root.prop1.set('by12');
  }


  ngDoCheck(): void {
    console.log('ngDoCheck1-2-1')
  }
}
