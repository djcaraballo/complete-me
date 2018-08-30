import { assert } from 'chai';
import { expect } from 'chai';
import Trie from '../lib/Trie';


describe('Trie', () => {
  let trie;
  beforeEach(() => {
    trie = new Trie()
  });

  it('should be a function', () => {
    assert.isFunction(Trie);
  });
});

describe('INSERT', () => {
  let trie;
  
  beforeEach(() => {
    trie = new Trie();
  });

  it('should be able to take a new word as an argument', () => {
    trie.insert('hello');

    expect(trie.insert('hello'));
  });

  it('should count the words that are passed into the insert function', () => {
    expect(trie.totalWords).to.eq(0);

    trie.insert('hello');
    trie.insert('world');

    expect(trie.totalWords).to.eq(2);
  })
});

describe('SUGGEST', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should be able to take a prefix as an argument', () => {

  });

  it('should return an array of words related to the prefix argument', () => {

  });
});
