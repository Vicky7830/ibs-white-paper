// Get elements from the DOM
const nextBtn = document.getElementById('next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const tocLinks = document.querySelectorAll('#toc-list a');
const mainContent = document.getElementById('main-content');
const contentCard = document.getElementById('content-card');
const sections = document.querySelectorAll('.content-card');

// Function to show an element
function showElement(element) {
  element.classList.remove('hidden');
}

// Function to hide an element
function hideElement(element) {
  element.classList.add('hidden');
}

// Hide all sections except the one passed as parameter
function hideAllSections() {
  sections.forEach(section => hideElement(section));
}

// Navigation from the initial content to the Table of Contents
nextBtn.addEventListener('click', () => {
  hideElement(mainContent);
  showElement(contentCard);
});

// Navigation from Table of Contents to specific sections
tocLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    hideElement(contentCard); // Hide the ToC

    const targetSection = document.getElementById(link.dataset.section);
    hideAllSections(); // Hide all sections before showing the target one
    showElement(targetSection);
  });
});

// Navigation to go back from each section to the Table of Contents
prevBtns.forEach(button => {
  button.addEventListener('click', () => {
    hideAllSections();
    showElement(contentCard); // Shows the Table of Contents when 'Previous' is clicked
  });
});
