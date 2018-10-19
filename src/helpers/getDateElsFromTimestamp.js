export default function getDateElsFromTimestamp (timestamp) {
  const [year, month, day] = timestamp.split('-').map(el => parseInt(el))
  return {year, month, day}
}
