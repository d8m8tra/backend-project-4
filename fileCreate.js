import fs from 'node:fs/promises';
import path from 'node:path';
import parser from './parser.js';

const fileCreate = (url, options) => {
  const outputDir = options.output || process.cwd();

  return parser(url).then((result) => {
    const filePatch = path.join(outputDir, `${result.fileName}.html`);

    return fs.writeFile(filePatch, result.data)
      .then(() => filePatch);
  });
};

export default fileCreate;
