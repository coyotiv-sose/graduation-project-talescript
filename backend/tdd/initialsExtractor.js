module.exports = function (name) {
  const words = name.split(' ')

  return words
    .map(word => word[0])
    .filter(l => l.toUpperCase() == l || l == 'z')
    .join('')
}
