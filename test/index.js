const PQueue = require('../dist/index.js');

const queue = new PQueue({concurrency: 1});

const pFun = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 2000);
  });
};

(async () => {
	await queue.add(() => pFun('https://sindresorhus.com'));
	console.log('Done: sindresorhus.com');
})();

(async () => {
	await queue.add(() => pFun('https://avajs.dev'));
	console.log('Done: avajs.dev');
})();
