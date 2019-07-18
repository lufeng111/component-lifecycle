import { Component, OnInit, AfterViewChecked, OnDestroy, AfterViewInit, AfterContentInit, AfterContentChecked, DoCheck, OnChanges, Input } from '@angular/core';

let logIndex: number = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
/*
  1: 在生成的LifeComponent 中已经有了OnInit 的接口，每一个钩子都是@angular/core 定义的一个接口，每一个接口都有一个唯一的方法ngOnInit()，ngOnInit()方法的名字是由接口的名字加上ng 前缀构成的，
  2： OnInit 是一个接口，ngOnInit 是这个接口的方法
  3: 从技术角度讲接口对javascript和typescript开发者都是可选的，javascript语言本身没有接口，angular在运行时看不到typescript接口，因为在编译成javascript的时候已经消失了，
    angular 会检查组件的类，一旦发现钩子方法被定义，angular 会找到并调用ngOnInit(）方法, 有没有这个接口无所谓，但是建议把接口写上，因为会获得IDE环境的支持
  4: 把所有接口全部写上，并写出方法，比较之间的调用顺序
  5： 在外部声明一个计数器logIndex
  6: @Input() 输入属性是为了区别constructor和OnInit的区别
 */
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  name: string;

  logIt(msg: string) {
    console.log(`#${logIndex++} ${msg}`)
  }

  constructor() {
    this.logIt("name属性在constructor里的值是："+ name);
   }

  ngOnInit() {
    this.logIt("ngOnInit");
  }
  /*
  ngOnChanges传了一个类型为SimpleChanges 对象changes:SimpleChanges进来，这里包含了

  ngOnChanges 这个方法是当一个父组件修改或初始化一个子组件输入属性的时候会被调用，如果一个组件没有输入属性，ngOnChanges方法永远不会被调用，
  */
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    // ngOnChanges 包含所有变化前的值和变化后的值，用changes属性把name变化后当前的值取出来
    let name = changes['name'].currentValue;
    this.logIt("name属性在ngOnChanges里的值是："+ name);
  }
  ngDoCheck(): void {
    this.logIt("ngDoCheck");
  }
  ngAfterContentInit(): void {
    this.logIt("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    this.logIt("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    this.logIt("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    this.logIt("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    this.logIt("ngOnDestroy");
  }




}
