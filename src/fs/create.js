// var fs = require('fs');
import * as fs from 'fs';

const freshData = 'I am fresh and young';
const filePath = 'src/fs/files/fresh.txt';
const create = async () => {
    fs.access(filePath, fs.constants.F_OK, (error) => {
        if (!error) {
            throw new Error('FS operation failed');
        }
    });

    fs.writeFile(filePath, freshData, (error) => {
     if (error) {
        throw new Error(`Something went wrong: ${error}`);
    }
    });
};

await create();