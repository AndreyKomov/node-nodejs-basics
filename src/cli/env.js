const parseEnv = () => {
    const currentEnv = process.env;
    const filteredKeysVariables = Object.keys(currentEnv).filter(item => item.startsWith('RSS_'));
    const result = filteredKeysVariables.map((item) => `${item}=${currentEnv[item]};`);

    console.log(`RSS env variables: ${result.join(' ')}`);
};

parseEnv();