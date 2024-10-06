import * as fs from 'fs';

const write = async () => {
    const filePath = 'src/streams/files/fileToWrite.txt';
    const stdin = process.stdin;

    stdin.pipe(fs.createWriteStream(filePath, 'utf-8'));
};

await write();