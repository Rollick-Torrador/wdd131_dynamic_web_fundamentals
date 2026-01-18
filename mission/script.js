const selectElem = document.querySelector('#themeSelect');
const logo = document.querySelector('footer img');
const body = document.body;

selectElem.addEventListener('change', changeTheme);

const lightLogoSrc = 'images/byui-logo-white.png';
const darkLogoSrc = 'images/byui-logo-black.png';

function changeTheme() {
    const current = selectElem.value;

    if (current === 'dark') {
        body.classList.add('dark')
        logo.src = darkLogoSrc;
        logo.alt = 'BYUI logo (black)'
    }
        else if (current === 'light') {
            body.classList.remove('dark');
            logo.src = lightLogoSrc;
            logo.alt = 'BYUI logo (normal)';
        }
        else {
            body.classList.remove('dark');
            logo.src = lightLogoSrc;
            logo.alt = 'BYUI logo (normal)';
        }
}