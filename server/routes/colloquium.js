const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.sendFile(path + 'colloquium.html')
})

module.exports = router