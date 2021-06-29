const args = process.argv.slice(2)

let numberConverter = function (args) {
  let array = []
  for (let i = 0; i < args.length; i++) {
    if (!isNaN(Number(args[i])) && Math.sign(args[i]) === 1) {
    array.push(Number(args[i]))
    }
  }
  return array
}

let timer1 = function (array) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, array[i] * 1000
    )
  }
}
timer1(numberConverter(args))

// process.stdout.write('\x07');\
// node timer1.js 10 3 5 15 9 