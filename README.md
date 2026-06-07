# 🏥 StressCare - Complete Frontend Application

**Mobile-first, Responsive Stress Detection & Monitoring Frontend**

---

## 📋 Project Overview

StressCare is a comprehensive web application for stress detection and monitoring. The frontend includes 25 fully-designed screens covering:
- User authentication (registration, login, password recovery)
- Real-time stress monitoring
- Sleep analysis and migraine risk assessment
- Wellness interventions and recommendations
- Device management for wearables
- Comprehensive user settings and profile management

---

## 📁 Folder Structure

```
stress_detection_frontend/
├── index.html                 # Main landing page with screen navigation
├── html/                      # All HTML screen files (25 screens)
│   ├── splash.html
│   ├── onboarding-*.html
│   ├── register.html
│   ├── login.html
│   ├── forgot-password.html
│   ├── subscription.html
│   ├── device-pairing.html
│   ├── calibration.html
│   ├── home.html
│   ├── monitoring.html
│   ├── history.html
│   ├── report-detail.html
│   ├── interventions.html
│   ├── feedback.html
│   ├── insights.html
│   ├── sleep-analysis.html
│   ├── migraine-risk.html
│   ├── notifications.html
│   ├── profile.html
│   ├── settings.html
│   ├── device-management.html
│   ├── cloud-sync.html
│   └── help.html
├── css/                       # Stylesheets
│   ├── common.css             # Global styles, utilities, components
│   ├── splash.css
│   ├── onboarding.css
│   ├── auth.css
│   ├── subscription.css
│   ├── device-setup.css
│   ├── dashboard.css
│   ├── monitoring.css
│   ├── history.css
│   ├── report.css
│   ├── interventions.css
│   ├── feedback.css
│   ├── insights.css
│   ├── analysis.css
│   ├── migraine.css
│   ├── notifications.css
│   ├── profile.css
│   ├── settings.css
│   ├── device-management.css
│   ├── cloud-sync.css
│   └── help.css
├── js/                        # JavaScript files
│   └── main.js                # Global utilities, API helpers, functions
├── images/                    # Placeholder images directory
├── assets/                    # Additional assets (icons, logos, etc.)
└── README.md                  # This file
```

---

## 🖥️ Available Screens (25 Total)

### Authentication & Onboarding (7 screens)
1. **Splash Screen** - App loading with branding
2. **Onboarding Screen 1** - Welcome introduction
3. **Onboarding Screen 2** - Real-time monitoring features
4. **Onboarding Screen 3** - Smart insights feature
5. **Register Screen** - New user registration
6. **Login Screen** - User authentication
7. **Forgot Password Screen** - Password recovery

### Setup & Plans (3 screens)
8. **Subscription Plans** - Free/Premium plan selection
9. **Device Pairing** - Connect wearable devices via BLE
10. **Calibration** - Record baseline vital signs

### Main Application (15 screens)
11. **Home Dashboard** - Main stress display and quick stats
12. **Monitoring Screen** - Real-time stress monitoring with timer
13. **History Screen** - View previous stress records
14. **Report Detail** - Detailed session analysis
15. **Interventions** - Breathing, meditation, relaxation exercises
16. **Feedback/PSS** - Questionnaire and feedback form
17. **Insights** - AI-powered stress patterns and recommendations
18. **Sleep Analysis** - Sleep quality and duration tracking
19. **Migraine Risk** - Risk assessment and prevention tips
20. **Notifications** - Alerts, achievements, reminders
21. **Profile** - User information and statistics
22. **Settings** - App preferences and configuration
23. **Device Management** - Manage connected wearables
24. **Cloud Sync** - Data backup and AI model updates
25. **Help & Support** - FAQ, support contact, app info

---

## 🎨 Design Features

### Mobile-First Responsive Design
- Optimized for phones (375px+)
- Responsive breakpoints for tablets and desktops (640px, 768px, 1024px+)
- Touch-friendly buttons and spacing
- Adaptive layouts and grids

