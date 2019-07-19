import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/*
1: ngOnChange() 方法调用与否需要了解什么是可变对象，什么是不可变对象？
在javascript中，字符串是不可变的，当一个字符串在内存中被创建出来以后，值永远不会改变，但是对一个变量greeting来说只会改变，
因为他的指针从 "hello" 这个内存地址 指向了 "hello world" 内存地址，
在javascript 中对象是可变的，user = {name: "Tom"}创建一个地址，user指向这个地址，user.name = "Jarry";创建另一个"Jarry" 字符串的内存地址，但是user指针仍然指向最开始创建的内存地址，只是这个内存地址的数据变化了而已




*/
export class AppComponent {
  title = 'Tom';
  greeting: string = "hello";
  user:{name: string} = {name: "Tom"};

  constructor() {
    // var greeting = "hello";
    // greeting = "hello world";

    // var user = {name: "Tom"};
    // user.name = "Jarry";

  }


}
