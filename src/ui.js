import {Entry} from './index.js'
let entry1 = new Entry();
document.getElementById("submit-form").addEventListener("submit", function(e){
  e.preventDefault();
  entry1.title= document.getElementById("title-input").value;
  document.getElementById("title").innerText = entry1.title;
  entry1.body = document.getElementById("text-input").value;
  document.getElementById("body-text").innerText = entry1.body;
  entry1.numWords = entry1.numberOfWords();
  document.getElementById("number-of-words").innerText = entry1.numWords;


});