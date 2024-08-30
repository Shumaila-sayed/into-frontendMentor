const feature = document.querySelector('#features');
const company = document.querySelector('#company');
const featDrop = document.querySelector('#features-drop');
const compDrop = document.querySelector('#company-drop');

function toggleDropdown(element, dropdown) {
    const isVisible = dropdown.style.display === 'grid';
    dropdown.style.display = isVisible ? 'none' : 'grid';
    element.querySelector('.arrow').classList.toggle('up', !isVisible);
}

// Initialize arrows state on page load
function initializeArrow() {
    feature.querySelector('.arrow').classList.remove('up');
    company.querySelector('.arrow').classList.remove('up');
}

// Call initialize function on page load
window.addEventListener('load', initializeArrow);

// Attach the event listeners
feature.addEventListener('click', () => toggleDropdown(feature, featDrop));
company.addEventListener('click', () => toggleDropdown(company, compDrop));
