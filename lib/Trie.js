import Node from './Node'

export default class Trie {
  constructor() {
    this.rootNode = null;
    this.currNode = null;
    this.prevNode = null;
    this.totalWords = 0;
  }

  insert(word) {
    //incrementing the word counter
    this.totalWords++;
    //lowercasing and splitting apart the word into an array
    let splitString = word.toLowerCase().split('');
    //check to see if there is a root
    let currNode = this.rootNode = new Node();
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
    let currNode = this.rootNode;

    splitPrefix.forEach((letter) => {
      console.log('This works', letter)
      console.log('Current Node', currNode)
      console.log('Current Node Children', currNode.children)
      if (currNode.children[letter]) {
        console.log('Before', currNode)
        currNode = currNode.children[letter]
        console.log('After', currNode)
        // currNode = 
      }
    })

    //search root children for the child containing that letter
    //once we've found the correct child, grab all the words that begin with that letter
    //push all words into array
    //return array
  }
}

let trie = new Trie();

// trie.insert('turing');
// trie.insert('goodnight');
// trie.insert('insert');
// trie.insert('suggest');
// trie.insert('count');
// console.log(JSON.stringify(trie, null, 4))
// trie.count();
trie.insert('hello');
trie.suggest('hell');
