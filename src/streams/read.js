import * as fs from 'fs';

const read = async () => {
    const filePath = 'src/streams/files/fileToRead.txt';

    fs.createReadStream(filePath).pipe(process.stdout);
};

await read();