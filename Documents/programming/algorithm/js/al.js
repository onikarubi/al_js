class Algorithm {
  constructor() {
    this.n = 0
  }

  FizzBuzz(n) {
    if(n % 3 == 0 && n % 5 == 0) {
      return 'fizzbuzz'
  
    } else if(n % 3 == 0){
      return 'fizz'
  
    } else if(n % 5 == 0) {
      return 'buzz'
  
    } else {
      return n
    }
  }
  
  DoFB() {
    for(let i = 1; i <= 10; i++) {
      console.log(this.FizzBuzz(i))
    }
  }
}
const fizzbuzz = new Algorithm()
fizzbuzz.DoFB()
//test

