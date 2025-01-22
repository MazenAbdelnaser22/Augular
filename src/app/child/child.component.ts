import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() valuefromParent: string= '';
  @Output() sendDataToParent : EventEmitter<string> = new EventEmitter();
  sayhello(){
    // console.log('Hello from child component');
    this.sendDataToParent.emit('Hello from child component');
  }
}
