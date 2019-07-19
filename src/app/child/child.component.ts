import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  greeting: string;

  @Input()
  // user 属相是一个对象，这个对象只有一个属性name, name是一个string的字符串
  user: {name: string};

  // 用来存老的username
  oldUsername: string;

  // changeDetected 用来标记当前username 是不是发生了变化
  changeDetected:boolean = false;

  // noChangeCount 计数器
  noChangeCount: number = 0

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

  ngDoCheck(): void {
    if(this.user.name != this.oldUsername) {
      this.changeDetected = true;
      console.log("DoCheck:user.name从"+ this.oldUsername+ "变为"+ this.user.name);
      this.oldUsername = this.user.name;
    }

    if(this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      this.noChangeCount = this.noChangeCount + 1;
      console.log("DoCheck:user.name没变化时ngDoCheck方法已经被调用"+this.noChangeCount+"次");
    }
    this.changeDetected = false;

  }



}
