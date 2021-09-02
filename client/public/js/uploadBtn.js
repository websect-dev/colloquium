const dropZone = $('#upload-btn');
const dropZoneLink = document.querySelector('#upload-btn');
const fileUploadContent = document.querySelector('#file-upload__content');
const dragFileLink = document.querySelector("#dragFileForm");
const uploadSpan = document.querySelector("#upload-span");
const additionalContainerText = document.querySelector("#grid-main-content #additional-container h2");

const hideStart = () => {

    setTimeout(() => {
        startContainerLink.setAttribute("style", "display: none")
        additionalContainerText.setAttribute("style", "display: none")
        uploadSpan.removeAttribute("style")
        dropZoneLink.classList.add('open')
    }, 100)

    console.log('hideStart')
}

const showStart = () => {

    setTimeout(() => {
        uploadSpan.setAttribute("style", "display: none")
        additionalContainerText.removeAttribute("style")
        startContainerLink.removeAttribute("style")
        dropZoneLink.classList.remove('open')
    }, 100)

    console.log('showStart')
}

// let sendFiles = () => {
//
//     let maxFileSize = 5242880;
//     let Data = new FormData();
//
//     console.log(files)
//
//     $(files).each((index, file) => {
//         if ((file.size > maxFileSize) || ((file.type !== 'text/plain')))
//             console.log('неверный формат')
//
//         Data.append('text', file);
//         console.log(file)
//     });
//
//     console.log(files)
//
//     $.ajax({
//         url: dropZone.attr('action'),
//         type: dropZone.attr('method'),
//         data: Data,
//         contentType: false,
//         processData: false,
//         success: (data) => {
//             alert('Файлы были успешно загружены!');
//         }
//     });
// }

$(document).ready(() => {

    $('#file-input').focus(() => {
        $('label').addClass('focus');
    })
        .focusout(() => {
            $('label').removeClass('focus');
        })
        .change(() => {
            let files = this.files;
            sendFiles(files);
            showNotification()
            showStart()
        })

    dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', () => {
        return false;
    });

    dropZone.on('dragenter', () => {
        // dropZone.addClass('dragover');
        // dragFileLink.setAttribute("href", 'css/dragFile.css');
        // fileUpload.removeAttribute('style')
        console.log('dragenter')
        hideStart()
    });

    dropZone.on('dragleave dragover', (e) => {
        console.log('dragleave')
        let dx = e.pageX - dropZone.offset().left;
        let dy = e.pageY - dropZone.offset().top;
        if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
            // dropZone.removeClass('dragover')
            // dragFileLink.setAttribute("href", '');
            // fileUpload.setAttribute('style', "display: none")
            fileUploadContent.setAttribute('style', "display: none")
            showStart()
        }
    });

    dropZone.on('drop', (e) => {
        // dropZone.removeClass('dragover');
        let files = e.originalEvent.dataTransfer.files;
        console.log('drop')
        showStart()
        showNotification()
        sendFiles(files);
    });
})