export class HomeView {
    show() {
        console.log('HOme page')
    }
}

export class StudentView {
    show() {
        console.log('HOme page')
    }
}

export class Dispatcher {
    private studentView;
    private homeView;

    constructor() {
        this.studentView = new StudentView();
        this.homeView = new HomeView();
    }

    public dispatch(request: string) {
        if (request === 'student') {
            this.studentView.show();
        } else {
            this.homeView.show();
        }
    }
}


export class FrontController {
    private dispatcher;

    constructor() {
        this.dispatcher = new Dispatcher()
    }

    private isAuthenticUser() {
        console.log('User is authenciated successfully.')

        return true;
    }

    private trackRequest(request) {
        console.log("Page requested: " + request)

    }

    public dispatchRequest(request) {
        // 1
        this.trackRequest(request)
        // 2
        if(this.isAuthenticUser()){
            this.dispatcher.dispatch(request)
        }
    }
}