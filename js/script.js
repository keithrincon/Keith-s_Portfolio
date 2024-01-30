/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

'use strict';

// Light and dark mode

const /**{NodeElement} */ $themeBtn =
    document.querySelector('[data-theme-btn]');
const /**{NodeElement} */ $HTML = document.documentElement;
let /**Boolean | String */ isDark = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;

if (sessionStorage.getItem('theme')) {
  $HTML.dataset.them = sessionStorage.getItem('theme');
} else {
  $HTML.dataset.theme = isDark ? 'dark' : 'light';
}

const changeTheme = () => {
  $HTML.dataset.theme =
    sessionStorage.getItem('theme') === 'light' ? 'dark' : 'light';
  sessionStorage.setItem('theme', $HTML.dataset.theme);
};
$themeBtn.addEventListener('click', changeTheme);
window.addEventListener('load', () =>
  $themeBtn.addEventListener('click', changeTheme)
);

// TABS

/**{NodeList} */
const $tabBtn = document.querySelectorAll('[data-tab-btn]');

/** {NodeElement} */
let [lastActiveTab] = document.querySelectorAll('[data-tab-content]');

/** {NodeElement} */
let [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach((item) => {
  item.addEventListener('click', function () {
    lastActiveTab.classList.remove('active');
    lastActiveTabBtn.classList.remove('active');

    /** {NodeElement} */
    const $tabContent = document.querySelector(
      `[data-tab-content="${item.dataset.tabBtn}"]`
    );
    $tabContent.classList.add('active');
    this.classList.add('active');

    lastActiveTab = $tabContent;
    lastActiveTabBtn = this;
  });
});
