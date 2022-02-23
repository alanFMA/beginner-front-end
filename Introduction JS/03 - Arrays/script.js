//Arrays

let array = ['string', 1, true, ['array1'], ['array2']]

//array.forEach(function(item, index){console.log(item, index)})

// array.push([])
// console.log(array)

// array.pop()
// console.log(array)

// array.unshift('novo item no início')
// console.log(array)

// indexOf = console.log(array.indexOf(true))

// array.splice(0, 2)
// console.log(array)

// let novoArray = array.slice(0, 3)
// console.log(novoArray)

let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}}

console.log(object.objectInterno)

var string = object.string
console.log(string)

var arrayInterno = object.array
console.log(arrayInterno)

var {string, boolean, objectInterno} = object
console.log(string, boolean, objectInterno)
