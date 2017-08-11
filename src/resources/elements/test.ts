import {bindable, customElement} from 'aurelia-framework';

@customElement('test-the-plugin')
export class Test {

  @bindable() public something: string = 'Test works';
}
