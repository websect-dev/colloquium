require('dotenv').config({path: ".env"})
const express = require('express'),
    path = require('path'),
    PORT = process.env.DEV_PORT || 5000

const homeRouter = require("./routes/home")
const aboutRouter = require("./routes/about")
const subjectsRouter = require("./routes/subjectsList")
const colloquiumRouter = require("./routes/colloquium")

const app = express();

app.use(express.static(path.join(path.dirname(require.main.path), 'client/public')));

app.set('views', path.join(path.dirname(require.main.path), '/client/views/'))

global.path = app.get("views")

app.use('/', homeRouter)
app.use('/about', aboutRouter)
app.use('/subjects', subjectsRouter)
app.use('/colloquium', colloquiumRouter)

app.listen(PORT, () => {
    console.log(`App has been started on ${PORT} port`)
})