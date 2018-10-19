export default function range (start, end) {
  let range = []

  for (let i = start; i <= end; i += 1) {
    range.push(i)
  }

  return range
}
