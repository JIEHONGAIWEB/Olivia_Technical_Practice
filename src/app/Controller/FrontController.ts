import { Dispatcher } from './../Dispatcher/Dispatcher';
export class FrontController {
  dispatcher: any;
  constructor() {
    this.dispatcher = new Dispatcher();
  }

  private isAuthenticUser() {
    console.log('Check User Auth');
    return true;
  }

  private trackRequest(request: string) {
    console.log('User Request:', request);
  }

  public dispatchRequest(request: string) {
    this.trackRequest(request);
    if (this.isAuthenticUser()) {
      this.dispatcher.dispatch(request);
    }
  }
}
