class StackObj {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    this.count--;
    const rta = this.items[this.count];
    delete this.items[this.count];
    return rta;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    const size = this.size();
    return this.items[size - 1]
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    let result = '';
    for (let index = this.size() - 1; index >= 0; index--) {
      result += this.items[index];
    }
    return result;
  }
}

module.exports = { StackObj };