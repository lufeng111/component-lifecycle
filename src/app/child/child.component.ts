import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input()
  greeting: string;

  @Input()
  // user 属相是一个对象，这个对象只有一个属性name, name是一个string的字符串
  user: {name: string};

  message: string = "初始化消息";

  constructor() { }

  ngOnInit() {
  }

  /*
  ngOnChanges 只有在输入属性变化时才会被调用，父组件greeting变化时，会触发ngOnChanges方法，但是姓名变化的时候不会，应为姓名只是可变对象的值变化了，但是并没有改变user 指向可变对象name,所以不会调用ngOnChanges 方法
  */
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }


}
