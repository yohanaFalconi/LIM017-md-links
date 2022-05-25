/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/prefer-default-export
import fs from 'fs';
import path from 'path';

export const routeExists = (route) => fs.existsSync(route);

export const absolutePath = (route) => (path.isAbsolute(route) ? route : path.resolve(route));

const checkPath = (route) => fs.statSync(route);

const readFile = (route) => fs.readFileSync(route, { encoding: 'utf-8' });

const readDirectory = (route) => fs.readdirSync(route, { encoding: 'utf-8' });

export const getMdFiles = (route) => {
  const fileArray = [];
  if (checkPath(route).isFile()) {
    if (path.extname(route) === '.md') {
      fileArray.push(route);
    }
  } else {
    readDirectory(route).forEach((file) => getMdFiles(path.join(route, file)));
  }
  console.log(fileArray);
  return fileArray;
};

getMdFiles('C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\pruebaDir');
// checkPath('C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\pruebaDir\\prueba1.txt');
// console.log(readFile('C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\pruebaDir\\archivo.md'));
export const getLinks = (filePath) => {

};