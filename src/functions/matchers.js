const reverseString = (str) => {
    return str.split('').reverse().toString().replaceAll(',', '')
}

const calculateArea = (width, length) => {
    return width * length
}

const getNull = () => {
    return null
}

const isDefined = (item) => {
    if (item) {
        return item
    } else {
        return undefined
    }
}

const isEven = (num) => {
    return !(num % 2) ? true : false
}

const sum = (num1, num2) => {
    return num1 + num2
}

const getRandomNumber = () => {
    return Math.floor(Math.random() * 4)
}

const getText = () => {
    return 'Texto totalmente aleatório que só serve para ser testado.'
}

const getArrayNumbers = () => {
    return [19, 2, 54, 31, 8, 10]
}

const getFlavor = (flavor) => {
    if (flavor === 'açaí') {
        throw new Error('Eca, açaí')
    }
}

export const matchers = {
    calculateArea,
    getArrayNumbers,
    getFlavor,
    getNull,
    getRandomNumber,
    getText,
    isDefined,
    isEven,
    reverseString,
    sum,
}