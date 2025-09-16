# Sparky UI

A modern, sleek Tailwind CSS plugin for quick-to-integrate components and layouts with automatic theming support. Inspired by DaisyUI but with a focus on contemporary design patterns, glass morphism effects, and smooth animations.

## Features

- 🎨 **Modern Design**: Glass morphism, gradients, and smooth animations
- 🌙 **Automatic Dark Mode**: Follows system preferences with manual override
- 🎯 **Quick Integration**: Drop-in components that work out of the box
- 🔧 **Customizable**: Easy theme customization with CSS variables
- 📱 **Responsive**: Mobile-first responsive design
- ⚡ **Lightweight**: Minimal footprint, only adds what you use

## Installation

Install Sparky UI as a development dependency:

```bash
npm install -D spark-ui
```

Add Sparky UI to your Tailwind CSS configuration:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('spark-ui')
  ],
}
```

Add Sparky UI to your CSS:

```css
/* app.css */
@import "tailwindcss";
@plugin "spark-ui";
```

## Usage

### Basic Setup

Simply add the classes to your HTML elements:

```html
<button class="btn btn-primary">Primary Button</button>
<div class="card">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Card content goes here</p>
  </div>
</div>
```

### Theme Switching

Sparky UI automatically follows system preferences but you can manually set themes:

```html
<!-- Light theme (default) -->
<html>
  <body>
    <!-- Your content -->
  </body>
</html>

<!-- Dark theme -->
<html data-theme="dark">
  <body>
    <!-- Your content -->
  </body>
</html>
```

Toggle theme with JavaScript:

```js
// Toggle theme
const html = document.documentElement;
const currentTheme = html.getAttribute('data-theme');
html.setAttribute('data-theme', currentTheme === 'dark' ? '' : 'dark');
```

## Components

### Buttons

Modern buttons with hover effects and gradients:

```html
<!-- Basic buttons -->
<button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>

<!-- Button variants -->
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Ghost</button>

<!-- Button sizes -->
<button class="btn btn-sm">Small</button>
<button class="btn">Default</button>
<button class="btn btn-lg">Large</button>
<button class="btn btn-xl">Extra Large</button>
```

### Cards

Sleek cards with glass morphism effects:

```html
<!-- Basic card -->
<div class="card">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Some content for the card</p>
    <div class="card-actions">
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>

<!-- Card with image -->
<div class="card">
  <figure>
    <img src="image.jpg" alt="Description">
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card with Image</h2>
    <p>Card content</p>
  </div>
</div>

<!-- Compact card -->
<div class="card card-compact">
  <div class="card-body">
    <h3 class="card-title">Compact Card</h3>
    <p>Less padding</p>
  </div>
</div>
```

### Chat Bubbles

Modern chat interface components:

```html
<div class="chat">
  <div class="chat-bubble chat-bubble-start">Hello! How can I help you?</div>
  <div class="chat-bubble chat-bubble-end">I need assistance with my order</div>
  <div class="chat-bubble chat-bubble-start">I'd be happy to help you with that!</div>
</div>
```

### Badges

Status indicators and labels:

```html
<!-- Basic badges -->
<span class="badge">Default</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-error">Error</span>

<!-- Badge sizes -->
<span class="badge badge-sm">Small</span>
<span class="badge">Default</span>
<span class="badge badge-lg">Large</span>
```

### Progress Bars

Animated progress indicators:

```html
<!-- Basic progress -->
<div class="progress">
  <div class="progress-bar" style="width: 75%"></div>
</div>

<!-- Different sizes -->
<div class="progress progress-sm">
  <div class="progress-bar" style="width: 45%"></div>
</div>
<div class="progress progress-lg">
  <div class="progress-bar" style="width: 90%"></div>
</div>

<!-- Loading spinners -->
<div class="loading"></div>
<div class="loading loading-sm"></div>
<div class="loading loading-lg"></div>
```

### Avatars

User profile pictures and groups:

```html
<!-- Single avatar -->
<div class="avatar">
  <img src="user.jpg" alt="User">
</div>

<!-- Avatar sizes -->
<div class="avatar avatar-sm">
  <img src="user.jpg" alt="User">
</div>
<div class="avatar avatar-lg">
  <img src="user.jpg" alt="User">
</div>

<!-- Avatar group -->
<div class="avatar-group">
  <div class="avatar"><img src="user1.jpg" alt="User 1"></div>
  <div class="avatar"><img src="user2.jpg" alt="User 2"></div>
  <div class="avatar"><img src="user3.jpg" alt="User 3"></div>
</div>
```

### Accordion

Collapsible content sections:

```html
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">
      What is Sparky UI?
      <span>+</span>
    </button>
    <div class="accordion-content">
      Sparky UI is a modern Tailwind CSS plugin with 25+ components.
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">
      How to install?
      <span>+</span>
    </button>
    <div class="accordion-content">
      Run npm install -D spark-ui and add to your Tailwind config.
    </div>
  </div>
