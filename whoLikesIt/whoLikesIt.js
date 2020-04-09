// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:


function likes(names) {
  // TODO
  let output = ""
  if (names.length == 0) {
    output = "no one likes this"
  } else if (names.length == 1) {
    output = names[0] + " likes this"
  } else if (names.length == 2) {
    output = names[0] + " and " + names[1] + " like this"
  } else if (names.length == 3) {
    output = names[0] + ", " + names[1] + " and " + names[2] + " like this"
  } else if (names.length > 3) {
    let num = names.length - 2;
    output = names[0] + ", " + names[1] + " and " + num + " others like this"
  }

  return output;

}

