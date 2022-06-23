/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/extensions
import * as apiFn from './api.js';

// eslint-disable-next-line max-len
export const mdLinks = (path, options = {}) => new Promise((resolve, reject) => {
  if (apiFn.routeExists(path)) {
    if (apiFn.getMdFiles(path).length !== 0) {
      const linksArray = apiFn.getLinks(path);
      if (linksArray.length > 0) {
        if (options.validate) {
          apiFn.getLinkStatus(path).then((ele) => resolve(ele))
            .catch((err) => err);
        } else {
          resolve(linksArray);
        }
      } else {
        reject(new Error('Any link found'));
      }
    } else {
      reject(new Error('Markdown (.md) files not found'));
    }
  } else {
    reject(new Error('Path not found'));
  }
});
// mdLinks('./test-folder').then((ele) => console.log(ele)).catch((e) => console.log(e));
