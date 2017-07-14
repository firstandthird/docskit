#!/usr/bin/env node
'use strict';
const taskKit = require('taskkit');
const path = require('path');

taskKit({
  name: 'docskit',
  version: require('./package.json').version,
  configPaths: [
    path.join(__dirname, 'conf')
  ],
  context: {
  }
});
