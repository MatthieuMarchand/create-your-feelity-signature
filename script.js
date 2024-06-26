const setDefaultIfEmpty = (input, element, defaultValue) => {
    element.innerHTML = input.value || defaultValue;
};

const updateSrcIfEmpty = (input, element, defaultValue) => {
    element.src = input.value || defaultValue;
};

const updateHrefIfEmpty = (input, element, defaultValue) => {
    element.href = input.value || defaultValue;
};

const updateTelHrefIfEmpty = (input, element, defaultValue) => {
    element.href = `tel:${input.value || defaultValue}`;
    element.innerHTML = input.value || defaultValue;
};

const updateMailHrefIfEmpty = (input, element, defaultValue) => {
    element.href = `mailto:${input.value || defaultValue}`;
    element.innerHTML = input.value || defaultValue;
};

const addInputEventListener = (inputId, elementId, defaultValue, updater) => {
    const input = document.getElementById(inputId);
    const element = document.getElementById(elementId);
    input.addEventListener('input', () => updater(input, element, defaultValue));
};

const addSelectEventListener = (selectId, elementId) => {
    const select = document.getElementById(selectId);
    const element = document.getElementById(elementId);
    select.addEventListener('change', () => {
        element.src = select.value;
    });
};

const createsEventListenersOnInputs = () => {
    const inputMappings = [
        { inputId: 'inputImg', elementId: 'srcImg', defaultValue: 'https://www.feelity.fr/wp-content/uploads/2024/06/benjamin.jpg', updater: updateSrcIfEmpty },
        { inputId: 'inputName', elementId: 'textName', defaultValue: 'Prénom Nom', updater: setDefaultIfEmpty },
        { inputId: 'inputTitle', elementId: 'textTitle', defaultValue: 'Titre', updater: setDefaultIfEmpty },
        { inputId: 'inputLinkedin', elementId: 'hrefLinkedin', defaultValue: 'https://www.linkedin.com/company/feelity/mycompany/', updater: updateHrefIfEmpty },
        { inputId: 'inputMail', elementId: 'hrefMail', defaultValue: 'hello@feelity.fr', updater: updateMailHrefIfEmpty },
        { inputId: 'inputTel', elementId: 'hrefTel', defaultValue: '0521134532', updater: updateTelHrefIfEmpty }
    ];

    inputMappings.forEach(({ inputId, elementId, defaultValue, updater }) =>
        addInputEventListener(inputId, elementId, defaultValue, updater)
    );

    addSelectEventListener('imageSelector', 'srcImg');
};

window.addEventListener('DOMContentLoaded', () => {
    createsEventListenersOnInputs();
});