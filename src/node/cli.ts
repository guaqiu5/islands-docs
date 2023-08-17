import cac from 'cac'
import { createDevServer } from './dev'

const cli = cac('islands').version('0.0.1').help()

cli.command('dev [root]', 'start').action(async (root: string) => {
    console.log('启动dev', root)
    const server = await createDevServer(root)
    await server.listen()
    server.printUrls()
})

cli.parse()