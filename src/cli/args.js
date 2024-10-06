import { argv } from 'node:process';

const parseArgs = () => {
    const args = process.argv;

    console.log(args.map((item, index) => index%2 ? `is ${item},` : item.slice(2)).join(' '));
    
};

parseArgs();