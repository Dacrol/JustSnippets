/*
  Start a REPL if server was started with --inspect or --debug.
  Note that await in the REPL is only available in Node v10.0+.
*/
const nodeArgs = process.execArgv.join();
if (nodeArgs.includes('--inspect') || nodeArgs.includes('--debug')) {
  // Start read-eval-print loop
  const nodeRepl = require('repl');
  setTimeout(async () => {
    console.info('Starting REPL 🐍');
    const repl = nodeRepl.start({
      useColors: true,
      prompt: '> ',
      input: process.stdin,
      output: process.stdout,
      useGlobal: true
    });
    let context = repl.context;
    Object.assign(context, {
    // app: app
    // Stuff that should be accessible in the REPL
    });
    repl.on('exit', function () {
      console.info('REPL closed');
    });
  }, 2500);
}
