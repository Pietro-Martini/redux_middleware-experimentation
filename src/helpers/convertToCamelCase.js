const convertToCamelCase = (str, fn) => {
  return ((fn && fn(str)) || (str)).map((str, i) => {
    const firstEl = i === 0
    const strLowerCase = str.toLowerCase()

    const camelCasedStr = firstEl
      ? strLowerCase
      : `${str[0].toUpperCase()}${strLowerCase.slice(1, strLowerCase.length)}`

    return camelCasedStr
  }).join('')
}

export default convertToCamelCase
