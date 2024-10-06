import * as fs from 'fs';

const deletedFilePath = 'src/fs/files/fileToRemove.txt';
const remove = async () => {
    fs.rm(deletedFilePath, (err) => {
        if (err && err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    });
};

await remove();