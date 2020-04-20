function validParentheses(parens) {

  let output = []
  const paren_output = []

  for (let char of parens) {
    console.log("char ", char);

    if (char === "(") {
      paren_output.push(output.length)
    } else if (char === ")") {
      if (paren_output.length > 0) {
        output.splice(paren_output.pop(), 0, "(")
        output.push(")")

      }
    } else {
      output.push(char)
    }
  }
  console.log("output ", output);
  output = output.join("")

  console.log("output === parens", output === parens)
  return output === parens

}

validParentheses("()")   //           => true
validParentheses(")(()))")         //=> false
validParentheses("(")             // => false
validParentheses("(())((()())())") // => true