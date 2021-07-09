
export interface State {
    doAction(context: Context): void;
}

/**
 * This is Current context
 */
export class Context {
    private state: any;

    constructor() {
        this.state = null;
    }

    public setState(state: State): void {
        this.state = state;
    }

    public getState(): State {
        return this.state;
    }
}




export class StartState implements State {
    public doAction(context): void {
        console.log("Start action");
        context.setState(this)
    }

    public toString(): String {
        return "Start State";
    }
}

export class StopState implements State {
    public doAction(context): void {
        console.log("Stop action");
        context.setState(this)
    }

    public toString(): String {
        return "Stop State";
    }
}


