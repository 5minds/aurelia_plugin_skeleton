import {bindable, customElement} from 'aurelia-framework';

@customElement('my-example-tag')
export class MyExample {
  @bindable something = 'testing works again';
}