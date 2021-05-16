const esbuild = require('esbuild');
const argv = require('simple-argv');
const rimraf = require('rimraf');
const fse = require('fs-extra');

const outDir = 'dist';

const buildStyles = () => {
  try {
    fse.copySync('./ui/index.css', `./${outDir}/index.css`, { overwrite: true }, function (err) {
      if (err) {
        // ^
        console.error(err); // |___{ overwrite: true } // add if you want to replace existing folder or file with same name
        reject(err);
      } else {
        console.log('Success: copy index.css');
        resolve();
      }
    });
  } catch (error) {
    reject(error);
  }
};

async function buildCode() {
  return esbuild.build({
    tsconfig: './tsconfig.json',
    entryPoints: ['./ui/index.ts'],
    bundle: true,
    minify: false,
    outfile: `./${outDir}/index.js`,
    sourcemap: true,
    target: ['es2017'],
    watch: !!argv.watch,
    treeShaking: 'ignore-annotations',
  });
}
async function buildServer() {
  return esbuild.build({
    tsconfig: './tsconfig.json',
    entryPoints: ['./server/index.ts'],
    bundle: true,
    minify: false,
    outfile: `./${outDir}/server.js`,
    sourcemap: true,
    target: ['es2017'],
    watch: !!argv.watch,
    treeShaking: 'ignore-annotations',
    platform: 'node',
  });
}

function buildHtml() {
  try {
    fse.copySync('./ui/index.html', `./${outDir}/index.html`, { overwrite: true }, function (err) {
      if (err) {
        // ^
        console.error(err); // |___{ overwrite: true } // add if you want to replace existing folder or file with same name
        reject(err);
      } else {
        console.log('Success: copy index.html');
        resolve();
      }
    });
  } catch (error) {
    reject(error);
  }
}

function buildApp() {
  rimraf(`./${outDir}`, () => {
    try {
      buildStyles();
      buildHtml();
      buildCode();
      buildServer();
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  });
}

buildApp();
