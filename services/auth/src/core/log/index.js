

class log {
    constructor() {
        item: this.item
        create: this.create.bind(this)
        list: new Array
    }

    create(words) {
        console.log('from log: ', words)
        //  this.list.push(words)
    }
}





//  class item {
//      constructor() {
//  
//      }
//      create() {
//          console.log('log item created')
//      }
//  }

//  const log = {
//      add(req, res, next) {
//          console.log(req)
//          next
//      },
//      test() {
//      }
//  }

module.exports = log