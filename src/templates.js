// eslint-disable-next-line import/extensions
import chalkAnimation from 'chalk-animation';
// eslint-disable-next-line import/order
import chalk from 'chalk';
// eslint-disable-next-line import/extensions
import { totalLinks, uniqueLinks, brokenLinks } from './api.js';

export const welcomeMsg = () => {
  const hiMsg = ` 
  ${chalk.bold.magenta('|')} Welcome to ${chalk.bold.magenta('status-md-links!')}\n
  ${chalk.bold.magenta('|')} This tool read and analyzes files in Markdown format to identify the state of MD links and report some statistics. \n
  ${chalk.bold.magenta('|')} To know how works, please type the command ${chalk.bold.green('--help.')} `;
  return console.log(hiMsg);
};

export const helpMsg = `
${chalk.bold.magenta('|')} Next statements are built based on this layout: ${chalk.bold.magenta('status-md-links')} ${chalk.bold.green('<path>')} ${chalk.bold.green('<command>')}

${chalk.bold.magenta('|')} If you are looking for basic link's content, use: 
    ${chalk.bold.magenta('status-md-links')} ${chalk.bold.green('<path>')} : ${chalk.dim('Return the links information. Such as: href, text, file.')}

${chalk.bold.magenta('|')} Command list below:
${chalk.bold.green('| • --validate / --v')} : ${chalk.dim('Return the link status and detect broken links.')}
${chalk.bold.green('| • --stats /  --s')} : ${chalk.dim('Gives total and unique statistics.')}
${chalk.bold.green('| • --validate --stats / --vs')} : ${chalk.dim('Shows status, total and unique statistics of the links.')}
${chalk.bold.green('| • --help /  --h')} : ${chalk.dim('Bring information about the status-md-links use.')}
`;

export const neonChalkAnimation = (text) => {
  const rainbow = chalkAnimation.neon(text); // Animation starts
  setTimeout(() => {
    rainbow.stop(); // Animation stops
  }, 1000);
  setTimeout(() => {
    rainbow.start(); // Animation resumes
  }, 2000);
};

export const statsOption = (array) => {
  const stats = `
  ${chalk.bold.green('|')} ${chalk.bold.green('• Total : ')} ${chalk.white(totalLinks(array))}
  ${chalk.bold.green('|')} ${chalk.bold.green('• Unique: ')} ${chalk.white(uniqueLinks(array))}`;
  return console.log(stats);
};

export const statsValidate = (array) => {
  const validate = `
  ${chalk.bold.magenta('|')} ${chalk.bold.magenta('• Total  :')} ${chalk.bold.white(totalLinks(array))}
  ${chalk.bold.magenta('|')} ${chalk.bold.magenta('• Unique :')} ${chalk.bold.white(uniqueLinks(array))}
  ${chalk.bold.magenta('|')} ${chalk.bold.magenta('• Broken :')} ${chalk.bold.white(brokenLinks(array))} `;
  return console.log(validate);
};

export const arraylinks = (array) => {
  array.forEach((el) => console.log(`
  ${chalk.bold.magenta('|')} ${chalk.bold.magenta('• href: ')} ${el.href},
  ${chalk.bold.magenta('|')} ${chalk.bold.magenta('• text: ')} ${el.text},
  ${chalk.bold.magenta('|')} ${chalk.bold.magenta('• file: ')} ${el.file}`));
};

export const arraylinksStatus = (array) => {
  array.forEach((el) => console.log(`
  ${chalk.bold.magenta('|')} ${chalk.bold.magenta('• href: ')} ${el.href},
  ${chalk.bold.magenta('|')} ${chalk.bold.magenta('• text: ')} ${el.text},
  ${chalk.bold.magenta('|')} ${chalk.bold.magenta('• file: ')} ${el.file},
  ${chalk.bold.magenta('|')} ${chalk.bold.magenta('• status: ')} ${el.status},
  ${chalk.bold.magenta('|')} ${chalk.bold.magenta('• message: ')} ${el.message},`));
};
