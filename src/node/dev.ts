import { createServer } from 'vite'
import {pluginIndexHtml} from './plugin-island/indexHtml'
import pluginReact from "@vitejs/plugin-react";

export const createDevServer = (root: string) => {
    return createServer({ root,plugins:[pluginIndexHtml(), pluginReact()] })
}