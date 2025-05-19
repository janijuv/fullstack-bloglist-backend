
const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (acc, currentValue) => {
    return acc + currentValue.likes
  }
  return blogs.reduce(reducer, 0)
}

module.exports = {
    dummy, totalLikes
}