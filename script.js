// {
//     "name": "Josh",                  //typ: string
//     "weight": 175,                   //typ: number
//     "age": 30,                       //typ: number
//     "eyecolor": "brown",             //typ: string
//     "isHappy": true,                 //typ: boolean
//     "cars": ["Chevy", "Honda"],      //typ: array
//     "favouriteBook": {
//         "title": "The Last Kingdom",
//         "author": "Bernard Cornwell",
//         "rating": 8.38
//     }                                //typ: object
// }

// Obiekt JSON to zbiór nazw kluczy i ich wartości w postaci tekstowej


//kod podpunktu trzeciego zadania
try {
const badJSON = JSON.parse("This'll cause an error")
}
catch(error) {
    console.log(error.name)
    console.log(error.message)
}

//kod podpunktu drugiego, umieszczony później by pokazać, że wykonuje się po złapanym błędzie

const json = '{"name":"Mango","age":3,"isHappy":true}'

const Mango = JSON.parse(json)

console.log(Mango)