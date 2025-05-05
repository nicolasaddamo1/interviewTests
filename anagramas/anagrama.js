//Anagram 
function anagrama(word1, word2) {
    let reomveSpacesAndToLowerCase = function (str) {
        let result = ''
        for (const element of str) {
            if (element !== ' ') {
                result += element.toLowerCase()
            }
        }
        return result
    };
    let sortString = function (str) {
        return reomveSpacesAndToLowerCase(str).split('').sort().join('')
    }
    return sortString(word1) === sortString(word2)
}

//OJO con esto, no es un anagrama, sino que se fija si las letras son las mismas, pero no importa el orden.

solucion = function (word1, word2) {
    let reomveSpacesAndToLowerCase = function (str) {
        let result = ''
        for (const element of str) {
            if (element !== ' ') {
                result += element.toLowerCase()
            }
        }
        return result
    };
    let sortString = function (word1, word2) {
        const str1 = reomveSpacesAndToLowerCase(word1).split('')
        const str2 = reomveSpacesAndToLowerCase(word2).split('')
        console.log(str1, str2)
        if (str1.length === str2.length) {
            for (let i = 0; i < str1.length; i++) {
                if (str1[i] !== str2[(str1.length - 1) - i]) {
                    console.log(str1[i], str2[(str1.length - 1) - i])
                    return false
                }
                return true
            }
        } else {
            return false
        }

    }
    return sortString(word1, word2)
}
console.log(solucion('amor', 'roma')) // true
console.log(solucion('mora', 'amor')) // false
console.log(solucion('amor', 'ramo ')) // false
console.log(solucion('amor', 'rama')) // false
console.log(solucion('amar', 'rama')) // false