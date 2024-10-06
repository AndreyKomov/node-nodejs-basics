import * as fs from 'fs';

const filesFolderPath = 'src/fs/files';
const list = async () => {
    fs.readdir(filesFolderPath, (err, fileList) => {
        if (err) {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            } else {
                throw new Error(`Something went wrong: ${err}`)
            }
        }

        console.log(`Files list: ${fileList}`);
    });
};

await list();