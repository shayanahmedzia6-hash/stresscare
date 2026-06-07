/* ========================================
   StressCare - Global JavaScript
   ======================================== */

/**
 * Navigate to a specific screen
 * @param {string} screenName - Screen name (e.g., 'home', 'dashboard')
 */
function navigateTo(screenName) {
  window.location.href = `../html/${screenName}.html`;
}

/**
 * Go back to previous page
 */
function goBack() {
  window.history.back();
}

/**
 * Show loading indicator
 */
function showLoading() {
  const loader = document.createElement('div');
  loader.id = 'loading-spinner';
  loader.className = 'spinner';
  document.body.appendChild(loader);
}

/**
 * Hide loading indicator
 */
function hideLoading() {
  const loader = document.getElementById('loading-spinner');
  if (loader) loader.remove();
}

/**
 * Format date to readable format
 * @param {Date} date
 * @returns {string}
 */
function formatDate(date) {
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return date.toLocaleDateString('en-US', options);
}

/**
 * Format time in HH:MM:SS
 * @param {number} seconds
 * @returns {string}
 */
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

/**
 * Initialize all interactive elements
 */
document.addEventListener('DOMContentLoaded', function() {
  // Rating stars functionality
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      stars.forEach((s, i) => {
        s.classList.toggle('active', i <= index);
      });
    });
  });

  // FAQ toggle
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const item = this.parentElement;
      item.classList.toggle('open');
      const icon = this.querySelector('.faq-icon');
      if (icon) {
        icon.textContent = item.classList.contains('open') ? '−' : '+';
      }
    });
  });

  // Form validation helpers
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      // Add your form validation logic here
      console.log('Form submitted');
    });
  });

  console.log('StressCare app initialized');
});

/**
 * LocalStorage helpers for session management
 */
const StorageHelper = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  removeItem: (key) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  }
};

/**
 * API helpers for future backend integration
 */
const API = {
  baseURL: 'http://localhost:3000/api', // Update with your API URL

  async fetch(endpoint, options = {}) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Authentication
  login: (email, password) => {
    return API.fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  },

  register: (userData) => {
    return API.fetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  },

  // Stress monitoring
  getStressData: (timeRange = '7d') => {
    return API.fetch(`/stress?range=${timeRange}`);
  },

  submitFeedback: (feedbackData) => {
    return API.fetch('/feedback', {
      method: 'POST',
      body: JSON.stringify(feedbackData)
    });
  }
};

console.log('StressCare Global Scripts Loaded');
