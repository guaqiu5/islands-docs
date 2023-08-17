import { Plugin } from "vite"
import { readFile } from "fs/promises"
import { Default_TEMPLATE,CLIENT_ENTRY_PATH } from '../consts/index'

export const pluginIndexHtml: () => Plugin = () => {
    return {
        name: 'island:index-html',
        transformIndexHtml(html) {
            return {
              html,
              tags: [
                {
                  tag: "script",
                  attrs: {
                    type: "module",
                    src: `/@fs/${CLIENT_ENTRY_PATH}`,
                  },
                  injectTo: "body",
                },
              ],
            };
          },
        configureServer(server) {
            return () => {
                server.middlewares.use(async (req, res, next) => {
                    let html = await readFile(Default_TEMPLATE, 'utf8')
                    console.log('html',html)
                    try {
                        html = await server.transformIndexHtml(
                            req.url,
                            html,
                            req.originalUrl
                        );
                        console.log('html',html)
                        res.statusCode = 200;
                        res.setHeader("Content-Type", "text/html");
                        res.end(html);
                    } catch (e) {
                        //ignore
                        return next(e)
                    }
                }
                )
            }
        }
    }
} 