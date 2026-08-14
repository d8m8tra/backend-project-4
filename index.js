#!/usr/bin/env node

import { program } from 'commander';

const parser = () => {
  console.log('test');
};

program
  .version('0.0.1')
  .action(parser)
  .parse(process.argv)
  