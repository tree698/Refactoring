import fs from 'fs';

// below is my solution... so, need to check the best solution
function checkStatus() {
  const fileName = getFileName();
  const content = getContent(fileName);
  countStatus(content);
}

function getFileName() {
  if (!process.argv[2]) {
    throw new Error('파일 이름을 입력하세요');
  }
  const fileName = `./${process.argv[2]}.json`;
  return fileName;
}

function getContent(fileName) {
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }
  const rawData = fs.readFileSync(fileName);
  const content = JSON.parse(rawData);
  return content;
}

function countStatus(content) {
  if (process.argv.includes('-r')) {
    const count = countNumberOfReady(content);
    console.log(count);
  } else {
    const count = content.length;
    console.log(count);
  }
}

function countNumberOfReady(content) {
  const count = content.filter((order) => order.status === 'ready').length;
  return count;
}

checkStatus();
