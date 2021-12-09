let myModule = {
    data: 'www.baidu.com',
    foo() {
      console.log(`foo() ${this.data}`)
    },
    bar() {
      console.log(`bar() ${this.data}`)
    }
  }