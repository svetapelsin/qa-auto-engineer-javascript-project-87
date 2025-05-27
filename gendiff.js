#!/usr/bin/env node

import { program } from 'commander';

const command = () => {

};

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .option('-h, --help', 'display help for command');