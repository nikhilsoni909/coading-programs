function Stopwatch() {
    let startTime, endTime, running, durations = 0;
    this.start = function () {
        if (running) {
            throw new Error("already running");

        }
        running = true;
        startTime = new Date();

    };
    this.stop = function () {
        if (!running) {
            throw new Error("already stopped");

        }
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        durations += seconds;
    };
    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        durations = 0;
    };
    Object.defineProperty(this, 'duration', {
        get: function () { return durations; }
    });
}
const sw = new Stopwatch();