### Color Scheme
- **Primary Color:** #6C63FF (Purple)
- **Secondary Color:** #FF6B6B (Red)
- **Success Color:** #51CF66 (Green)
- **Warning Color:** #FFA500 (Orange)
- **Neutral Grays:** Multiple shades for text and backgrounds

### Components Included
- ✅ Responsive navigation (bottom nav with icons)
- ✅ Reusable button styles (primary, secondary, outline, ghost, sizes)
- ✅ Form elements (inputs, selects, textareas, checkboxes, radio buttons)
- ✅ Cards and containers with shadows
- ✅ Progress indicators (dots, bars)
- ✅ Alerts and badges
- ✅ Stat boxes and metrics
- ✅ Modal-ready components
- ✅ Loading spinners and animations

---

## 🚀 Quick Start

### 1. **Open Main Page**
```
Open: index.html in your browser
```
The landing page displays all available screens with quick links.

### 2. **Launch the App**
Click "Launch App" button → Opens Splash Screen → Auto-navigates to Onboarding

### 3. **Navigate Between Screens**
- Use navigation buttons/links in each screen
- Use back button (←) to go to previous page
- Use bottom navigation for main app screens
- Use screen links from index.html

### 4. **Test Responsiveness**
- Open DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Test at different viewport sizes

---

## 📱 Navigation Paths

### User Flow (First Time)
```
Splash → Onboarding 1-3 → Register → Login → Subscription 
→ Device Pairing → Calibration → Home Dashboard
```

### Existing User Flow
```
Splash → Login → Home Dashboard
```

### Main App Navigation
```
Home ↔ History ↔ Monitoring ↔ Insights ↔ Profile
     ↓
     Features: Interventions, Feedback, Sleep, Migraine, etc.
     Settings: Device Mgmt, Cloud Sync, Help, etc.
```

---

## 🔧 Customization Guide

### Change Color Scheme
Edit CSS variables in `css/common.css`:
```css
:root {
  --primary-color: #6C63FF;  /* Change main color */
  --secondary-color: #FF6B6B; /* Change accent color */
  /* ... other colors ... */
}
```

### Modify Spacing
```css
:root {
  --spacing-md: 1rem;  /* Change base spacing */
  --spacing-lg: 1.5rem;
  /* ... other sizes ... */
}
```

### Add New Screen
1. Create HTML file in `html/` folder
2. Create CSS file in `css/` folder (optional)
3. Link CSS file in HTML head
4. Add navigation link in existing screens
5. Add link in index.html for quick access

### Add Placeholder Images
Replace `../images/placeholder-*.png` with actual image paths:
```html
<img src="../images/your-image.png" alt="Description">
```

---

## 💻 HTML Structure Pattern

All screens follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>StressCare - Screen Name</title>
  <link rel="stylesheet" href="../css/common.css">
  <link rel="stylesheet" href="../css/screen.css">
</head>
<body>
  <div class="screen">
    <!-- Header (optional) -->
    <div class="screen-header">
      <a href="previous.html" class="back-btn">←</a>
      <h1>Screen Title</h1>
    </div>

    <!-- Main Content -->
    <div class="screen-main">
      <!-- Your content here -->
    </div>

    <!-- Footer (optional) -->
    <div class="screen-footer">
      <!-- Buttons or navigation -->
    </div>

    <!-- Bottom Navigation (for app screens) -->
    <nav class="nav-bottom">
      <!-- Navigation items -->
    </nav>
  </div>
