import { Worker} from 'node:worker_threads';

const cpuNumber = 8;
const startData = 9;
const allPromises = [];
const workerFilePath = './src/wt/worker.js';

const performCalculations = async () => {
    for(let i = 0; i < cpuNumber; i++) {
        allPromises.push(
            new Promise((resolve, reject) => {
                const worker = new Worker(workerFilePath, {workerData: startData + i});

                worker.on('message', (data) => {
                    resolve({
                        index: i,
                        result: {status: 'resolved', data }
                    });
                });

                worker.on('error', () => {
                    resolve({
                        index: i,
                        result: { status: 'error', data: null }
                    });
                });
            })
        );
    }

    Promise.all(allPromises).then((result) => {
        console.log(result.sort((a,b) => a.index - b.index).map(item => item.result));
    });
};

await performCalculations();