'use strict';

const backgroundChoice = document.getElementById('background-choice');
const nameInput = document.getElementById('name-input');
const savedNameMessage = document.getElementById('saved-name');
const offlineStatus = document.getElementById('offline-status');

// The default background remains plain white until a choice is made.
backgroundChoice.addEventListener('change', () => {
  document.body.classList.remove('bg-blue', 'bg-gold');
  if (backgroundChoice.value === 'blue') document.body.classList.add('bg-blue');
  if (backgroundChoice.value === 'gold') document.body.classList.add('bg-gold');
});

// Extra credit: save a name only if Local Storage has no name key yet.
function displayStoredName() {
  try {
    const storedName = localStorage.getItem('name');
    if (storedName !== null) {
      savedNameMessage.textContent = `Welcome back, ${storedName}!`;
      nameInput.value = storedName;
    } else {
      savedNameMessage.textContent = 'No name saved yet.';
    }
  } catch (error) {
    savedNameMessage.textContent = 'Local Storage is not available in this browser.';
  }
}

function saveNameIfMissing() {
  const enteredName = nameInput.value.trim();
  if (!enteredName) return;
  try {
    if (localStorage.getItem('name') === null) {
      localStorage.setItem('name', enteredName);
    }
  } catch (error) {
    savedNameMessage.textContent = 'Could not save your name.';
    return;
  }
  displayStoredName();
}

// The change event happens when the user finishes editing and leaves the input.
nameInput.addEventListener('change', saveNameIfMissing);
displayStoredName();

function updateConnectionStatus() {
  offlineStatus.textContent = navigator.onLine ? 'Online — ready for offline use after first load.' : 'Offline — cached app is ready.';
}
window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);
updateConnectionStatus();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(error => {
      console.warn('Service Worker registration failed:', error);
    });
  });
}
