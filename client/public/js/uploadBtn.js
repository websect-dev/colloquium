const dropZone = $('#upload-btn');
const dropZoneLink = document.querySelector('#upload-btn');
const fileUploadContent = document.querySelector('#file-upload__content');
const uploadSpan = document.querySelector("#upload-span");
const additionalContainerText = document.querySelector("#grid-main-content #additional-container h2");
const inputElement = document.getElementById("file-input");

const hideStart = () => {

    setTimeout(() => {
        startContainerLink.setAttribute("style", "display: none")
        additionalContainerText.setAttribute("style", "display: none")
        uploadSpan.removeAttribute("style")
        dropZoneLink.classList.add('open')
    }, 100)
}

const showStart = () => {

    setTimeout(() => {
        uploadSpan.setAttribute("style", "display: none")
        additionalContainerText.removeAttribute("style")
        startContainerLink.removeAttribute("style")
        dropZoneLink.classList.remove('open')
    }, 100)
}

inputElement.addEventListener("change", handleFiles, false);

function handleFiles(fileList) {
    let text = fileList[0]

    let fileReader = new FileReader();

    fileReader.readAsText(text);

    fileReader.onload = (event) => {
        let arrayBuffer = fileReader.result;
        localStorage.setItem('curSubject', 'Загруженный файл')
        headerText.textContent = `${text.name.replace(/\.[^/.]+$/, "")}`
        let curQuestions = arrayBuffer.split('\n').map((str, index) => {
            return (str[str.length - 1] === '.') ? str.trim().slice(0, str.length - 1) + '#' : str.trim() + "#"
        })

        curQuestions[curQuestions.length - 1] = curQuestions[curQuestions.length - 1].slice(0, curQuestions[curQuestions.length - 1].length - 1)

        showNotification('Файл успешно обработан')

        localStorage.setItem('curQuestions', curQuestions.toString())
    };
}

$(document).ready(() => {

    $('#file-input').focus(() => {
        $('label').addClass('focus');
    })
        .focusout(() => {
            $('label').removeClass('focus');
        })

    dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', () => {
        return false; // убираем стандартные изменения на ивенты
    });

    dropZone.on('dragenter dragstart', () => {
        hideStart()
    });

    dropZone.on('dragleave dragover', (e) => {
        let dx = e.pageX - dropZone.offset().left;
        let dy = e.pageY - dropZone.offset().top;
        if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
            fileUploadContent.setAttribute('style', "display: none")
            showStart()
        }
    });

    dropZone.on('drop', (e) => {
        let file = e.originalEvent.dataTransfer.files;
        showStart()
        showNotification('Файл успешно обработан')
        handleFiles(file)
    });
})