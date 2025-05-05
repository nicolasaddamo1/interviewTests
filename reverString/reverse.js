//Reverse string

function reverseString(str) {

    return str.split('').reverse().join('')
}
function reverseString2(str) {
    let rvrsdString = ''
    for (let i = str.length - 1; i >= 0; i--) {
        rvrsdString += str[i]
    }
    return rvrsdString
}