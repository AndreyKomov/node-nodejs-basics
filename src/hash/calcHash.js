import {createHash} from 'crypto';
import * as fs  from 'fs';
import { stdout } from 'node:process';

const calculateHash = async () => {
    const hash = createHash('sha256');
    const stream = fs.createReadStream('src/hash/files/fileToCalculateHashFor.txt');

    

    stream.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();