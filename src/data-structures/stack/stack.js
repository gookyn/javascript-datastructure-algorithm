class Stack {
  constructor() {
    // 用对象来保存栈里的元素
    this.items = {};

    // 记录栈的大小
    this.count = 0;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(element) {
    // 用 count 作为键名
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let str = '';
    for (let i = 0; i < this.count; i++) {
      if (i === 0) {
        str = `${this.items[0]}`;
      } else {
        str += `,${this.items[i]}`;
      }
    }
    return str;
  }
}

module.exports = Stack;
