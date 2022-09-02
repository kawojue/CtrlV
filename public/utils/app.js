import platforms from './platform.js';

const hamburger = document.querySelector('.hamburger');
const platformsSection = document.querySelector('#platforms')
const boards = document.querySelectorAll('.cycle-board');
const sidebarCenter = document.querySelector('.sidebar-center')
const footerLinks = document.querySelector('.platforms-footer-center')
const cycle = document.querySelector('#cycleBtn')
const dropDown = document.querySelector('.drop-down');
const loadingSpin = document.querySelector('.loading-spin');
const feature = document.querySelector('.feature');
const dropDownBtns = document.querySelectorAll('.cycle-btn');
const priceLabel = document.querySelector('.price-label');
const priceDuration = document.querySelector('.price-duration');
const freeMonths = document.querySelector('.free-months');
const duration = document.querySelector('.duration');

hamburger.addEventListener('click', () => {
    const bars = document.querySelectorAll('.hamburger span')
    sidebarCenter.classList.toggle('sidebar-show')
    hamburger.classList.toggle('open')
    bars.forEach(bar => {
        bar.classList.toggle('open')
    })
})

cycle.addEventListener('click', () => {
    dropDown.classList.toggle('show')
})

dropDownBtns.forEach(dropDownBtn => {
    dropDownBtn.addEventListener('click', e => {
        const label = e.target.dataset.label
        duration.textContent = label
        if (label === "yearly") {
            freeMonths.textContent = "2 months free"
            freeMonths.classList.remove('hidden')
            priceLabel.textContent = "$29.99"
            priceDuration.textContent = "/year"
        } else if (label === "biannual") {
            freeMonths.textContent = "5 months free"
            freeMonths.classList.remove('hidden')
            priceLabel.textContent = "$56.99"
            priceDuration.textContent = "/2years"
        } else {
            freeMonths.classList.add('hidden')
            priceLabel.textContent = "$2.99"
            priceDuration.textContent = "/monthly"
        }
        dropDown.classList.remove('show')
    })
})

setTimeout(() => {
    loadingSpin.classList.add('hidden')
    feature.classList.remove('hidden');
    // clearTimeout - But, no!
}, 2000);

platformsSection.innerHTML = platforms.map(platform => {
    const {
        icon,
        title,
        available
    } = platform;
    if (available) {
        return `
            <div class="platforms-item">
                <i class="${icon}"></i>
                <p>${title}</p>
            </div>
        `
    }
    return `
        <div class="platforms-item">
            <span>coming soon</span>
            <i class="${icon}"></i>
            <p>${title}</p>
        </div>
    `
}).join('')

footerLinks.innerHTML = platforms.map(platform => {
    const {
        available,
        title
    } = platform;
    if (available) {
        return `
            <ul>
                <li>
                    <a href="#">
                        <p>${title}</p>
                    </a>
                </li>
            </ul>
        `
    }
    return `
        <ul>
            <li>
                <a href="#">
                    <p>${title}</p>
                        <span>await</span>
                </a>
            </li>
        </ul>
        `
}).join('')


const plaformsItem = document.querySelectorAll('.platforms-item')

window.addEventListener('scroll', () => {
    swipe(plaformsItem)
    swipe(boards)
});
swipe(plaformsItem);
swipe(boards);

function swipe(containers) {
    const bottom = window.innerHeight / 5 * 4
    containers.forEach(container => {
        const containerTop = container.getBoundingClientRect().top
        if (containerTop < bottom) {
            container.classList.add('show')
        } else {
            container.classList.remove('show')
        }
    })
}