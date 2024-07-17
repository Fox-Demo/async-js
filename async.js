function promise(num) {
  return new Promise((resolve, reject) => {
    num % 2 == 0 ? resolve(`${num} Success`) : reject("Failed");
  });
}

async function fetchData() {
  const result = await promise(2);
  console.log(result);
  const result2 = await promise(4);
  console.log(result2);
}

// 執行結果與 index.js 類似，但是使用 async/await 可以讓程式碼更加簡潔易讀。
// 使用 async fn 讓裡面的 async（promise） 可以使用 await 等待 promise 回傳結果，而不是使用 then 方法。
// 讓內部的程式碼都以 **sync** 的方式執行
// 但是 `fetchData()` 程式碼本身是 **async** 的
fetchData();
console.log("請求已發送，繼續執行其他代碼...");
