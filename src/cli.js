#!/usr/bin/env node
/* eslint-disable import/extensions */
import * as template from './templates.js';
import { mdLinks } from './md-links.js';

// const [, , ...args] = process.argv;
const command = process.argv;
const path = process.argv[2];
const option = process.argv[3];
const secondOption = process.argv[4];

switch (command.length) {
case 2:
  template.welcomeMsg();
  break;
case 3:
  if (path === '--help' || path === '--h') {
    console.log(template.helpMsg);
  } else if (path === '') {
    console.log('Enter a path and options');
  } else {
    mdLinks(path)
      .then((element) => template.arraylinks(element))
      .catch((error) => console.log(error));
  }
  break;
case 4:
  if (option === '--validate' || option === '--v') {
    mdLinks(path, { validate: true })
      .then((element) => template.arraylinksStatus(element))
      .catch((error) => console.log(error));
  } else if (option === '--stats' || option === '--s') {
    mdLinks(path, { stats: true })
      .then((element) => template.statsOption(element))
      .catch((error) => console.log(error));
  } else if (option === '--vs') {
    mdLinks(path, { validate: true, stats: true })
      .then((element) => template.statsValidate(element))
      .catch((error) => console.log(error));
  } else {
    template.neonChalkAnimation('Error: Enter a right option');
  }
  break;
case 5:
  if (option === '--validate' && secondOption === '--stats') {
    mdLinks(path, { validate: true, stats: true })
      .then((element) => template.statsValidate(element))
      .catch((error) => console.log(error));
  } else {
    console.log('Enter a right option');
  }
  break;
default:
  console.log('Enter a path and options');
}

// test-folder\\fileMD.md
// ./test-folder
