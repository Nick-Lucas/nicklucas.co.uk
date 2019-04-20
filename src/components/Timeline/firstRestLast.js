export const firstRestLast = array => {
  const first = array.slice(0, 1)[0]
  const rest = array.slice(1, -1)
  const last = array.slice(-1)[0]

  return [first, rest, last]
}
