const { performance } = require('perf_hooks')

// hello.js
for (let m = 0; m < 1e9; m++) {}

console.log(performance.nodeTiming.loopStart)
