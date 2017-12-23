const users = []

class User {
  constructor(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  
  // getName() {
  //   return `${this.firstName} ${this.lastName}`
  // }
  static insert(firstName, lastName, age) {
    const user = new User(firstName, lastName, age)
    User.users.push(user)
    return user
  }

  //上面的代码等价于　static关键字表明insert是类User提供的静态方法
  // User.insert(firstName, lastName, age) {
  //   const user = new User(firstName, lastName, age)
  //   User.users.push(user)
  //   return user
  // }

  static getOneByName(firstName, lastName) {
    return User.users.find(u => u.firstName === firstName && u.lastName === lastName)
  }

  static list(query) {
    return User.users
  }
  
  //User.users
  static get['users']() {
    return users
  }
}

module.exports = User


//test
// console.log(User.list())
// console.log(User.insert('ke', 'yi', 12))
// console.log(User.insert('join', 'mouse', 22))
// console.log(User.list())
// console.log(User.getOneByName('join', 'mouse'))