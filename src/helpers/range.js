export default function range (start, end, fn) {
  let range = []

  for (let i = start; i <= end; i += 1) {
    fn
    ? fn(i) && range.push(i)
    : range.push(i)

  }

  return range
}
