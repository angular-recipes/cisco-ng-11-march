class Engine {
    type: string;

    constructor(t) {
        this.type = t;
    }

    start() {
        console.log(this.type + ' engine started...');
    }
}

class EngineRunner {
    run(e: Engine) {
        e.start();
    }
}

let er = new EngineRunner();
let e = new Engine('Maruti');
let e1 = new Engine('Honda');
er.run(e1);
