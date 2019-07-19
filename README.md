# ComponentLifecycle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 变更检测和doCheck 钩子
<!-- 
1： "zone.js": "~0.9.1" 的作用是保证组件属性的变化和页面的变化是同步的，浏览器中发生的任何异步事件都会触发变更检测，比如点击按钮，输入数据，数据从服务器返回了，调用了setTimeout 方法等，在angular1中任何原生的事件都会触发脏检查，但是在angular2中，有了这个文件zone.js会处理好所有的同步事件，所以可以任意使用原生事件，当变更检测运行时，他会检测组件模板上所有的绑定关系，如果一个组件的属性被改变，那么与其绑定的模板的相应区域则可能需要被更新，需要注意的是，变更检测机制只是需要将属性的改变同步到模板上，变更检测机制本身不会改变组件属性的值，

一个angualr应用其实就是一个以主组件为根的组件树，当angular运行时每个组件都会生成他自己的变更检测器，当任何一个变更检测器检测到变化，zone.js 就会根据组件的变更检查策略来检查组件，以判断组件是否需要更新他的模板，

angular 实现两个变更检测策略：Default策略和 OnPush策略，
如果所有的组件都使用 Default策略 ，那么不管变更发生在那个组件，zone.js 都会检查整个组件数，如果有一个特定的组件声明自己的变更策略为OnPush, 那么只有当这个组件的输入属性发生变化时，zone.js才会检测这个组件及其子组件，否则不会被检查，

使用Default策略时，组件树中任何一个组件发生变化的时候，整个组件树都会被检查一遍，除了特定声明OnPush策略 的组件及其子组件，所谓的检查就是调doCheck()钩子，而且检查是由最根上的组件开始往下检查所有的组件，它是不管变更发生在什么位置的，

变更检测是angular 中最复杂的一个模块，一般情况下在编写一个对性能要求很高的复杂页面时才会需要更深入的了解变更检测原理以及如何控制其行为，比如说需要编写包含几百个单元格的表格，而且每一个单元格的值都会频繁的变动，

 -->
