//Note https://www.casper.tw/development/2020/02/16/all-new-promise/

function promise(num) {
  return new Promise((resolve, reject) => {
    num ? resolve(`${num} Success`) : reject("Failed");
  });
}

//在 promise 相互依賴 (後一個 promise 需要仰賴前一個 promise) 的地方，可讀性較佳
promise(1)
  .then((success) => {
    console.log(success);
    return promise(2);
  })
  .then((success) => {
    console.log(success);
    return promise(0); // 這個階段會進入 catch
  })
  .then((success) => {
    // 由於上一個階段結果是 reject，所以此段不執行
    console.log(success);
    return promise(3);
  })
  .catch((fail) => {
    console.log(fail);
  });
