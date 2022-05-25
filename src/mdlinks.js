/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/extensions
import * as api from './api.js';

const mdlinks = (path) => {
  if (api.routeExists(path)) {
    api.absolutePath(path);
    console.log('la ruta existe', api.absolutePath(path));
  } else {
    console.log('Error: Path not found');
  }
};
// console.log('pasa', mdlinks('/Users/Yohana Falconi/Desktop/Lab/LIM017-md-links/pruebaDir'));
// mdlinks('/Users/Yohana Falconi/Desktop/Lab/LIM017-md-links/pruebaDir');
console.log(mdlinks('C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\pruebaDir'));

export {
  mdlinks,
};
