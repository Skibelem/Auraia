const fs = require('fs');
const path = require('path');
const https = require('https');

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      getAllFiles(path.join(dir, file), fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const files = getAllFiles('./src');
const urls = new Set();
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/https:\/\/images\.unsplash\.com\/[^\s"']+/g);
  if (matches) matches.forEach(m => urls.add(m));
});

console.log(`Found ${urls.size} unique URLs.`);
Array.from(urls).forEach(url => {
  https.get(url, res => {
    if (res.statusCode !== 200 && res.statusCode !== 302) {
      console.log('BROKEN:', res.statusCode, url);
    } else {
      console.log('OK:', res.statusCode, url.substring(0, 50) + '...');
    }
  }).on('error', e => console.log('ERROR:', e.message, url));
});
