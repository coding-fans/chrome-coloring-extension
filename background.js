/*
 * Author: fasion
 * Created time: 2022-08-20 11:03:11
 * Last Modified by: fasion
 * Last Modified time: 2022-08-20 11:13:02
 */

const color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log(`[Coloring] default background color is set to: ${color}`);
});
