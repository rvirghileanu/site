//folosesc classList ca sa evidentiez un catelus selectat

document.querySelectorAll('.catelusi section').forEach(section => {
    section.addEventListener('click', function () {
        this.classList.add('highlight');
    });
    section.addEventListener('clickleave', function () {
        this.classList.remove('highlight');
    });
});

//folosesc target si currentTarget pentru a afisa un mesaj in cazul selectiei unui catelus
document.querySelectorAll('.catelusi section').forEach(section => {
    section.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            alert(`Ai selectat imaginea câinelui: ${section.querySelector('h2').textContent}`);
        } else {
            alert(`Ai selectat secțiunea câinelui: ${section.querySelector('h2').textContent}`);
        }
    });
});


