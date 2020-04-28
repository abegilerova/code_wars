function list(names) {
  let output = []
  names.forEach(name => {
    console.log("name ", name)
    output.push(Object.values(name))
  })

  if (output.length === 1) {
    return output[0][0]
  } else if (output.length === 0) {
    return ""
  }
  let finalResult = output.slice(0, -1).join(', ') + ' & ' + output.slice(-1);
  console.log("final result ", finalResult)
  return finalResult
}

// function sliceTest(array) {
//   let sliced = array.slice(0, -1)
//   console.log("array", array)
//   console.log("sliced", sliced)
// }

//list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])
// returns 'Bart, Lisa & Maggie'

// list([{ name: 'Bart' }, { name: 'Lisa' }])
// // returns 'Bart & Lisa'

// list([{ name: 'Bart' }])
// // returns 'Bart'

// list([])
// // returns ''

sliceTest([1, 2, 3, 4, 5])