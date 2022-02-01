const startButton = document.getElementById("next-question")
const questionText = document.querySelector("#grid-container #grid-header h1")
const questionCounter = document.getElementById("counter")
const timerButton = document.querySelector("#grid-container #grid-main-content h1")
const timerText = document.querySelector("#grid-container #grid-main-content h3")

// let currentSubject = subjects['diskMath']

const diskMath =
    [
        "Дерево (2 определения)", "Граф блоков и точек сочленения", "Граф компонент реберной двусвязности", "Остов графа",
        "Цикломатическое число", "Цикл, ассоциированный с остовом", "Фундаментальная система циклов",
        "Минимальное остовное дерево", "Безопасное ребро", "Разрез", "Ребро пересекающее разрез",
        "Лемма о безопасном ребре (суть)", "Расстояние между двумя вершинами графа", "Диаметр графа", "Центр графа",
        "Радиус графа", "Кратчайший путь между двумя вершинами",
        "Теорема о поиске числа путей заданной длины по матрице смежности орграфа", "Лемма о белых путях",
        "Эйлеров путь", "Отличие эйлерова и полуэйлерова графов", "Эквивалентные определения эйлерова графа",
        "Теорема о покрытии ребер графа путями", "Критерий эйлеровости", "Произвольно вычерчиваемый граф",
        "Теорема о произвольно вычерчиваемости", "Гамильтонов путь", "Теорема Оре", "Теорема Дирака",
        "Теорема Гуйя-Ури", "Для любого ли гамильтонова графа будут выполняться условия теорем о гамильтоновости и почему?",
        "Определение сочетания (не формулой)", "Определение размещения (не формулой)",
        "Определение перестановки (не формулой)", "Отличие перестановок и размещений",
        "Принцип Дирихле", "Принцип сложения", "Принцип умножения", "Принцип включения-исключения",
        "Лексикографический порядок на строках"
    ]

const linAl =
    [
        "Линал", "Линал 1", "Линал 2", "Линал 3", "Линал 4", "Линал 5", "Линал 6",
        "Линал 7", "Линал 8", "Линал 9", "Линал 10", "Линал 11", "Линал 12", "Линал 13"
    ]

const mathAnalysis =
    [
        "Матанализ 1", "Матанализ 2", "Матанализ 3", "Матанализ 4", "Матанализ 5",
        "Матанализ 6", "Матанализ 7", "Матанализ 8", "Матанализ 9", "Матанализ 10",
        "Матанализ 11", "Матанализ 12", "Матанализ 13", "Матанализ 14", "Матанализ 15",
        "Матанализ 16", "Матанализ 17", "Матанализ 18", "Матанализ 19", "Матанализ 20"
    ]

const subjects = {'Дискретная математика': diskMath, 'Линейная алгебра': linAl, 'Математический анализ': mathAnalysis, 'Загруженный файл': localStorage.getItem('curQuestions').split('#,')}

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
}

let idx

startButton.addEventListener('click', () => {
    startButton.setAttribute('style', 'background: #C8234A') // имитируем нажатие кнопки цветом

    setTimeout(() => startButton.removeAttribute('style'), 250)

    let questionsArray = subjects[localStorage.getItem('curSubject')]


    if (["Готов?", "Вопросы закончились. Ещё раз?"].includes(questionText.textContent)) {
        idx = 0
        console.log(questionsArray.join("\n"))
        shuffle(questionsArray)
        console.log(questionsArray.join("\n"))
        questionText.textContent = questionsArray[idx]
        questionText.setAttribute("style", "color: #171717!important")

        questionCounter.textContent = `${++idx}/${questionsArray.length}`

        startButton.textContent = "Следующий вопрос!"
        timerText.textContent = `секунд осталось`

        set_seconds(10)
        use_set_interval()
        return;
    }

    if (idx < questionsArray.length) {
        console.log(`idx: ${idx + 1} <--> ${questionsArray[idx]}`)
        questionText.textContent = questionsArray[idx]
        timerText.textContent = `секунд осталось`
        questionCounter.textContent = `${idx + 1}/${questionsArray.length}`
        idx++;
        stop_timer()
        set_seconds(10)
        use_set_interval()
    } else {
        questionText.textContent = "Вопросы закончились. Ещё раз?"
        questionText.setAttribute("style", "color: red!important")
        questionCounter.textContent = timerText.textContent = timerButton.textContent = ``
        startButton.textContent = "Заново!"
        stop_timer()
    }
})

let seconds, x;

const set_seconds = (new_s) => {
    seconds = new_s;
    timerButton.textContent = new_s;
}

const use_set_interval = () => {
    x = setInterval(() => {

        timerButton.textContent = `${seconds-- - 1}`;

        if (seconds + 1 === 0) {
            timerText.textContent = ` `
            timerButton.textContent = `Время вышло!`
            stop_timer();
        }
    }, 1000);
}

const stop_timer = () => {
    clearInterval(x);
}

