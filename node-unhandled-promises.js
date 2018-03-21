  /* Show unhandled promise rejections */
  process.on('unhandledRejection', (error, p) => {
    console.log('Unhandled rejection at: Promise: ', p, '\nReason: ', error.stack);
  });