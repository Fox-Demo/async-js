const arrayData = [
  { num: 1, time: 500 },
  { num: 2, time: 1000 },
  { num: 3, time: 1500 },
  { num: 4, time: 3000 },
];

function promiseFn(num, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
    }, time);
  });
}

async function parallelFn() {
  const data = arrayData.map(async (item) => {
    const res = await promiseFn(item.num, item.time); // 此行的 await 不會暫停函式運行
    return res;
  });

  console.log(data); // 所以這邊 data 會是一個 Promise 陣列（尚未 resolve)

  for (const res of data) {
    console.log(await res); // Resolve Promise
  }
}
parallelFn();
