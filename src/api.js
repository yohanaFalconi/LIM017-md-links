/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/prefer-default-export
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

export const routeExists = (route) => fs.existsSync(route);
export const absolutePath = (route) => (path.isAbsolute(route) ? route : path.resolve(route));
export const isFile = (route) => fs.statSync(route).isFile();
export const readFile = (route) => fs.readFileSync(route, { encoding: 'utf-8' });
export const readDirectory = (route) => fs.readdirSync(route, { encoding: 'utf-8' });

export const getMdFiles = (route) => {
  const fileArray = [];

  const recursion = (routeParameter) => {
    if (isFile(routeParameter)) {
      if (path.extname(routeParameter) === '.md') fileArray.push(routeParameter);
      return fileArray;
    }
    readDirectory(routeParameter).forEach((doc) => recursion(path.join(routeParameter, doc)));
    return fileArray;
  };

  recursion(absolutePath(route));
  return fileArray;
};
// getMdFiles('C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\test-folder');

export const getLinks = (route) => {
  let arrayLinks = [];
  getMdFiles(route).forEach((doc) => {
    const rgexURL = /\(((?:\/|https?:\/\/).*)\)/g; // obtiene (links) contenidos en cada archivo
    const regExp = /\[(.*)\]\(((?:\/|https?:\/\/).*)\)/gi; // obtiene [textoReferenciaDelLink] y (links)
    const regText = /\[(.*)\]/g; // obtiene [textoReferenciaDelLink]
    const arrayLinksWithText = readFile(doc).match(regExp);

    if (arrayLinksWithText != null) {
      const arrayOfLinks = arrayLinksWithText.map((links) => {
        const uniqueLinks = links.match(rgexURL).join().slice(1, -1);
        const uniqueText = links.match(regText).join().slice(1, -1);
        return {
          href: uniqueLinks,
          text: uniqueText,
          file: doc,
        };
      });
      arrayLinks = arrayLinks.concat(arrayOfLinks);
    }
  });
  return arrayLinks;
};
// getLinks('test-folder\\fileMD.md');

export const getLinkStatus = (route) => {
  const arrayStatusLinks = getLinks(route).map((link) => fetch(link.href)
    .then((response) => ({
      href: link.href,
      text: link.text,
      file: link.file,
      status: response.status,
      message: response.status >= 200 && response.status < 400 ? 'Ok' : 'Fail',
    }))
    .catch((error) => ({
      href: link.href,
      text: link.text,
      file: link.file,
      status: 'Failed request',
      message: error,
    })));
  return Promise.all(arrayStatusLinks);
};

// getLinkStatus('./test-folder').then((ele) => console.log(ele)).catch((err) => console.log(err));

export const totalLinks = (array) => array.length;
export const uniqueLinks = (array) => [...new Set(array.map((element) => element.href))].length;
export const brokenLinks = (array) => array.filter((element) => element.message === 'Fail').length;
