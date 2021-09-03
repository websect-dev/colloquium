const startButton = document.getElementById("next-question")
const questionText = document.querySelector("#grid-container #grid-header h1")
const questionCounter = document.getElementById("counter")
const timerButton = document.querySelector("#grid-container #grid-main-content h1")
const timerText = document.querySelector("#grid-container #grid-main-content h3")

let currentSubject = `diskMath`

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
        "Вопрос 1", "Вопрос 2", "Вопрос 3", "Вопрос 4",
        "Вопрос 5", "Вопрос 6", "Вопрос 7", "Вопрос 8",
        "Вопрос 9", "Вопрос 10", "Вопрос 11", "Вопрос 12",
        "Вопрос 13", "Вопрос 14", "Вопрос 15", "Вопрос 16",
        "Вопрос 17", "Вопрос 18", "Вопрос 19", "Вопрос 20"
    ]

const subjects = {'diskMath': diskMath, 'linAl': linAl}

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
}

startButton.addEventListener('click', () => {
    if (["Готов?", "Вопросы закончились. Ещё раз?"].includes(questionText.textContent)) {
        shuffle(diskMath)
        questionText.textContent = diskMath[0]
        questionText.setAttribute("style", "color: #171717!important")

        questionCounter.textContent = `1/${diskMath.length}`

        startButton.textContent = "Следующий вопрос!"
        timerText.textContent = `секунд осталось`

        set_seconds(10)
        use_set_interval()
        return;
    }

    const idx = diskMath.indexOf(questionText.textContent)

    if (idx + 1 < diskMath.length) {
        questionText.textContent = diskMath[idx + 1]
        timerText.textContent = `секунд осталось`
        questionCounter.textContent = `${idx + 2}/${diskMath.length}`
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

