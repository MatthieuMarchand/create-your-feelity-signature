const setDefaultIfEmpty = (input, element, defaultValue) => {
    element.innerHTML = input.value || defaultValue;
    createsMarginInContacts();
};

const updateSrcIfEmpty = (input, element, defaultValue) => {
    element.src = input.value || defaultValue;
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

const createsEventListenersOnInputs = () => {
    const inputMappings = [
        { inputId: 'inputImg', elementId: 'srcImg', defaultValue: 'https://media.licdn.com/dms/image/C4E03AQF7dmpo0kLHCA/profile-displayphoto-shrink_100_100/0/1525440859677?e=1723075200&v=beta&t=hQ5MLROaO38mKrR0xN_k9le6Z7M4ptduANgOvTul98w', updater: updateSrcIfEmpty },
        { inputId: 'inputName', elementId: 'textName', defaultValue: 'Benjamin Catinot', updater: setDefaultIfEmpty },
        { inputId: 'inputTitle', elementId: 'textTitle', defaultValue: 'Co-Fondateur - CTO @Feelity', updater: setDefaultIfEmpty },
        { inputId: 'inputMail', elementId: 'textMail', defaultValue: 'bcatinot@feelity.fr', updater: setDefaultIfEmpty },
        { inputId: 'inputTel', elementId: 'textTel', defaultValue: '0642966109', updater: setDefaultIfEmpty },
        { inputId: 'inputAddress', elementId: 'textAddress', defaultValue: '8 rue Lassere', updater: setDefaultIfEmpty },
        { inputId: 'inputPostal', elementId: 'textPostal', defaultValue: '33800 Bordeaux', updater: setDefaultIfEmpty }
    ];

    inputMappings.forEach(({ inputId, elementId, defaultValue, updater }) =>
        addInputEventListener(inputId, elementId, defaultValue, updater)
    );
};

window.addEventListener('DOMContentLoaded', () => {
    createsMarginInContacts();
    createsEventListenersOnInputs();
});