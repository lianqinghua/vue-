const index = (res, req) => {
  req.json({ name: 'zhnag' })
  console.log('2')
}
module.exports = { index }
