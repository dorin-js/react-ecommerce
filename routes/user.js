const router = require('express').Router()

router.get('/usertest', (req, res) => {
  res.send('user test successful')
})
router.post('/usertest', (req, res) => {
  const username = req.body.username
  console.log(username)
  // res.send('user test successful')
})

module.exports = router
