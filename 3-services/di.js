var Engine = /** @class */ (function () {
    function Engine(t) {
        this.type = t;
    }
    Engine.prototype.start = function () {
        console.log(this.type + ' engine started...');
    };
    return Engine;
}());
var EngineRunner = /** @class */ (function () {
    function EngineRunner() {
    }
    EngineRunner.prototype.run = function () {
        var e = new Engine('Maruti');
        e.start();
    };
    return EngineRunner;
}());
var er = new EngineRunner();
er.run();
