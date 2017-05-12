import {bindable, customElement} from 'aurelia-framework';

@customElement('test-the-plugin')
export class Test {
  @bindable something = 'testing works';
}