</div>
```

### Tabs

Tabbed content navigation:

```html
<div class="tabs">
  <button class="tab tab-active">Tab 1</button>
  <button class="tab">Tab 2</button>
  <button class="tab">Tab 3</button>
</div>
<div class="tab-content active">Content for Tab 1</div>
<div class="tab-content">Content for Tab 2</div>
<div class="tab-content">Content for Tab 3</div>
```

### Modal

Overlay dialogs and popups:

```html
<div class="modal modal-open">
  <div class="modal-overlay"></div>
  <div class="modal-content">
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-4">Modal Title</h2>
      <p class="mb-6">Modal content goes here...</p>
      <div class="flex gap-2 justify-end">
        <button class="btn">Cancel</button>
        <button class="btn btn-primary">Confirm</button>
      </div>
    </div>
  </div>
</div>
```

### Timeline

Event chronology display:

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-content">
      <h3>Event Title</h3>
      <p>Event description...</p>
      <small>Date</small>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-content">
      <h3>Another Event</h3>
      <p>Another event description...</p>
      <small>Date</small>
    </div>
  </div>
</div>
```

### Statistics

Metric display cards:

```html
<div class="stat">
  <div class="stat-value">1.2K</div>
  <div class="stat-title">Total Users</div>
  <div class="stat-desc">21% more than last month</div>
</div>
```

### Alerts

Status messages and notifications:

```html
<div class="alert alert-success">Success! Your action was completed.</div>
<div class="alert alert-warning">Warning! Please check your input.</div>
<div class="alert alert-error">Error! Something went wrong.</div>
<div class="alert alert-info">Info! Here's some useful information.</div>
```

### Toggles

Switch controls:

```html
<label class="toggle">
  <input type="checkbox">
  <span class="toggle-slider"></span>
</label>
```

### Testimonials

Customer review components:

```html
<div class="testimonial">
  <div class="testimonial-content">
    This product has completely transformed our workflow. Highly recommended!
  </div>
  <div class="testimonial-author">
    <div class="avatar">
      <img src="customer.jpg" alt="Customer">
    </div>
    <div class="testimonial-author-info">
      <h4>John Doe</h4>
      <p>CEO, Company</p>
    </div>
  </div>
</div>
```

### Pricing Cards

Subscription plan displays:

```html
<div class="pricing-card">
  <h3>Basic Plan</h3>
  <div class="pricing-price">$9.99</div>
  <ul class="pricing-features">
    <li>Feature 1</li>
    <li>Feature 2</li>
    <li>Feature 3</li>
  </ul>
  <button class="btn btn-primary">Choose Plan</button>
</div>

<!-- Featured plan -->
<div class="pricing-card pricing-card-featured">
  <h3>Pro Plan</h3>
  <div class="pricing-price">$19.99</div>
  <ul class="pricing-features">
    <li>Everything in Basic</li>
    <li>Advanced Features</li>
    <li>Priority Support</li>
  </ul>
  <button class="btn btn-primary">Choose Plan</button>
</div>
```

### Gallery

Image grid layouts:

```html
<div class="gallery">
  <div class="gallery-item">
    <img src="image1.jpg" alt="Image 1">
    <div class="gallery-overlay">
      <button class="btn btn-primary">View</button>
    </div>
  </div>
  <div class="gallery-item">
    <img src="image2.jpg" alt="Image 2">
    <div class="gallery-overlay">
      <button class="btn btn-primary">View</button>
    </div>
  </div>
</div>
```

### Sidebar

Navigation drawer:

```html
<div class="sidebar sidebar-open">
  <ul class="sidebar-nav">
    <li class="sidebar-nav-item">
      <a href="#" class="sidebar-nav-link">Dashboard</a>
    </li>
    <li class="sidebar-nav-item">
      <a href="#" class="sidebar-nav-link">Settings</a>
    </li>
    <li class="sidebar-nav-item">
      <a href="#" class="sidebar-nav-link">Profile</a>
    </li>
  </ul>
</div>
```

### Breadcrumbs

Navigation path indicator:

```html
<nav class="breadcrumb">
  <div class="breadcrumb-item">
    <a href="#" class="breadcrumb-link">Home</a>
  </div>
  <div class="breadcrumb-item">
    <a href="#" class="breadcrumb-link">Category</a>
  </div>
  <div class="breadcrumb-item">Current Page</div>
</nav>
```

### Dropdown

Contextual menus:

```html
<div class="dropdown dropdown-open">
  <button class="btn">Menu</button>
  <div class="dropdown-content">
    <a href="#" class="dropdown-item">Action 1</a>
    <a href="#" class="dropdown-item">Action 2</a>
    <a href="#" class="dropdown-item">Action 3</a>
  </div>
</div>
```

