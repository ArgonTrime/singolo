// menu selected
const MENUITEM = document.querySelectorAll('.navigation__item');

MENUITEM.forEach(item => {
    item.addEventListener('click', e => {
        MENUITEM.forEach(item => {item.classList.remove('navigation__item_active');});
        e.target.classList.add('navigation__item_active');
    });
});

// pictures selected
const PICTURES = document.querySelectorAll('.layout-4-columns__item img');

PICTURES.forEach(item => {
    item.addEventListener('click', e => {
        console.log(PICTURES);
        PICTURES.forEach(item => {item.classList.remove('picture-border');});
        e.target.classList.add('picture-border');
    });
});
// pictures tag
const PICTURESTAGS = document.querySelectorAll('.tag');

PICTURESTAGS.forEach(item => {
    item.addEventListener('click', e => {
        PICTURESTAGS.forEach(item => {
            item.classList.remove('tag_active');
            item.classList.add('tag_border');
        });
        e.target.classList.remove('tag_border');
        e.target.classList.add('tag_active');
    });
});

// form submit
const SENDFORM = document.getElementById('sendForm');
const CLOSEWINDOW = document.getElementById('closeWindow');

SENDFORM.addEventListener('click', () => {
    const subjText = document.getElementById('subjText').value.toString();
    const descrText = document.getElementById('descrText').value.toString();
    document.getElementById('result-subject').innerText = subjText ? " " + subjText: " Without subject";
    document.getElementById('result-description').innerText = descrText ? " " + descrText: " Without description";
    document.getElementById('submitWindow').classList.remove('hidden');
});

CLOSEWINDOW.addEventListener('click', () => {
    document.getElementById('result-subject').innerText = "";
    document.getElementById('result-description').innerText = "";
    document.getElementById('submitWindow').classList.add('hidden');
});