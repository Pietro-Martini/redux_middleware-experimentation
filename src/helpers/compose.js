const compose = (...fns) => fns.reduce((f, g) => {
  return (...args) => {
    return f(g(...args))
  }
})

export default compose
