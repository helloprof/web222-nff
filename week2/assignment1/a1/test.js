function toCamelCase(name, uppercase) {
  // toCamelCase("suluxan-mohanraj", true) -> SuluxanMohanraj
  let words = name.split("-")
  let wordsClean = words.filter(e=>e)
  // console.log(wordsClean)

  let finalCamelCase = ""

  for(let i = 0; i < wordsClean.length; i++) {
    let element = wordsClean[i]
    // element[0].toUpperCase() -> "S"
    // element.slice(1) -> uluxan
    let capitalizedElement = element[0].toUpperCase() + element.slice(1)
    finalCamelCase += capitalizedElement
  }
  
  if (uppercase) {
    return finalCamelCase
  } else {
    let finalNonCapitalizedCamelCase = finalCamelCase[0].toLowerCase() + finalCamelCase.slice(1)
    return finalNonCapitalizedCamelCase
  }
}

toCamelCase("suluxan-mohanraj-professor-seneca-polytechnic", false)
