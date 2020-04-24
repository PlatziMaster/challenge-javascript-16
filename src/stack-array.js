class StackArray {

  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this.items[this.size() - 1];
  }

  clear() {
    this.items = [];
  }

  toString() {
    let rta = '';
    for (let i = this.size() - 1; i >= 0 ; i--) {
      rta += this.items[i];
    }
    return rta;
  }
}

module.exports = { StackArray };