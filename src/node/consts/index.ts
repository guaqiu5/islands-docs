import * as path from 'path'

export const ROOT = path.join(__dirname,'..','..','..')

export const Default_TEMPLATE = path.join(ROOT,"template.html")

export const CLIENT_ENTRY_PATH = path.join(
    ROOT,
    "src",
    "runtime",
    "client-entry.tsx"
  );