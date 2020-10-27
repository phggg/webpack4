import * as _ from 'lodash'
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet(): string {
    return _.join(['Hello,', ' ', this.greeting], '')
    // return 'Hello, ' + this.greeting
  }
}

let greeter = new Greeter('world')
let Button = document.createElement('button')
Button.textContent = 'Say Hello'
Button.onclick = function() {
  console.log(greeter.greet())
}

document.body.appendChild(Button)
