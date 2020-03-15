const MENUITEM = document.querySelectorAll('.navigation__item');
const PICTURES = document.querySelectorAll('.layout-4-columns__item img');
const PICTURESTAGS = document.querySelectorAll('.tag');

// menu selected
MENUITEM.forEach(item => {
    item.addEventListener('click', e => {
        MENUITEM.forEach(item => {item.classList.remove('navigation__item_active');});
        e.target.classList.add('navigation__item_active');
    });
});

// pictures selected
PICTURES.forEach(item => {
    item.addEventListener('click', e => {
        console.log(PICTURES);
        PICTURES.forEach(item => {item.classList.remove('picture-border');});
        e.target.classList.add('picture-border');
    });
});
// pictures tag
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