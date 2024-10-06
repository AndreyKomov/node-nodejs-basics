import * as fs from 'fs';

const renamedFilePath = 'src/fs/files/wrongFilename.txt';
const properFilePath = 'src/fs/files/properFilename.md';

const rename = async () => {
    fs.rename(renamedFilePath, properFilePath, (err) => {
        if (err) throw new Error('FS operation failed');
        console.log('Rename complete!');
    });
};

await rename();