document.getElementById('open-popup').addEventListener('click', function () {
    document.getElementById('popup').classList.add('open');
});

document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('popup').classList.remove('open');
});

document.getElementById('redirect-button').addEventListener('click', function () {
    window.location.href = 'https://example.com'; 
});