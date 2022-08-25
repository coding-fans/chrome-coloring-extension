/*
 * Author: fasion
 * Created time: 2022-08-21 09:17:03
 * Last Modified by: fasion
 * Last Modified time: 2022-08-21 09:17:07
 */

// 通过ID找到按钮
const button = document.getElementById("changeColor");

// 从storage取背景色并设到按钮上
chrome.storage.sync.get("color", ({ color }) => {
  button.style.backgroundColor = color;
});
