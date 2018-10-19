import convertToCamelCase from '../helpers/convertToCamelCase'

const createActionCreator = types => (type, fn) => payload => {
  const payloadName = convertToCamelCase(
    type,
    type => type.split('_').slice(1)
  )

  return {
    type: types[type],
    payload: {
      [payloadName]: (fn && fn(payload)) || payload
    }
  }
}

export default createActionCreator
