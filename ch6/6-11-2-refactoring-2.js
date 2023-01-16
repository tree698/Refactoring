import fs from 'fs';

run(process.argv);

function run(args) {
  countOrders(parseCommand(args));
}

function parseCommand(args) {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }
  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  return {
    fileName,
    countReadyOnly: args.includes('-r'),
  };
}

function countOrders({ fileName, countReadyOnly }) {
  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  const filtered = countReadyOnly
    ? orders.filter((order) => order.status === 'ready')
    : orders;
  console.log(filtered.length);
}

// my second try...
// function displayStatusOfReady(arrayOfArgv) {
//   const rawData = fetchRawData(arrayOfArgv);
//   const statusOfReady = checkStatus(rawData);
//   return statusOfReady;
// }

// function fetchRawData(arrayOfArgv) {
//   if (!arrayOfArgv[2]) {
//     throw new Error('enter the filename');
//   }
//   const fileName = `./${arrayOfArgv[2]}.json`;
//   if (!fs.existsSync(fileName)) {
//     throw new Error('no exists the file');
//   }
//   return fs.readFileSync(fileName);
// }

// function checkStatus(rawData) {
//   const orders = JSON.parse(rawData);
//   if (process.argv.includes('-r')) {
//     console.log(orders.filter((order) => order.status === 'ready').length);
//   } else {
//     console.log(orders.length);
//   }
// }

// const arrayOfArgv = process.argv;
// displayStatusOfReady(arrayOfArgv);
