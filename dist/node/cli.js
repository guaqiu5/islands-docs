"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cac_1 = require("cac");
const dev_1 = require("./dev");
const cli = (0, cac_1.default)('islands').version('0.0.1').help();
cli.command('dev [root]', 'start').action(async (root) => {
    console.log('启动dev', root);
    const server = await (0, dev_1.createDevServer)(root);
    await server.listen();
    server.printUrls();
});
cli.parse();
