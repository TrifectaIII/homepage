const importAll = (req: __WebpackModuleApi.RequireContext) => {

    const object: {[key: string]: string} = {};
    req.keys().forEach((item: string) => {

        const key = item.replace('./', '').
            replace(/_/gu, ' ');
        object[key] = req(item).default;

    });
    return object;

};

const projectImages = importAll(require.context('./', false, /\.(?<image>png|gif)$/u));

export default projectImages;
