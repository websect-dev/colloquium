const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.sendFile(path + 'subjectsList.html')
})

module.exports = router