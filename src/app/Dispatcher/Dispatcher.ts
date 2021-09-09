import { Home } from './../View/home';
import { Page_01 } from './../View/page1';
export class Dispatcher {
  page_01: any;
  home: any;

  constructor() {
    this.page_01 = new Page_01();
    this.home = new Home();
  }

  public dispatch(request: string) {
    if (request === 'PAGE_01') {
      this.page_01.show();
    } else {
      this.home.show();
    }
  }
}
