const { promisify } = require('node:util');
const exec = promisify(require('node:child_process').exec);

process.env.FIBONACCI_NUMBER = String(30);
process.env.LOOP_NUMBER = String(1_000);
process.env.MAX_CACHE_SIZE = String(100);

const cmd = 'node dist/worker.js';

(async function () {
    await shell('npm run build');

    await Promise.all([
        shell(`LRU_SERVICE=lruCache ${cmd}`),
        shell(`LRU_SERVICE=mnemonistLru ${cmd}`),
        shell(`LRU_SERVICE=tinyLru ${cmd}`),
        shell(`LRU_SERVICE=withoutCache ${cmd}`),
    ]);

    process.exit(0);
})();

async function shell(cmd) {
    const { stderr, stdout } = await exec(cmd);

    if (stderr) {
        console.error(stderr);
        return;
    }

    console.log(stdout);
}
