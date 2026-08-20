#!/usr/bin/env node
import { program } from 'commander';
import fileCreate from './fileCreate.js';

const app = (url) => {
  const options = program.opts();

  return fileCreate(url, options)
    .then((filePath) => {
      console.log(filePath);
    });
};

program
  .description('Page loader utility')
  .name('page-loader')
  .version('0.0.1')
  .option('-o, --output [dir]', 'output dir', process.cwd())
  .action(app) // Когда программа будет запущена без какой-то специальной команды выполни функцию
  .arguments('<url>')
  .parse(process.argv);
