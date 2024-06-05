
const createsMarginInContacts = () => {
    const divPersonalInformation = document.getElementById('personal-information');
    const divContacts = document.getElementById('contacts');
    const divAddress = document.getElementById('address');

    const marginRight = divPersonalInformation.offsetWidth - divContacts.offsetWidth - divAddress.offsetWidth - 5.2;

    divContacts.style.marginRight = marginRight + 'px';
}

const createsEventListenersOnInputs = () => {
    inputImg.addEventListener('input', () => {
        srcImg.src = inputImg.value;
        createsMarginInContacts();
    })
    inputName.addEventListener('input', () => {
        textName.innerHTML = inputName.value;
        createsMarginInContacts();
    })
    inputTitle.addEventListener('input', () => {
        textTitle.innerHTML = inputTitle.value;
        createsMarginInContacts();
    })
    inputMail.addEventListener('input', () => {
        textMail.innerHTML = inputMail.value;
        createsMarginInContacts();
    })
    inputTel.addEventListener('input', () => {
        textTel.innerHTML = inputTel.value;
        createsMarginInContacts();
    })
    inputAddress.addEventListener('input', () => {
        textAddress.innerHTML = inputAddress.value;
        createsMarginInContacts();
    })
    inputPostal.addEventListener('input', () => {
        textPostal.innerHTML = inputPostal.value;
        createsMarginInContacts();
    })
}

window.addEventListener('DOMContentLoaded', () => {
    const inputImg = document.getElementById('inputImg');
    const inputName = document.getElementById('inputName');
    const inputTitle = document.getElementById('inputTitle');
    const inputMail = document.getElementById('inputMail');
    const inputTel = document.getElementById('inputTel');
    const inputAddress = document.getElementById('inputAddress');
    const inputPostal = document.getElementById('inputPostal');
    const srcImg = document.getElementById('srcImg');
    const textName = document.getElementById('textName');
    const textTitle = document.getElementById('textTitle');
    const textMail = document.getElementById('textMail');
    const textTel = document.getElementById('textTel');
    const textAddress = document.getElementById('textAddress');
    const textPostal = document.getElementById('textPostal');

    createsMarginInContacts();
    createsEventListenersOnInputs();
});