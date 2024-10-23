
document.getElementById('replace-btn').addEventListener('click', () => {
    const findWord = document.getElementById('find-word').value;
    const replaceWord = document.getElementById('replace-word').value;

    if (findWord && replaceWord) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: replaceTextOnlyInTextNodes,
                args: [findWord, replaceWord]
            });
        });
    }
});

function replaceTextOnlyInTextNodes(findWord, replaceWord) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;

    const regex = new RegExp(findWord, 'gi');  

    while (node = walker.nextNode()) {
        node.textContent = node.textContent.replace(regex, replaceWord);
    }
}
document.getElementById('replace-btn').addEventListener('click', () => {
    const findWord = document.getElementById('find-word').value;
    const replaceWord = document.getElementById('replace-word').value;

    if (findWord && replaceWord) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: replaceTextOnlyInTextNodes,
                args: [findWord, replaceWord]
            });
        });
    }
});

function replaceTextOnlyInTextNodes(findWord, replaceWord) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;

    const regex = new RegExp(findWord, 'gi');  

    while (node = walker.nextNode()) {
        node.textContent = node.textContent.replace(regex, replaceWord);
    }
}
