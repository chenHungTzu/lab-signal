import { ChangeDetectionStrategy, Component, DoCheck, ElementRef, Injectable, OnChanges, SimpleChanges, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App11Component, App11Service } from '../app-1-1/app-1-1.component';
import { App12Component, App12Service } from '../app-1-2/app-1-2.component';
import { BehaviorSubject } from 'rxjs';
import { App111Service } from '../app-1-1-1/app-1-1-1.component';

@Injectable()
export class App1Service {
  // prop1$: BehaviorSubject<string> = new BehaviorSubject<string>("App1");
  prop1 : WritableSignal<string> = signal("p1");
}
@Component({
  selector: 'app-app-1',
  standalone: true,
  providers: [],
  imports: [CommonModule, App11Component, App12Component],
  templateUrl: './app-1.component.html',
  styleUrl: './app-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1Component implements DoCheck {
  // service = inject(App1Service);
  // child_service1 = inject(App11Service);
  // child_service2 = inject(App12Service);

  constructor(public service: App1Service,
    public child_service1: App11Service,
    public child_service2: App12Service,
    public child_child_service1: App111Service,
    public elementRef: ElementRef) { }


  click_count = 0;

  click() {
    this.service.prop1.set('self')
    // if (this.click_count % 2 == 0) {
    //   //this.child_service1.prop1$.next('byr');
    //   //this.child_service1.prop1 = "byr";
    //   this.child_service2.prop1.set("byr" + this.click_count);
    // } else {
    //   //this.child_service2.prop1$.next('byr');
    //   //this.child_service2.prop1 = "byr";
    //   // this.child_service2.prop1.set("byr");
    //   this.child_child_service1.prop1.set("byr"+ this.click_count);
    // }
    this.click_count++;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'gray';
  }
  ngDoCheck(): void {
    console.log('ngDoCheck1')
  }


}
