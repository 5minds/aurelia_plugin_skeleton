import {bindable, customElement} from 'aurelia-framework';

@customElement('my-example-tag')
export class MyExample {

  @bindable() public something: string = 'MyExample works';
}
