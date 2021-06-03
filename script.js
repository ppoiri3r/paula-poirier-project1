// variables
const dropDownNav = document.querySelector('#drop-down-nav');
const hamIcon = document.getElementById('hamburger');
const closedIcon = document.getElementById('closed');


hamIcon.addEventListener('click', function() {
    dropDownNav.style.display = 'block';
    hamIcon.style.display = 'none';
    closedIcon.style.display = 'block';
});

closedIcon.addEventListener('click', function() {
    dropDownNav.style.display = 'none';
    closedIcon.style.display = 'none';
    hamIcon.style.display = 'block';
});
