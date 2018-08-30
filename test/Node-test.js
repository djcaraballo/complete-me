import { assert } from 'chai';
import { expect } from 'chai';
import Node from '../lib/Node';


describe('Node', () => {
  let node;
  beforeEach(() => {
    node = new Node();
  });

  it('should be a function', () => {
    assert.isFunction(Node);
  });

  it('should take an argument of letter', () => {
    node = new Node('l');

    expect(node.value).to.eq('l');
  });

  it ('should start off with no children', () => {
    expect(node.children).to.deep.equal({});
  });

  it ('should not have a final word attached', () => {
    expect(node.finalWord).to.eq(null);
  })
 
});