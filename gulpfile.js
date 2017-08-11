'use strict';

const gulptraum = require('gulptraum');
const gulptraumTypescriptPlugin = require('gulptraum-typescript');
const gulptraumSassPlugin = require('gulptraum-sass');
const tsconfig = require('tsconfig');

const buildSystemConfig = {
  copy: {
    'src/**/*.html': 'dist/amd/',
  },
  conventionalTasks: {
    build: {
      tasksBefore: ['clean', 'copy'],
    },
  }
};

const buildSystem = new gulptraum.BuildSystem(buildSystemConfig);

buildSystem.config = buildSystemConfig;

const tsConfigObj = tsconfig.loadSync('.');

const typeScriptConfig = Object.assign({
  compileToModules: ['amd']
}, tsConfigObj.config);

const sassConfig = {
  paths: {
    output: 'dist/amd/',
  }
};

const gulp = require('gulp');

buildSystem
  .registerPlugin('typescript', gulptraumTypescriptPlugin, typeScriptConfig)
  .registerPlugin('sass', gulptraumSassPlugin, sassConfig)
  .registerTasks(gulp);
