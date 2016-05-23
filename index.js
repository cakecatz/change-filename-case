#!/usr/bin/env node
var program = require('commander');
var path = require('path');
var changeFilename = require('./change-filename-case');
var fs = require('fs');

program.
  arguments('[file]')
  .option('-c, --case <case>')
  .option('--dry')
  .action(function (file) {
    try {
      var oldFile = fs.realpathSync(file);
      var parsedFile = path.parse(oldFile);
    } catch(e) {
      console.error('No such file or directory ' + file);
    }
    var renamedFilename = changeFilename(parsedFile.name, program.case);

    var newFile = parsedFile.dir + '/' + renamedFilename + parsedFile.ext;

    if (!program.dry) {
      fs.renameSync(oldFile, newFile);
    }

    console.log(oldFile + ' -> ' + newFile);
  })
  .parse(process.argv);
