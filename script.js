let currentSection = 1;
const totalSections = 20;

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentSection > 1) {
    currentSection--;
    updateSection();
  }
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentSection < totalSections) {
    currentSection++;
    updateSection();
  }
});

function updateSection() {
  const sectionContent = document.getElementById('section-content');
  sectionContent.innerHTML = `
    <div id="section${currentSection}" class="section">
      <h3>${currentSection}. ${getSectionTitle(currentSection)}</h3>
      <p>Content for section ${currentSection} goes here...</p>
    </div>
  `;
}

function getSectionTitle(sectionNumber) {
  const sectionTitles = [
    'Introduction', 'Mission and Vision', 'Market Overview', 'Core Gameplay Features', 
    'Gameplay Mechanics', 'Crypto Integration', 'Player Statistics', 'Tokenomics', 
    'Roadmap', 'Community and Engagement', 'Security and Compliance', 'Partnerships and Collaborations', 
    'Marketing Strategy', 'Competitive Analysis', 'User Acquisition and Retention', 
    'Monetization Strategies', 'Risk Factors and Mitigation', 'Future Developments', 
    'Conclusion', 'Contact Information'
  ];
  return sectionTitles[sectionNumber - 1];
}
