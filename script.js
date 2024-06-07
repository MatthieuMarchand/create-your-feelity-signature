const setDefaultIfEmpty = (input, element, defaultValue) => {
    element.innerHTML = input.value || defaultValue;
    createsMarginInContacts();
};

const updateSrcIfEmpty = (input, element, defaultValue) => {
    element.src = input.value || defaultValue;
    createsMarginInContacts();
};

const updateHrefIfEmpty = (input, element, defaultValue) => {
    element.href = input.value || defaultValue;
    createsMarginInContacts();
};

const updateTelHrefIfEmpty = (input, element, defaultValue) => {
    element.href = `tel:${input.value || defaultValue}`;
    element.innerHTML = input.value || defaultValue;
    createsMarginInContacts();
};

const updateMailHrefIfEmpty = (input, element, defaultValue) => {
    element.href = `mailto:${input.value || defaultValue}`;
    element.innerHTML = input.value || defaultValue;
    createsMarginInContacts();
};

const createsMarginInContacts = () => {
    const getElementWidth = id => document.getElementById(id).offsetWidth;

    const divPersonalInformationWidth = getElementWidth('personal-information');
    const divContactsWidth = getElementWidth('contacts');
    const divAddressWidth = getElementWidth('address');

    const marginRight = divPersonalInformationWidth - divContactsWidth - divAddressWidth - 5.2;
    document.getElementById('contacts').style.marginRight = `${marginRight}px`;
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
        createsMarginInContacts();
    });
};

const createsEventListenersOnInputs = () => {
    const inputMappings = [
        { inputId: 'inputImg', elementId: 'srcImg', defaultValue: 'https://www.feelity.fr/wp-content/uploads/2024/06/benjamin.jpg', updater: updateSrcIfEmpty },
        { inputId: 'inputName', elementId: 'textName', defaultValue: 'Benjamin Catinot', updater: setDefaultIfEmpty },
        { inputId: 'inputTitle', elementId: 'textTitle', defaultValue: 'Co-Fondateur - CTO @Feelity', updater: setDefaultIfEmpty },
        { inputId: 'inputLinkedin', elementId: 'hrefLinkedin', defaultValue: 'https://www.linkedin.com/company/feelity/mycompany/', updater: updateHrefIfEmpty },
        { inputId: 'inputMail', elementId: 'hrefMail', defaultValue: 'bcatinot@feelity.fr', updater: updateMailHrefIfEmpty },
        { inputId: 'inputTel', elementId: 'hrefTel', defaultValue: '0642966109', updater: updateTelHrefIfEmpty }
    ];

    inputMappings.forEach(({ inputId, elementId, defaultValue, updater }) =>
        addInputEventListener(inputId, elementId, defaultValue, updater)
    );

    addSelectEventListener('imageSelector', 'srcImg');
};

window.addEventListener('DOMContentLoaded', () => {
    createsMarginInContacts();
    createsEventListenersOnInputs();
});