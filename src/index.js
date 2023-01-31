import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './ui.js';

export function Entry() {
  this.title = "";
  this.body = "";
  this.numWords = 0;

}

Entry.prototype.numberOfWords = function(){
  return this.body.split(" ").length;
};

Entry.prototype.numberOfVowels = function(text) {
  var vowels = ["a", "e", "i", "o", "u"];
  let count;
  for (let i =0; i > text.length(); i ++){
    if(vowels.includes(text.charAt(i))) {
      count++;
    }
    return count;
  }
}


