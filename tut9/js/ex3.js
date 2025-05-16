// js/ex3.js
document.addEventListener('DOMContentLoaded', () => {
    const languageList = document.getElementById('languageList');
    const url = 'https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(text => {
            // This line splits by newline and filters out empty lines
            const languages = text.split('\n').filter(language => language.trim() !== '');
            languages.forEach(language => {
                const listItem = document.createElement('li');
                // This line sets the text content directly, no semicolon added here
                listItem.textContent = language;
                languageList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching the language list:', error);
            const errorMessage = document.createElement('li');
            errorMessage.textContent = 'Failed to load language list.';
            languageList.appendChild(errorMessage);
        });
});