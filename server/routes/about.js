const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.sendFile(path + 'about.html')
})

module.exports = router