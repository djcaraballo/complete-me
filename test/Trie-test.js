import { assert } from 'chai';
import { expect } from 'chai';
import Trie from '../lib/Trie';

//Trie should take an argument of a word

describe('Trie', () => {
  beforeEach(() => {
    trie = new Trie()
  });

  it.skip('should be a function', () => {
    assert.isFunction(Trie);
  });

  it.skip('should start with zero elements', () => {
    expect(list.length).to.eq(0);
  });

  it.skip('should set its default head to null', () => {
    expect(list.head).to.eq(null);
  });

});

describe('INSERT', () => {
  beforeEach(() => {
    trie = new Trie()
  });

  it('should take a word as an argument', () => {

  });

});

//insert
  //take in word
  //lowercase the word
  //split word into letters array
  //search for existing node
  //if no node exists, create one
  //if node exists, or once node exists, shift off first letter in array
  //traverse to next letter
  //return to search for existing node as long as the length of the array is greater than zero
