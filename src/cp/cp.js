import {fork} from 'node:child_process';

const spawnChildProcess = async (args) => {
    const scriptPath = 'src/cp/files/script.js';
    const childProcess = fork(
        scriptPath,
        args,
        {
            stdio: ['pipe', 'pipe', 'pipe', 'ipc']
        }
    );

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */['qq', 2]);
