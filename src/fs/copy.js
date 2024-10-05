import * as fs from 'fs';

const sourceFolderPath = 'src/fs/files';
const destinationFolderPath = 'src/fs/files_copy';

const copy = async () => {
    fs.cp(
        sourceFolderPath,
        destinationFolderPath,
        {errorOnExist: true, force: false, recursive: true},
        (error) => {
        if (error) {
            if (error.code === 'ERR_FS_CP_EEXIST') {
                throw new Error('FS operation failed');
            } else {
                throw error;
            }
        }
    })
};

await copy();
