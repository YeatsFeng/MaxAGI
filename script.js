const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Booking form: CTA buttons pre-select the matching option,
// and the submit button label follows the selection.
const interestSelect = document.getElementById('interest');
const submitBtn = document.getElementById('submitBtn');

const submitLabels = {
  'readiness': 'Book a Cloud & AI Readiness Call',
  'aws-assessment': 'Get an AWS Deployment Assessment'
};

function updateSubmitLabel() {
  submitBtn.textContent = submitLabels[interestSelect.value];
}

interestSelect.addEventListener('change', updateSubmitLabel);

document.querySelectorAll('[data-interest]').forEach(button => {
  button.addEventListener('click', () => {
    interestSelect.value = button.dataset.interest;
    updateSubmitLabel();
  });
});
