const getElement = id => document.getElementById(id);

const selectContent = content => {
    const range = document.createRange();
    range.selectNodeContents(content);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    return selection;
};

const copyToClipboard = () => document.execCommand('copy');

const showNotification = message => {
    const notification = getElement('notification');
    notification.textContent = message;
    notification.className = 'show';
    setTimeout(() => notification.className = notification.className.replace('show', ''), 3000);
};

const copyContent = () => {
    const selection = selectContent(getElement('signature'));
    showNotification(copyToClipboard() ? 'Contenu copié avec succès !' : 'La copie a échoué. Veuillez essayer à nouveau.');
    selection.removeAllRanges();
};

getElement('copyButton').addEventListener('click', copyContent);