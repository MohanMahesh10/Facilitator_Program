const referralInput = document.getElementById('referralInput');
const copyBtn = document.getElementById('copyBtn');
const toast = document.getElementById('toast');

// Set your links here
const formLink = document.getElementById('formLink');
const whatsAppLink = document.getElementById('whatsAppLink');
// Update these to your real URLs
formLink.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfzuDW9xrckFAbbK8BgBpyFI_iyzjXdCHcngS-pmw3HQ4qPAQ/viewform';
whatsAppLink.href = 'https://chat.whatsapp.com/D5vJFivTaXzJvoyedtmwX1';

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2200);
}

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(referralInput.value);
    referralInput.focus();
    referralInput.select();
    showToast('Referral code copied!');
  } catch (err) {
    // Fallback for older browsers
    referralInput.select();
    const ok = document.execCommand && document.execCommand('copy');
    showToast(ok ? 'Referral code copied!' : 'Press Ctrl+C to copy');
  }
});

// Allow clicking on the input to select all for quick copying
referralInput.addEventListener('click', () => {
  referralInput.select();
}); 