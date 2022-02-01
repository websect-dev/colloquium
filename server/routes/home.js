const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.sendFile(path + 'index.html')
})

module.exports = router