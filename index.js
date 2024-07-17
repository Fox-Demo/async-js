const XMLHttpRequest = require("xhr2");

// Note
// 這段程式碼會先將 `fetchData` 放入 web api 中等待伺服器回傳，等到伺服器回傳資料後，才會將 `fetchData` 放入 callback queue 等待執行
// 所以會先執行 `console.log("請求已發送，繼續執行其他代碼...");
// 再執行 `console.log(response);

function fetchData() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.sampleapis.com/coffee/hot", true); // true 表示非同步
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      console.log(response); // 處理返回的數據
    }
  };
  xhr.send();
}

// 執行請求
fetchData();
console.log("請求已發送，繼續執行其他代碼...");
