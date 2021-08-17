const dropZone = $('#upload-btn');
const fileUploadContent = document.getElementById('file-upload__content');
const dragFileLink = document.getElementById("dragFileForm");
const uploadSpan = document.getElementById("upload-span");
const gridContainerLink = document.getElementById("grid-container");

let hideStart = () => {
    setTimeout(() => startContainerLink.setAttribute("style", "display: none"), 50)
}

let showSpan = () => {
    setTimeout(() => uploadSpan.removeAttribute('style'), 250)
}

let hideSpan = () => {
    uploadSpan.setAttribute('style', 'display: none');
}

let showStart = () => {
    setTimeout(() => startContainerLink.removeAttribute("style"), 50)
}

$(document).ready(() => {

    $('#file-input').focus(() => {
        $('label').addClass('focus');
    })
        .focusout(() => {
            $('label').removeClass('focus');
        });

    dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', () => {
        return false;
    });

    dropZone.on('dragover dragenter', () => {
        dropZone.addClass('dragover');
        dragFileLink.setAttribute("href", 'css/dragFile.css');
        fileUpload.removeAttribute('style')
    });

    dropZone.on('dragleave', (e) => {
        let dx = e.pageX - dropZone.offset().left;
        let dy = e.pageY - dropZone.offset().top;
        if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
            dropZone.removeClass('dragover')
            dragFileLink.setAttribute("href", '');
            fileUpload.setAttribute('style', "display: none")
            fileUploadContent.setAttribute('style', "display: none")
        }
    });

    dropZone.on('drop', (e) => {
        dropZone.removeClass('dragover');
        let files = e.originalEvent.dataTransfer.files;
        sendFiles(files);
    });

    $('#file-input').change(() => {
        let files = this.files;
        sendFiles(files);
    });


    function sendFiles(files) {
        let maxFileSize = 5242880;
        let Data = new FormData();
        $(files).each(function (index, file) {
            if ((file.size <= maxFileSize) && ((file.type === 'text/plain'))) {
                Data.append('text', file);
            }
        });

        $.ajax({
            url: dropZone.attr('action'),
            type: dropZone.attr('method'),
            data: Data,
            contentType: false,
            processData: false,
            success: (data) => {
                alert('Файлы были успешно загружены!');
            }
        });
    }
})