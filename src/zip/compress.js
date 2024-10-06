import { pipeline } from 'node:stream';
import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from'node:fs';

const compress = async () => {
    const gzip = createGzip();
    const compressedFilePath = createReadStream('src/zip/files/fileToCompress.txt');
    const arhiveFilePath = createWriteStream('src/zip/files/archive.gz');

    pipeline(compressedFilePath, gzip, arhiveFilePath, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = -1;
        }
    });
};

await compress();