const XMLHttpRequest = require("xhr2");

// Promise 一樣會將內部的 function 放到 web api 等待執行
// 當執行完成後，會將結果回傳給 then 方法

function get(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(`Request failed with status ${xhr.status}`));
      }
    };
    xhr.send();
  });
}

//執行結果與 index.js 一樣，只不過利用 Promise 進行重構，讓其後續在編排上可讀性比較高
get("https://api.sampleapis.com/coffee/hot").then((res) => console.log(res));
console.log("請求已發送，繼續執行其他代碼...");
