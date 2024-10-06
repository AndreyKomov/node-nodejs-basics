import * as fs from 'fs';

const readedFilePath = 'src/fs/files/fileToRead.txt';
const read = async () => {
    fs.readFile(readedFilePath, 'utf8', (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            } else {
                throw new Error(`Something went wrong: ${err}`);
            }
        }

        console.log(`The file content is: ${content}`);
    })
};

await read();