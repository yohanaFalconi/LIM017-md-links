// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from '@jest/globals';
// eslint-disable-next-line import/extensions
import * as api from '../src/api.js';

jest.mock('node-fetch', () => jest.fn());
// jest.mock('node-fetch');

const route = 'C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\test-folder\\fileMD.md';
const routeFalse = 'C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-mdlinks\\test-folder';
const relativePath = 'fileMD.md'; // ./test-folder
const absolutePath = 'C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\fileMD.md';
const directoryPath = 'C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\test-folder';
const shortFilePath = './test-folder/break-linksMD.md';
const fileContent = '## **This file contains a invalid link** Node.js is an open-source, cross-platform, JavaScript runtime environment.For information on using Node js, see[the Node.js in Git Hub.](https://github.com/error404omg)';
const shortDirectoryPath = './test-folder';
const directoryDocs = [
  'break-linksMD.md',
  'file.txt',
  'fileMD.md',
  'ind.js',
  'mdlinks.md',
];
const directoryMdDocs = [
  'C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\test-folder\\break-linksMD.md',
  'C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\test-folder\\fileMD.md',
  'C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\test-folder\\mdlinks.md',
];
const MdFilePath = [
  'C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\test-folder\\fileMD.md',
];
const getLinksArray = [
  {
    href: 'https://github.com/error404omg',
    text: 'the Node.js in Git Hub.',
    file: 'C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\test-folder\\break-linksMD.md',
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\test-folder\\fileMD.md',
  },
  {
    href: 'https://www.agiratech.com/understandin-routing-in-node-js',
    text: 'Routing in Node.js tutorial with specific examples',
    file: 'C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\test-folder\\fileMD.md',
  },
];

const arraySample = [
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\test-folder\\fileMD.md',
    status: 200,
    message: 'Ok',
  },
  {
    href: 'https://www.agiratech.com/understandin-routing-in-node-js',
    text: 'Routing in Node.js tutorial with specific examples',
    file: 'C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\test-folder\\fileMD.md',
    status: 404,
    message: 'Fail',
  },
  {
    href: 'https://www.agiratech.com/understandin-routing-in-node-js',
    text: 'Routing in Node.js tutorial with specific examples',
    file: 'C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\test-folder\\fileMD.md',
    status: 404,
    message: 'Fail',
  },
];

describe('routeExists', () => {
  it('should return that the route is true', () => {
    expect(api.routeExists(route)).toBe(true);
  });
  it('should return that the route is false', () => {
    expect(api.routeExists(routeFalse)).toBe(false);
  });
});

describe('absolutePath', () => {
  it('should return the route if the path is absolute', () => {
    expect(api.absolutePath(route)).toEqual(route);
  });
  it('should convert the relative path to absolute', () => {
    expect(api.absolutePath(relativePath)).toEqual(absolutePath);
  });
});

describe('isFile', () => {
  it('should return true if the path is a file', () => {
    expect(api.isFile('README.md')).toBe(true);
  });
  it('should return false if the path is a file', () => {
    expect(api.isFile(directoryPath)).toBe(false);
  });
});

describe('readFile', () => {
  it('should return the file content', () => {
    expect(api.readFile(shortFilePath)).toEqual(fileContent);
  });
});

describe('readDirectory', () => {
  it('should return an array of the directory files', () => {
    expect(api.readDirectory(shortDirectoryPath)).toEqual(directoryDocs);
  });
});

describe('getMdFiles', () => {
  it('should return that getMdFiles is a function', () => {
    expect(typeof api.getMdFiles).toBe('function');
  });
  it('a folder path that contains MD documents should return an array of MD file paths', () => {
    expect(api.getMdFiles(directoryPath)).toEqual(expect.arrayContaining(directoryMdDocs));
  });
  it('a file path that have a MD extension should return its path in an array', () => {
    expect(api.getMdFiles(route)).toEqual(expect.arrayContaining(MdFilePath));
  });
});

describe('getLinks', () => {
  it('should return that getLinks is a function', () => {
    expect(typeof api.getLinks).toBe('function');
  });
  it('should return links found in MD files', () => {
    expect(api.getLinks(directoryPath)).toEqual(expect.arrayContaining(getLinksArray));
  });
});

describe('totalLinks', () => {
  it('should return the length of an Array', () => {
    expect(api.totalLinks(arraySample)).toEqual(3);
  });
});

describe('uniqueLinks', () => {
  it('should return the number of unique links without repeating', () => {
    expect(api.uniqueLinks(arraySample)).toEqual(2);
  });
});

describe('brokenLinks', () => {
  it('should return the number of broken links', () => {
    expect(api.brokenLinks(arraySample)).toEqual(2);
  });
});
/* const sample1 = [
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\test-folder\\mdlinks.md',
  },
];

const sample = [
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:\\Users\\Yohana Falconi\\Desktop\\Lab\\LIM017-md-links\\test-folder\\mdlinks.md',
    status: 200,
    message: 'Ok',
  },
];
describe('getLinkStatus', () => {
  it('should return that getLInkStatus is a function', () => {
    expect(typeof api.getLinkStatus).toBe('function');
  });
  it('should return href, text, file, status y msg:ok de un link 200', () => {
    fetch.mockImplementation(() => Promise.resolve({
      status: 200,
      message: 'Ok',
    }));
    // fetch.mockResolvedValue({ status: 200, statusText: 'Ok' });
    return api.getLinkStatus(sample1).then((data) => {
      expect(data).toEqual(sample);
    });
    // expect(api.getLinks(sample1)).toEqual(expect.arrayContaining(sample));
  });
});
*/
