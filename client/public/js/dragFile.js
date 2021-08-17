const fileUpload = document.getElementById('file-upload__modal');

const init = () => {
    const fileInputElement = document.querySelector('.js-file__input');
    const fileDropZone = document.querySelector('.js-dropzone');

    // Prevents the default behavior of refresh
    // Force click on the input element
    document.querySelector('.file__input-label-button').addEventListener('click', (e) => {
        e.preventDefault();
        fileInputElement.click();
    })

    // Handle Creating Elements for the files using the Browse button
    fileInputElement.addEventListener('change', (e) => {
        const validatedFiles = fileValidation([...fileInputElement.files]);
        createFileDOMNode(validatedFiles);
    });

    // Prevents default behavior of automatically opening the file
    fileDropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    // Gets node element list of files Converts them to a list of Arrays
    // Then calls createFileDOMNode to create DOM Element of the files
    fileDropZone.addEventListener('drop', (e) => {
        setTimeout(() => {
            fileUpload.setAttribute('style', "display: none")
            showNotification()
        }, 5000)
        e.preventDefault();
        const unvalidatedFiles = getArrayOfFileData([...e.dataTransfer.items]);
        const validatedFiles = fileValidation(unvalidatedFiles);
        createFileDOMNode(validatedFiles);
    });

};

// Проверяет, подходят ли файлы указанному формату
// Then pushes the validated file to a new array
const fileValidation = (files) => {
    const errMessageOutput = document.querySelector('.file-upload__error');
    const validatedFileArray = [];
    const supportedExts = ['txt', 'pdf'];
    files.forEach(file => {
        const ext = getFileExtension(file);
        if (supportedExts.indexOf(ext) === -1) {
            let errMessage =
                'Пожалуйста, загружайте только .txt или .pdf файлы.';
            errMessageOutput.style.display = 'block';
            errMessageOutput.textContent = errMessage;
            // return '';
        } else {
            errMessageOutput.style.display = 'none';
            validatedFileArray.push(file);
        }
    });
    return validatedFileArray;
};

// Returns an array of the file data
const getArrayOfFileData = (files) => {
    const fileDataArray = [];
    files.forEach(file => {
        if (file.kind === 'file') {
            fileDataArray.push(file.getAsFile());
        }
    });
    return fileDataArray;
};

// Creates list item DOM nodes for each file uploaded
const createFileDOMNode = (files) => {
    const fileList = document.querySelector('.js-file__list');

    files.forEach(file => {
        // Create a DOM element(s) for each file dropped
        const listItemElement = document.createElement('li');
        const fileDetailsContainer = document.createElement('div');
        const fileOutputListItemImage = document.createElement('img');
        const fileOutputListItemName = document.createElement('span');
        const fileOutputListItemSVGIsComplete = document.createElement('img');
        const fileOutputListItemProgressBar = document.createElement('progress');

        // Append elements to the DOM and parent components to the elements
        fileList.appendChild(listItemElement);
        listItemElement.appendChild(fileOutputListItemImage);
        listItemElement.appendChild(fileDetailsContainer);
        fileDetailsContainer.appendChild(fileOutputListItemName);
        fileDetailsContainer.appendChild(fileOutputListItemSVGIsComplete);
        fileDetailsContainer.appendChild(fileOutputListItemProgressBar);

        // Add classs to the create element
        listItemElement.classList.add('file-output__list-item');
        fileDetailsContainer.classList.add('file-details__container');
        fileOutputListItemImage.classList.add('file-output__list-item-image');
        fileOutputListItemSVGIsComplete.classList.add('file-output__list-item--is-complete');
        fileOutputListItemName.classList.add('file-output__list-item-name');
        fileOutputListItemProgressBar.classList.add('file-output__progress-bar');

        //Set aria roles
        listItemElement.setAttribute('role', 'listitem');
        fileOutputListItemImage.setAttribute('role', 'image');

        fileOutputListItemName.textContent = truncateString(file.name, 25);

        const ext = getFileExtension(file);
        setAssociatedSVGWithFileType(ext, fileOutputListItemImage);
    });
};

// Returns the files type extension
const getFileExtension = (file) => {
    return file.name.split('.').pop();
};

// Подставляет нужному расширению нужную картинку для загрузки
const setAssociatedSVGWithFileType = (ext, nodeElement) => {
    switch (ext) {
        case 'pdf':
            nodeElement.setAttribute('src','https://s3-us-west-2.amazonaws.com/s.cdpn.io/2684911/icon-file-pdf.svg');
            break;
        case 'txt':
            nodeElement.setAttribute('src', 'assets/img/txt.svg');
            break;
        default:
            return '';
    }
};

// Truncates a string if too long
const truncateString = (str, num) => {
    if (str.length > num)
        return str.slice(0, num) + '...';
    else
        return str;
};

init();