import { pageLoader } from './page-load';
import { aboutLoader } from './about.js';
import { menuLoader } from './menu.js';
import { removeContent } from './removeloader.js'
import { homeLoader } from './homesweethom.js';

pageLoader();

const page = document.querySelector('#content');
const btnClick = page.addEventListener('click', (e) => {
    const x = e.target.id;
    if (x === 'about') {
        removeContent();
        aboutLoader();
    } else if (x === 'menu') {
        removeContent();
        menuLoader();
    } else if (x === 'home') {
        removeContent();
        homeLoader();
    } else {
        //do nothing
    };
});