### Toast Notifications

Floating status messages:

```html
<div class="toast toast-show toast-success">
  <p>✅ Success! Your changes have been saved.</p>
</div>
<div class="toast toast-show toast-error">
  <p>❌ Error! Please try again.</p>
</div>
```

### Hero Sections

Eye-catching hero sections with gradients:

```html
<!-- Centered hero -->
<div class="hero">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hello there</h1>
      <p class="py-6">
        Welcome to Sparky UI - modern, sleek components for your next project.
      </p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<!-- Hero with background image -->
<div class="hero min-h-screen" style="background-image: url('hero-bg.jpg');">
  <div class="hero-overlay"></div>
  <div class="hero-content text-center text-white">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Amazing Hero</h1>
      <p class="py-6">Hero with overlay effect</p>
      <button class="btn btn-primary">Learn More</button>
    </div>
  </div>
</div>
```

### Forms

Modern form elements with focus states:

```html
<div class="fieldset">
  <label class="label">Email</label>
  <input type="email" class="input" placeholder="Enter your email">
  
  <label class="label">Password</label>
  <input type="password" class="input" placeholder="Enter password">
  
  <button class="btn btn-primary">Submit</button>
</div>
```

### Navigation

Sleek navigation bars:

```html
<nav class="navbar">
  <a class="navbar-brand" href="#">Sparky UI</a>
  <ul class="navbar-nav">
    <li><a class="navbar-link" href="#">Home</a></li>
    <li><a class="navbar-link" href="#">About</a></li>
    <li><a class="navbar-link" href="#">Contact</a></li>
  </ul>
</nav>
```

### Layout Components

Grid and section utilities:

```html
<!-- Auto-responsive grid -->
<div class="grid-layout grid-cols-auto">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
  <div class="card">Item 3</div>
</div>

<!-- Masonry layout -->
<div class="grid-masonry">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
  <div class="card">Item 3</div>
</div>

<!-- Section containers -->
<section class="section">
  <div class="container">
    <h2>Section Title</h2>
    <p>Section content...</p>
  </div>
</section>
```

### Footer

Website footer sections:

```html
<footer class="footer">
  <div class="footer-content">
    <div class="footer-section">
      <h3>Company</h3>
      <ul class="footer-links">
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Products</h3>
      <ul class="footer-links">
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </div>
  </div>
</footer>
```

## Utility Classes

### Glass Effect

```html
<div class="glass p-6 rounded-lg">
  Glass morphism effect
</div>
```

### Gradients

```html
<div class="gradient-primary p-6 text-white rounded-lg">
  Primary gradient background
</div>

<h1 class="text-gradient text-4xl font-bold">
  Gradient text effect
</h1>
```

## Color System

Sparky UI uses a semantic color system with automatic dark mode:

- `primary` - Main brand color
- `secondary` - Secondary brand color  
- `accent` - Accent color for highlights
- `neutral` - Neutral gray tones
- `base-100/200/300` - Background colors
- `info/success/warning/error` - Status colors

All colors automatically adapt to light/dark themes and can be used with Tailwind's opacity modifiers:

```html
<div class="bg-primary/20 text-primary border border-primary/30">
  Semi-transparent primary colors
</div>
```

## Customization

### Custom Themes

You can create custom themes by overriding CSS variables:

```css
:root {
  --primary: 59 130 246; /* RGB values */
  --secondary: 100 116 139;
  --accent: 245 158 11;
  /* ... other colors */
}

[data-theme="custom"] {
  --primary: 168 85 247; /* Purple theme */
  --secondary: 236 72 153;
  --accent: 34 197 94;
}
```

### Component Customization

All components can be further customized using standard Tailwind classes:

```html
<button class="btn btn-primary rounded-full px-8 py-4 text-lg shadow-2xl">
  Custom styled button
</button>
```

## React Integration

Sparky UI works seamlessly with React and other frameworks:

```jsx
import React, { useState } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', darkMode ? '' : 'dark');
  };

  return (
    <button className="btn btn-ghost" onClick={toggleTheme}>
      {darkMode ? '🌞' : '🌙'}
    </button>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-base-100">
      <nav className="navbar">
        <div className="navbar-brand">My App</div>
        <ThemeToggle />
      </nav>
      
      <div className="hero">
        <div className="hero-content text-center">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-4xl">Welcome to Sparky UI</h1>
              <p>Modern components for modern apps</p>
              <div className="card-actions">
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Browser Support

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

## Contributing

We welcome contributions! Please see our contributing guidelines for more information.

## License

MIT License - see LICENSE file for details.

---

Made with ❤️ by the Sparky UI team