//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

//It should remove all values from list a, which are present in list b.


function arrayDiff(array1, array2) {
  let result = []

  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) == -1) {
      result.push(array1[i])
    }

  }

  console.log("result ", result)
  return result

}


console.log(arrayDiff([1, 2], [1]) == [2])
console.log(arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3])