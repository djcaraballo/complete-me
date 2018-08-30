import Node from './Node';
import fs from 'fs';

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');
//dictionary is an array of words

export default class Trie {
  constructor() {
    this.rootNode = new Node();
    this.currNode = null;
    this.prevNode = null;
    this.totalWords = 0;
    this.wordList = [];
  }

  insert(word) {
    //incrementing the word counter
    this.totalWords++;
    //lowercasing and splitting apart the word into an array
    let splitString = word.toLowerCase().split('');
    //check to see if there is a root
    let currNode = this.rootNode;
    //check to see if children are present

    splitString.forEach((string, i) => {
      if (currNode.children[string]) {
        currNode = currNode.children[string]
      } else {
        currNode.children[string] = new Node(string);
        currNode = currNode.children[string];
      }

      if (i === splitString.length-1) {
        currNode.ending = true;
        currNode.finalWord = word;
      }
    })
  }

  count() {
    return this.totalWords;
  }

  suggest(prefix) {
    let splitPrefix = prefix.toLowerCase().split('');
    let currNode = this.traverseTrie(splitPrefix);
    //currNode is last letter in the prefix array because we have traversed the trie.
    this.findLast(currNode.children);
    return this.wordList;
    //currNode.children is the key to the node of the next letters AFTER the prefix.
  }

  populate(dictionary) {
    dictionary.forEach((word) => {
      this.insert(word.toLowerCase())
    });
  }

  // helper functions
  findLast(childrenObj) {
    //we are passing in the key value pair of the currNode.children from above.
    let array = Object.keys(childrenObj)
    array.forEach((letter) => {
      //the letter we are passing is the key to the childObj

      let newNode = childrenObj[letter];
      if (newNode.ending === true) {
        this.wordList.push(newNode.finalWord);
      }
      this.findLast(newNode.children);
    })
  }

  traverseTrie(array) {
    let currNode = this.rootNode;
    array.forEach((letter) => {
      if (currNode.children[letter]) {
        currNode = currNode.children[letter]
      }
    })
    return currNode;
  }
}

let trie = new Trie();

trie.populate(dictionary);
console.log(trie.suggest('tri'));
// console.log(JSON.stringify(trie, null, 4))
// trie.count();