</body>
</html>
```

---

## 🎯 CSS Classes Reference

### Layout
- `.screen` - Full screen container
- `.screen-header` - Top header with background
- `.screen-main` - Main content area (scrollable)
- `.screen-footer` - Bottom footer
- `.container` - Centered content container

### Components
- `.btn` - Button (use with modifiers)
- `.card` - Card component
- `.alert` - Alert/message box
- `.badge` - Small label badge
- `.stat-box` - Statistics display

### Utilities
- `.text-center` - Center text
- `.text-primary` - Primary color text
- `.mt-lg` - Margin top large
- `.mb-lg` - Margin bottom large
- `.p-lg` - Padding large
- `.flex` - Flexbox container
- `.grid-2` - 2-column grid

---

## 🔌 JavaScript Integration

The `js/main.js` file includes:

### Utility Functions
```javascript
navigateTo(screenName)      // Navigate to a screen
goBack()                    // Go to previous page
formatDate(date)            // Format date
formatTime(seconds)         // Format time
```

### Storage Helper
```javascript
StorageHelper.setItem(key, value)    // Save data
StorageHelper.getItem(key)           // Get data
StorageHelper.removeItem(key)        // Delete data
StorageHelper.clear()                // Clear all
```

### API Helper (ready for backend)
```javascript
API.login(email, password)
API.register(userData)
API.getStressData(timeRange)
API.submitFeedback(data)
```

---

## 🔐 Backend Integration

To connect with a backend API:

1. **Update API baseURL** in `js/main.js`:
```javascript
API.baseURL = 'https://your-backend-api.com/api';
```

2. **Add authentication** in form submission handlers:
```javascript
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const result = await API.login(data.email, data.password);
  // Handle result
});
```

3. **Store tokens** using StorageHelper:
```javascript
StorageHelper.setItem('authToken', response.token);
```

---

## 📊 Responsive Breakpoints

```css
Mobile:    < 640px (default styling)
Tablet:    640px - 1023px
Desktop:   ≥ 1024px
```

Media queries in `common.css`:
```css
@media (min-width: 640px) { /* Tablet styles */ }
@media (min-width: 768px) { /* Larger tablet */ }
@media (min-width: 1024px) { /* Desktop styles */ }
```

---

## 🚨 Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (iOS 13+)
- IE 11: ⚠️ Limited support (CSS Grid might not work)

---

## 📝 Notes

- All images use `../images/placeholder-*.png` - Replace with actual images
- Forms don't submit (no backend) - Add form handlers in `js/main.js`
- Navigation links use relative paths - Adjust if restructuring folders
- Emojis used for icons - Replace with SVG/Font icons for production
- All content is dummy/placeholder - Update with real copy

---

## 🛠️ Development Tips

1. **Use Browser DevTools** for responsive testing
2. **Check console** for any JavaScript errors
3. **Validate HTML** using W3C Validator
4. **Test all links** to ensure navigation works
5. **Check color contrast** for accessibility
6. **Optimize images** before deployment

---

## 📦 Production Checklist

- ✅ Replace placeholder images with actual images
- ✅ Add real content and copy
- ✅ Connect to backend API
- ✅ Implement form validation and submission
- ✅ Add analytics tracking
- ✅ Test on real mobile devices
- ✅ Optimize images and assets
- ✅ Add PWA support (service worker)
- ✅ Set up hosting and SSL
- ✅ Configure environment variables

---

## 📄 License & Credits

This is a starter template for the StressCare application. 
Feel free to modify and extend according to your needs.

---

**Happy Coding! 💪**
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (Vanilla)** - No external dependencies

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... more colors ... */
}
```

### Content
Edit the slides in `index.html` to customize:
- Headings and descriptions
- Icons (using emojis or font icons)
- Features and benefits

## 🔧 Development

### File Sizes
- `index.html` - ~4.5 KB
- `styles.css` - ~8 KB
- `script.js` - ~2.5 KB
- **Total** - ~14.5 KB (minimal, fast loading)

### Performance
- No external dependencies
- Lightweight animations
- Optimized for mobile devices
- Smooth 60fps transitions

## 📱 Mobile Optimization
- Responsive breakpoints at 480px and 360px
- Touch-friendly buttons and interactions
- Swipe gesture support
- Viewport optimization

## 🔐 Privacy & Security Notes
- No user data is collected during onboarding
- All processing happens client-side
- No third-party dependencies
- HTTPS recommended for production

## 📝 Next Steps

After onboarding, consider adding:
1. Dashboard page
2. Stress tracking interface
3. History and analytics
4. Settings page
5. User authentication

## 📄 License
Create or specify your project license here.

## 👨‍💻 Author
Your Name / Team

## 📧 Support
For questions or issues, contact: support@stressdetection.app
