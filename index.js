const plugin = require('tailwindcss/plugin');

const themes = {
  light: {
    'primary': '#3b82f6',
    'primary-content': '#ffffff',
    'secondary': '#64748b',
    'secondary-content': '#ffffff',
    'accent': '#f59e0b',
    'accent-content': '#ffffff',
    'neutral': '#374151',
    'neutral-content': '#ffffff',
    'base-100': '#ffffff',
    'base-200': '#f8fafc',
    'base-300': '#e2e8f0',
    'base-content': '#1f2937',
    'info': '#0ea5e9',
    'info-content': '#ffffff',
    'success': '#10b981',
    'success-content': '#ffffff',
    'warning': '#f59e0b',
    'warning-content': '#ffffff',
    'error': '#ef4444',
    'error-content': '#ffffff',
  },
  dark: {
    'primary': '#60a5fa',
    'primary-content': '#1e3a8a',
    'secondary': '#94a3b8',
    'secondary-content': '#1e293b',
    'accent': '#fbbf24',
    'accent-content': '#92400e',
    'neutral': '#374151',
    'neutral-content': '#f3f4f6',
    'base-100': '#1f2937',
    'base-200': '#111827',
    'base-300': '#374151',
    'base-content': '#f9fafb',
    'info': '#38bdf8',
    'info-content': '#0c4a6e',
    'success': '#34d399',
    'success-content': '#064e3b',
    'warning': '#fbbf24',
    'warning-content': '#92400e',
    'error': '#f87171',
    'error-content': '#7f1d1d',
  }
};

const sparkUI = plugin(function({ addBase, addComponents, addUtilities, theme }) {
  // Base styles for theme variables
  addBase({
    ':root': {
      ...Object.entries(themes.light).reduce((acc, [key, value]) => {
        acc[`--${key}`] = value;
        return acc;
      }, {})
    },
    '[data-theme="dark"]': {
      ...Object.entries(themes.dark).reduce((acc, [key, value]) => {
        acc[`--${key}`] = value;
        return acc;
      }, {})
    },
    '@media (prefers-color-scheme: dark)': {
      ':root': {
        ...Object.entries(themes.dark).reduce((acc, [key, value]) => {
          acc[`--${key}`] = value;
          return acc;
        }, {})
      }
    },
    '*': {
      'box-sizing': 'border-box',
    },
    'html': {
      'scroll-behavior': 'smooth',
    },
    'body': {
      'font-family': 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      'line-height': '1.6',
    }
  });

  // Button components
  addComponents({
    '.btn': {
      'display': 'inline-flex',
      'align-items': 'center',
      'justify-content': 'center',
      'gap': '0.5rem',
      'padding': '0.75rem 1.5rem',
      'font-size': '0.875rem',
      'font-weight': '500',
      'line-height': '1.25rem',
      'border-radius': '0.5rem',
      'border': '1px solid transparent',
      'cursor': 'pointer',
      'transition': 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      'text-decoration': 'none',
      'user-select': 'none',
      'white-space': 'nowrap',
      'background-color': 'rgb(var(--neutral) / 1)',
      'color': 'rgb(var(--neutral-content) / 1)',
      '&:hover': {
        'transform': 'translateY(-1px)',
        'box-shadow': '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'background-color': 'rgb(var(--neutral) / 0.9)',
      },
      '&:active': {
        'transform': 'translateY(0)',
        'box-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      '&:disabled': {
        'opacity': '0.5',
        'cursor': 'not-allowed',
        'transform': 'none',
        'box-shadow': 'none',
      }
    },
    '.btn-primary': {
      'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--primary) / 0.8))',
      'color': 'rgb(var(--primary-content) / 1)',
      '&:hover': {
        'background': 'linear-gradient(135deg, rgb(var(--primary) / 0.9), rgb(var(--primary) / 0.7))',
      }
    },
    '.btn-secondary': {
      'background': 'linear-gradient(135deg, rgb(var(--secondary) / 1), rgb(var(--secondary) / 0.8))',
      'color': 'rgb(var(--secondary-content) / 1)',
      '&:hover': {
        'background': 'linear-gradient(135deg, rgb(var(--secondary) / 0.9), rgb(var(--secondary) / 0.7))',
      }
    },
    '.btn-accent': {
      'background': 'linear-gradient(135deg, rgb(var(--accent) / 1), rgb(var(--accent) / 0.8))',
      'color': 'rgb(var(--accent-content) / 1)',
      '&:hover': {
        'background': 'linear-gradient(135deg, rgb(var(--accent) / 0.9), rgb(var(--accent) / 0.7))',
      }
    },
    '.btn-ghost': {
      'background-color': 'transparent',
      'border': '1px solid rgb(var(--base-300) / 1)',
      'color': 'rgb(var(--base-content) / 1)',
      '&:hover': {
        'background-color': 'rgb(var(--base-200) / 1)',
        'border-color': 'rgb(var(--base-content) / 0.2)',
      }
    },
    '.btn-outline': {
      'background-color': 'transparent',
      'border': '1px solid rgb(var(--primary) / 1)',
      'color': 'rgb(var(--primary) / 1)',
      '&:hover': {
        'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--primary) / 0.8))',
        'color': 'rgb(var(--primary-content) / 1)',
      }
    },
    '.btn-sm': {
      'padding': '0.5rem 1rem',
      'font-size': '0.75rem',
    },
    '.btn-lg': {
      'padding': '1rem 2rem',
      'font-size': '1rem',
    },
    '.btn-xl': {
      'padding': '1.25rem 2.5rem',
      'font-size': '1.125rem',
    }
  });

  // Card components
  addComponents({
    '.card': {
      'background-color': 'rgb(var(--base-100) / 1)',
      'border-radius': '1rem',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'overflow': 'hidden',
      'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      'backdrop-filter': 'blur(10px)',
      'box-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      '&:hover': {
        'transform': 'translateY(-4px)',
        'box-shadow': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'border-color': 'rgb(var(--primary) / 0.3)',
      }
    },
    '.card-body': {
      'padding': '2rem',
    },
    '.card-title': {
      'font-size': '1.25rem',
      'font-weight': '600',
      'line-height': '1.75rem',
      'color': 'rgb(var(--base-content) / 1)',
      'margin-bottom': '0.5rem',
    },
    '.card-actions': {
      'display': 'flex',
      'gap': '0.75rem',
      'margin-top': '1.5rem',
    },
    '.card-compact .card-body': {
      'padding': '1rem',
    },
    '.card-bordered': {
      'border': '1px solid rgb(var(--base-300) / 1)',
    }
  });

  // Hero components
  addComponents({
    '.hero': {
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'min-height': '100vh',
      'position': 'relative',
      'background': 'linear-gradient(135deg, rgb(var(--base-200) / 1), rgb(var(--base-100) / 1))',
    },
    '.hero-content': {
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'max-width': '1200px',
      'margin': '0 auto',
      'padding': '2rem',
      'gap': '2rem',
      'flex-wrap': 'wrap',
    },
    '.hero-overlay': {
      'position': 'absolute',
      'inset': '0',
      'background-color': 'rgb(0 0 0 / 0.5)',
      'backdrop-filter': 'blur(2px)',
    }
  });

  // Form components
  addComponents({
    '.input': {
      'display': 'flex',
      'width': '100%',
      'padding': '0.75rem 1rem',
      'font-size': '0.875rem',
      'line-height': '1.25rem',
      'border-radius': '0.5rem',
      'border': '1px solid rgb(var(--base-300) / 1)',
      'background-color': 'rgb(var(--base-100) / 1)',
      'color': 'rgb(var(--base-content) / 1)',
      'transition': 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:focus': {
        'outline': 'none',
        'border-color': 'rgb(var(--primary) / 1)',
        'box-shadow': '0 0 0 3px rgb(var(--primary) / 0.1)',
      },
      '&::placeholder': {
        'color': 'rgb(var(--base-content) / 0.5)',
      }
    },
    '.label': {
      'display': 'block',
      'font-size': '0.875rem',
      'font-weight': '500',
      'color': 'rgb(var(--base-content) / 0.8)',
      'margin-bottom': '0.5rem',
    },
    '.fieldset': {
      'display': 'flex',
      'flex-direction': 'column',
      'gap': '1rem',
      'border': 'none',
      'padding': '0',
      'margin': '0',
    }
  });

  // Navigation components
  addComponents({
    '.navbar': {
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'space-between',
      'padding': '1rem 2rem',
      'background-color': 'rgb(var(--base-100) / 0.8)',
      'backdrop-filter': 'blur(10px)',
      'border-bottom': '1px solid rgb(var(--base-300) / 0.2)',
      'position': 'sticky',
      'top': '0',
      'z-index': '50',
    },
    '.navbar-brand': {
      'font-size': '1.25rem',
      'font-weight': '700',
      'color': 'rgb(var(--base-content) / 1)',
      'text-decoration': 'none',
    },
    '.navbar-nav': {
      'display': 'flex',
      'align-items': 'center',
      'gap': '2rem',
      'list-style': 'none',
      'margin': '0',
      'padding': '0',
    },
    '.navbar-link': {
      'color': 'rgb(var(--base-content) / 0.8)',
      'text-decoration': 'none',
      'font-weight': '500',
      'transition': 'color 0.2s',
      '&:hover': {
        'color': 'rgb(var(--primary) / 1)',
      }
    }
  });

  // Chat Bubble components
  addComponents({
    '.chat': {
      'display': 'flex',
      'flex-direction': 'column',
      'gap': '1rem',
    },
    '.chat-bubble': {
      'position': 'relative',
      'max-width': '70%',
      'padding': '0.75rem 1rem',
      'border-radius': '1.5rem',
      'background-color': 'rgb(var(--base-200) / 1)',
      'color': 'rgb(var(--base-content) / 1)',
      'font-size': '0.875rem',
      'line-height': '1.5',
      'word-wrap': 'break-word',
      'backdrop-filter': 'blur(10px)',
      'box-shadow': '0 1px 3px rgb(0 0 0 / 0.1)',
      'transition': 'all 0.2s ease',
      '&:hover': {
        'transform': 'scale(1.02)',
        'box-shadow': '0 4px 12px rgb(0 0 0 / 0.15)',
      }
    },
    '.chat-bubble-start': {
      'align-self': 'flex-start',
      'border-bottom-left-radius': '0.25rem',
      '&::before': {
        'content': '""',
        'position': 'absolute',
        'left': '-6px',
        'bottom': '0',
        'width': '0',
        'height': '0',
        'border-style': 'solid',
        'border-width': '0 12px 12px 0',
        'border-color': 'transparent rgb(var(--base-200) / 1) transparent transparent',
      }
    },
    '.chat-bubble-end': {
      'align-self': 'flex-end',
      'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--primary) / 0.8))',
      'color': 'rgb(var(--primary-content) / 1)',
      'border-bottom-right-radius': '0.25rem',
      '&::before': {
        'content': '""',
        'position': 'absolute',
        'right': '-6px',
        'bottom': '0',
        'width': '0',
        'height': '0',
        'border-style': 'solid',
        'border-width': '0 0 12px 12px',
        'border-color': 'transparent transparent rgb(var(--primary) / 1) transparent',
      }
    }
  });

  // Accordion components
  addComponents({
    '.accordion': {
      'border-radius': '0.75rem',
      'overflow': 'hidden',
      'background-color': 'rgb(var(--base-100) / 1)',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'backdrop-filter': 'blur(10px)',
    },
    '.accordion-item': {
      'border-bottom': '1px solid rgb(var(--base-300) / 0.1)',
      '&:last-child': {
        'border-bottom': 'none',
      }
    },
    '.accordion-header': {
      'padding': '1.25rem 1.5rem',
      'background-color': 'transparent',
      'border': 'none',
      'width': '100%',
      'text-align': 'left',
      'font-size': '1rem',
      'font-weight': '500',
      'color': 'rgb(var(--base-content) / 1)',
      'cursor': 'pointer',
      'transition': 'all 0.2s ease',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'space-between',
      '&:hover': {
        'background-color': 'rgb(var(--base-200) / 0.5)',
      }
    },
    '.accordion-content': {
      'padding': '0 1.5rem 1.25rem',
      'color': 'rgb(var(--base-content) / 0.8)',
      'line-height': '1.6',
      'max-height': '0',
      'overflow': 'hidden',
      'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.accordion-content.active': {
      'max-height': '1000px',
      'padding': '1.25rem 1.5rem',
    }
  });

  // Modal components
  addComponents({
    '.modal': {
      'position': 'fixed',
      'inset': '0',
      'z-index': '999',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'opacity': '0',
      'visibility': 'hidden',
      'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.modal-overlay': {
      'position': 'absolute',
      'inset': '0',
      'background-color': 'rgb(0 0 0 / 0.5)',
      'backdrop-filter': 'blur(4px)',
    },
    '.modal-content': {
      'position': 'relative',
      'background-color': 'rgb(var(--base-100) / 1)',
      'border-radius': '1rem',
      'max-width': '90vw',
      'max-height': '90vh',
      'overflow': 'auto',
      'box-shadow': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      'backdrop-filter': 'blur(20px)',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'transform': 'scale(0.95)',
      'transition': 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.modal.modal-open': {
      'opacity': '1',
      'visibility': 'visible',
    },
    '.modal.modal-open .modal-content': {
      'transform': 'scale(1)',
    }
  });

  // Tabs components
  addComponents({
    '.tabs': {
      'display': 'flex',
      'border-bottom': '2px solid rgb(var(--base-300) / 0.2)',
    },
    '.tab': {
      'padding': '0.75rem 1.5rem',
      'font-size': '0.875rem',
      'font-weight': '500',
      'color': 'rgb(var(--base-content) / 0.6)',
      'background-color': 'transparent',
      'border': 'none',
      'cursor': 'pointer',
      'transition': 'all 0.2s ease',
      'position': 'relative',
      '&:hover': {
        'color': 'rgb(var(--base-content) / 0.8)',
      }
    },
    '.tab.tab-active': {
      'color': 'rgb(var(--primary) / 1)',
      '&::after': {
        'content': '""',
        'position': 'absolute',
        'bottom': '-2px',
        'left': '0',
        'right': '0',
        'height': '2px',
        'background': 'linear-gradient(90deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
      }
    },
    '.tab-content': {
      'padding': '1.5rem 0',
      'display': 'none',
    },
    '.tab-content.active': {
      'display': 'block',
      'animation': 'fadeIn 0.3s ease',
    }
  });

  // Dropdown components
  addComponents({
    '.dropdown': {
      'position': 'relative',
      'display': 'inline-block',
    },
    '.dropdown-content': {
      'position': 'absolute',
      'top': '100%',
      'left': '0',
      'min-width': '12rem',
      'background-color': 'rgb(var(--base-100) / 1)',
      'border-radius': '0.75rem',
      'box-shadow': '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      'backdrop-filter': 'blur(20px)',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'padding': '0.5rem 0',
      'z-index': '50',
      'opacity': '0',
      'visibility': 'hidden',
      'transform': 'translateY(-0.5rem)',
      'transition': 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.dropdown.dropdown-open .dropdown-content': {
      'opacity': '1',
      'visibility': 'visible',
      'transform': 'translateY(0)',
    },
    '.dropdown-item': {
      'display': 'block',
      'padding': '0.75rem 1rem',
      'color': 'rgb(var(--base-content) / 0.8)',
      'text-decoration': 'none',
      'transition': 'all 0.15s ease',
      '&:hover': {
        'background-color': 'rgb(var(--base-200) / 0.5)',
        'color': 'rgb(var(--primary) / 1)',
      }
    }
  });

  // Badge components
  addComponents({
    '.badge': {
      'display': 'inline-flex',
      'align-items': 'center',
      'padding': '0.25rem 0.75rem',
      'font-size': '0.75rem',
      'font-weight': '500',
      'border-radius': '9999px',
      'background-color': 'rgb(var(--base-200) / 1)',
      'color': 'rgb(var(--base-content) / 1)',
      'border': '1px solid rgb(var(--base-300) / 0.3)',
    },
    '.badge-primary': {
      'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--primary) / 0.8))',
      'color': 'rgb(var(--primary-content) / 1)',
      'border': '1px solid rgb(var(--primary) / 0.3)',
    },
    '.badge-success': {
      'background': 'linear-gradient(135deg, rgb(var(--success) / 1), rgb(var(--success) / 0.8))',
      'color': 'rgb(var(--success-content) / 1)',
      'border': '1px solid rgb(var(--success) / 0.3)',
    },
    '.badge-warning': {
      'background': 'linear-gradient(135deg, rgb(var(--warning) / 1), rgb(var(--warning) / 0.8))',
      'color': 'rgb(var(--warning-content) / 1)',
      'border': '1px solid rgb(var(--warning) / 0.3)',
    },
    '.badge-error': {
      'background': 'linear-gradient(135deg, rgb(var(--error) / 1), rgb(var(--error) / 0.8))',
      'color': 'rgb(var(--error-content) / 1)',
      'border': '1px solid rgb(var(--error) / 0.3)',
    },
    '.badge-lg': {
      'padding': '0.5rem 1rem',
      'font-size': '0.875rem',
    },
    '.badge-sm': {
      'padding': '0.125rem 0.5rem',
      'font-size': '0.625rem',
    }
  });

  // Progress components
  addComponents({
    '.progress': {
      'width': '100%',
      'height': '0.5rem',
      'background-color': 'rgb(var(--base-300) / 1)',
      'border-radius': '9999px',
      'overflow': 'hidden',
      'position': 'relative',
    },
    '.progress-bar': {
      'height': '100%',
      'background': 'linear-gradient(90deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
      'border-radius': 'inherit',
      'transition': 'width 0.3s ease',
      'position': 'relative',
      '&::after': {
        'content': '""',
        'position': 'absolute',
        'inset': '0',
        'background': 'linear-gradient(90deg, transparent, rgb(255 255 255 / 0.2), transparent)',
        'animation': 'shimmer 2s infinite',
      }
    },
    '.progress-lg': {
      'height': '1rem',
    },
    '.progress-sm': {
      'height': '0.25rem',
    },
    '.loading': {
      'display': 'inline-block',
      'width': '1.25rem',
      'height': '1.25rem',
      'border': '2px solid rgb(var(--base-300) / 1)',
      'border-top-color': 'rgb(var(--primary) / 1)',
      'border-radius': '50%',
      'animation': 'spin 1s linear infinite',
    },
    '.loading-lg': {
      'width': '2rem',
      'height': '2rem',
    },
    '.loading-sm': {
      'width': '1rem',
      'height': '1rem',
    }
  });

  // Toast components
  addComponents({
    '.toast': {
      'position': 'fixed',
      'top': '1rem',
      'right': '1rem',
      'z-index': '1000',
      'max-width': '20rem',
      'padding': '1rem 1.25rem',
      'background-color': 'rgb(var(--base-100) / 0.95)',
      'backdrop-filter': 'blur(20px)',
      'border-radius': '0.75rem',
      'box-shadow': '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'transform': 'translateX(100%)',
      'transition': 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.toast.toast-show': {
      'transform': 'translateX(0)',
    },
    '.toast-success': {
      'border-left': '4px solid rgb(var(--success) / 1)',
    },
    '.toast-error': {
      'border-left': '4px solid rgb(var(--error) / 1)',
    },
    '.toast-warning': {
      'border-left': '4px solid rgb(var(--warning) / 1)',
    },
    '.toast-info': {
      'border-left': '4px solid rgb(var(--info) / 1)',
    }
  });

  // Layout Grid components
  addComponents({
    '.grid-layout': {
      'display': 'grid',
      'gap': '1.5rem',
    },
    '.grid-cols-auto': {
      'grid-template-columns': 'repeat(auto-fit, minmax(250px, 1fr))',
    },
    '.grid-masonry': {
      'columns': '3',
      'column-gap': '1.5rem',
      'column-fill': 'balance',
    },
    '.grid-masonry > *': {
      'break-inside': 'avoid',
      'margin-bottom': '1.5rem',
    },
    '.section': {
      'padding': '4rem 0',
    },
    '.section-sm': {
      'padding': '2rem 0',
    },
    '.section-lg': {
      'padding': '6rem 0',
    },
    '.container': {
      'max-width': '1200px',
      'margin': '0 auto',
      'padding': '0 1rem',
    }
  });

  // Avatar components
  addComponents({
    '.avatar': {
      'display': 'inline-flex',
      'align-items': 'center',
      'justify-content': 'center',
      'overflow': 'hidden',
      'border-radius': '50%',
      'background-color': 'rgb(var(--base-200) / 1)',
      'width': '2.5rem',
      'height': '2.5rem',
      'border': '2px solid rgb(var(--base-100) / 1)',
      'box-shadow': '0 0 0 1px rgb(var(--base-300) / 0.3)',
    },
    '.avatar img': {
      'width': '100%',
      'height': '100%',
      'object-fit': 'cover',
    },
    '.avatar-sm': {
      'width': '2rem',
      'height': '2rem',
    },
    '.avatar-lg': {
      'width': '3.5rem',
      'height': '3.5rem',
    },
    '.avatar-xl': {
      'width': '5rem',
      'height': '5rem',
    },
    '.avatar-group': {
      'display': 'flex',
      'align-items': 'center',
    },
    '.avatar-group .avatar': {
      'margin-left': '-0.5rem',
      'border': '3px solid rgb(var(--base-100) / 1)',
    },
    '.avatar-group .avatar:first-child': {
      'margin-left': '0',
    }
  });

  // Timeline components
  addComponents({
    '.timeline': {
      'position': 'relative',
      'padding-left': '2rem',
    },
    '.timeline::before': {
      'content': '""',
      'position': 'absolute',
      'left': '0.75rem',
      'top': '0',
      'bottom': '0',
      'width': '2px',
      'background': 'linear-gradient(180deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
    },
    '.timeline-item': {
      'position': 'relative',
      'margin-bottom': '2rem',
      'padding-left': '2rem',
    },
    '.timeline-item::before': {
      'content': '""',
      'position': 'absolute',
      'left': '-0.5rem',
      'top': '0.5rem',
      'width': '1rem',
      'height': '1rem',
      'border-radius': '50%',
      'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
      'border': '3px solid rgb(var(--base-100) / 1)',
      'box-shadow': '0 0 0 1px rgb(var(--base-300) / 0.3)',
    },
    '.timeline-content': {
      'background-color': 'rgb(var(--base-100) / 1)',
      'padding': '1.5rem',
      'border-radius': '0.75rem',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'backdrop-filter': 'blur(10px)',
      'box-shadow': '0 2px 4px rgb(0 0 0 / 0.05)',
    }
  });

  // Stats components
  addComponents({
    '.stat': {
      'background-color': 'rgb(var(--base-100) / 1)',
      'padding': '2rem',
      'border-radius': '1rem',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'text-align': 'center',
      'backdrop-filter': 'blur(10px)',
      'transition': 'all 0.3s ease',
      '&:hover': {
        'transform': 'translateY(-2px)',
        'box-shadow': '0 10px 25px -5px rgb(0 0 0 / 0.1)',
        'border-color': 'rgb(var(--primary) / 0.3)',
      }
    },
    '.stat-value': {
      'font-size': '2.25rem',
      'font-weight': '700',
      'color': 'rgb(var(--base-content) / 1)',
      'margin-bottom': '0.5rem',
      'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
      'background-clip': 'text',
      'color': 'transparent',
    },
    '.stat-title': {
      'font-size': '0.875rem',
      'font-weight': '500',
      'color': 'rgb(var(--base-content) / 0.6)',
      'text-transform': 'uppercase',
      'letter-spacing': '0.05em',
    },
    '.stat-desc': {
      'font-size': '0.75rem',
      'color': 'rgb(var(--base-content) / 0.5)',
      'margin-top': '0.5rem',
    }
  });

  // Pricing components
  addComponents({
    '.pricing-card': {
      'background-color': 'rgb(var(--base-100) / 1)',
      'border-radius': '1.5rem',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'padding': '2rem',
      'text-align': 'center',
      'backdrop-filter': 'blur(10px)',
      'transition': 'all 0.3s ease',
      'position': 'relative',
      '&:hover': {
        'transform': 'translateY(-4px)',
        'box-shadow': '0 20px 40px -10px rgb(0 0 0 / 0.15)',
        'border-color': 'rgb(var(--primary) / 0.3)',
      }
    },
    '.pricing-card-featured': {
      'border-color': 'rgb(var(--primary) / 1)',
      'box-shadow': '0 10px 25px -5px rgb(var(--primary) / 0.2)',
      '&::before': {
        'content': '"Most Popular"',
        'position': 'absolute',
        'top': '-0.75rem',
        'left': '50%',
        'transform': 'translateX(-50%)',
        'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
        'color': 'rgb(var(--primary-content) / 1)',
        'padding': '0.5rem 1.5rem',
        'border-radius': '9999px',
        'font-size': '0.75rem',
        'font-weight': '600',
      }
    },
    '.pricing-price': {
      'font-size': '3rem',
      'font-weight': '700',
      'color': 'rgb(var(--base-content) / 1)',
      'margin': '1rem 0',
    },
    '.pricing-features': {
      'list-style': 'none',
      'padding': '0',
      'margin': '2rem 0',
    },
    '.pricing-features li': {
      'padding': '0.5rem 0',
      'color': 'rgb(var(--base-content) / 0.8)',
      'position': 'relative',
      'padding-left': '1.5rem',
    },
    '.pricing-features li::before': {
      'content': '"✓"',
      'position': 'absolute',
      'left': '0',
      'color': 'rgb(var(--success) / 1)',
      'font-weight': 'bold',
    }
  });

  // Testimonial components
  addComponents({
    '.testimonial': {
      'background-color': 'rgb(var(--base-100) / 1)',
      'padding': '2rem',
      'border-radius': '1.5rem',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'backdrop-filter': 'blur(10px)',
      'position': 'relative',
      'transition': 'all 0.3s ease',
      '&:hover': {
        'transform': 'translateY(-2px)',
        'box-shadow': '0 15px 30px -10px rgb(0 0 0 / 0.1)',
      }
    },
    '.testimonial::before': {
      'content': '"""',
      'position': 'absolute',
      'top': '1rem',
      'left': '1.5rem',
      'font-size': '3rem',
      'color': 'rgb(var(--primary) / 0.3)',
      'font-family': 'serif',
      'line-height': '1',
    },
    '.testimonial-content': {
      'font-style': 'italic',
      'font-size': '1.125rem',
      'line-height': '1.7',
      'color': 'rgb(var(--base-content) / 0.8)',
      'margin-bottom': '1.5rem',
      'padding-top': '1rem',
    },
    '.testimonial-author': {
      'display': 'flex',
      'align-items': 'center',
      'gap': '1rem',
    },
    '.testimonial-author-info h4': {
      'font-weight': '600',
      'color': 'rgb(var(--base-content) / 1)',
      'margin': '0',
    },
    '.testimonial-author-info p': {
      'color': 'rgb(var(--base-content) / 0.6)',
      'font-size': '0.875rem',
      'margin': '0',
    }
  });

  // Gallery components
  addComponents({
    '.gallery': {
      'display': 'grid',
      'gap': '1rem',
      'grid-template-columns': 'repeat(auto-fit, minmax(250px, 1fr))',
    },
    '.gallery-item': {
      'position': 'relative',
      'overflow': 'hidden',
      'border-radius': '1rem',
      'aspect-ratio': '1',
      'background-color': 'rgb(var(--base-200) / 1)',
      'transition': 'all 0.3s ease',
      '&:hover': {
        'transform': 'scale(1.02)',
      }
    },
    '.gallery-item img': {
      'width': '100%',
      'height': '100%',
      'object-fit': 'cover',
      'transition': 'transform 0.3s ease',
    },
    '.gallery-item:hover img': {
      'transform': 'scale(1.1)',
    },
    '.gallery-overlay': {
      'position': 'absolute',
      'inset': '0',
      'background': 'linear-gradient(45deg, rgb(var(--primary) / 0.8), rgb(var(--accent) / 0.8))',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'opacity': '0',
      'transition': 'opacity 0.3s ease',
    },
    '.gallery-item:hover .gallery-overlay': {
      'opacity': '1',
    }
  });

  // Sidebar components
  addComponents({
    '.sidebar': {
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'height': '100vh',
      'width': '16rem',
      'background-color': 'rgb(var(--base-100) / 0.95)',
      'backdrop-filter': 'blur(20px)',
      'border-right': '1px solid rgb(var(--base-300) / 0.2)',
      'padding': '1.5rem',
      'transform': 'translateX(-100%)',
      'transition': 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      'z-index': '50',
    },
    '.sidebar.sidebar-open': {
      'transform': 'translateX(0)',
    },
    '.sidebar-nav': {
      'list-style': 'none',
      'padding': '0',
      'margin': '0',
    },
    '.sidebar-nav-item': {
      'margin-bottom': '0.5rem',
    },
    '.sidebar-nav-link': {
      'display': 'flex',
      'align-items': 'center',
      'padding': '0.75rem 1rem',
      'color': 'rgb(var(--base-content) / 0.8)',
      'text-decoration': 'none',
      'border-radius': '0.5rem',
      'transition': 'all 0.2s ease',
      '&:hover': {
        'background-color': 'rgb(var(--base-200) / 0.5)',
        'color': 'rgb(var(--primary) / 1)',
      }
    }
  });

  // Breadcrumb components
  addComponents({
    '.breadcrumb': {
      'display': 'flex',
      'align-items': 'center',
      'gap': '0.5rem',
      'font-size': '0.875rem',
    },
    '.breadcrumb-item': {
      'display': 'flex',
      'align-items': 'center',
      'gap': '0.5rem',
      'color': 'rgb(var(--base-content) / 0.6)',
    },
    '.breadcrumb-item:not(:last-child)::after': {
      'content': '"/"',
      'color': 'rgb(var(--base-content) / 0.4)',
    },
    '.breadcrumb-item:last-child': {
      'color': 'rgb(var(--base-content) / 1)',
      'font-weight': '500',
    },
    '.breadcrumb-link': {
      'color': 'inherit',
      'text-decoration': 'none',
      'transition': 'color 0.2s ease',
      '&:hover': {
        'color': 'rgb(var(--primary) / 1)',
      }
    }
  });

  // Toggle components
  addComponents({
    '.toggle': {
      'position': 'relative',
      'display': 'inline-block',
      'width': '3rem',
      'height': '1.5rem',
    },
    '.toggle input': {
      'opacity': '0',
      'width': '0',
      'height': '0',
    },
    '.toggle-slider': {
      'position': 'absolute',
      'cursor': 'pointer',
      'top': '0',
      'left': '0',
      'right': '0',
      'bottom': '0',
      'background-color': 'rgb(var(--base-300) / 1)',
      'transition': '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      'border-radius': '1.5rem',
    },
    '.toggle-slider:before': {
      'position': 'absolute',
      'content': '""',
      'height': '1.25rem',
      'width': '1.25rem',
      'left': '0.125rem',
      'bottom': '0.125rem',
      'background-color': 'white',
      'transition': '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      'border-radius': '50%',
      'box-shadow': '0 2px 4px rgb(0 0 0 / 0.1)',
    },
    '.toggle input:checked + .toggle-slider': {
      'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
    },
    '.toggle input:checked + .toggle-slider:before': {
      'transform': 'translateX(1.5rem)',
    }
  });

  // Alert components
  addComponents({
    '.alert': {
      'padding': '1rem 1.25rem',
      'border-radius': '0.75rem',
      'border': '1px solid',
      'margin-bottom': '1rem',
      'backdrop-filter': 'blur(10px)',
    },
    '.alert-info': {
      'background-color': 'rgb(var(--info) / 0.1)',
      'border-color': 'rgb(var(--info) / 0.3)',
      'color': 'rgb(var(--info) / 1)',
    },
    '.alert-success': {
      'background-color': 'rgb(var(--success) / 0.1)',
      'border-color': 'rgb(var(--success) / 0.3)',
      'color': 'rgb(var(--success) / 1)',
    },
    '.alert-warning': {
      'background-color': 'rgb(var(--warning) / 0.1)',
      'border-color': 'rgb(var(--warning) / 0.3)',
      'color': 'rgb(var(--warning) / 1)',
    },
    '.alert-error': {
      'background-color': 'rgb(var(--error) / 0.1)',
      'border-color': 'rgb(var(--error) / 0.3)',
      'color': 'rgb(var(--error) / 1)',
    }
  });

  // Footer components
  addComponents({
    '.footer': {
      'background-color': 'rgb(var(--base-200) / 1)',
      'padding': '3rem 0',
      'border-top': '1px solid rgb(var(--base-300) / 0.2)',
    },
    '.footer-content': {
      'display': 'grid',
      'grid-template-columns': 'repeat(auto-fit, minmax(250px, 1fr))',
      'gap': '2rem',
      'max-width': '1200px',
      'margin': '0 auto',
      'padding': '0 1rem',
    },
    '.footer-section h3': {
      'font-size': '1.125rem',
      'font-weight': '600',
      'margin-bottom': '1rem',
      'color': 'rgb(var(--base-content) / 1)',
    },
    '.footer-links': {
      'list-style': 'none',
      'padding': '0',
      'margin': '0',
    },
    '.footer-links li': {
      'margin-bottom': '0.5rem',
    },
    '.footer-links a': {
      'color': 'rgb(var(--base-content) / 0.7)',
      'text-decoration': 'none',
      'transition': 'color 0.2s ease',
      '&:hover': {
        'color': 'rgb(var(--primary) / 1)',
      }
    }
  });

  // Utility classes
  addUtilities({
    '.glass': {
      'background-color': 'rgb(var(--base-100) / 0.8)',
      'backdrop-filter': 'blur(10px)',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
    },
    '.gradient-primary': {
      'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
    },
    '.gradient-secondary': {
      'background': 'linear-gradient(135deg, rgb(var(--secondary) / 1), rgb(var(--primary) / 1))',
    },
    '.text-gradient': {
      'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
      'background-clip': 'text',
      'color': 'transparent',
    },
    // Animated Background Orb components
    '.orb': {
      'position': 'absolute',
      'border-radius': '50%',
      'pointer-events': 'none',
      'z-index': '-1',
      'filter': 'blur(40px)',
      'opacity': '0.3',
      'animation': 'float 8s ease-in-out infinite',
    },
    '.orb-primary': {
      'background': 'radial-gradient(circle, rgb(var(--primary) / 0.4), rgb(var(--accent) / 0.2))',
    },
    '.orb-secondary': {
      'background': 'radial-gradient(circle, rgb(var(--secondary) / 0.4), rgb(var(--info) / 0.2))',
    },
    '.orb-accent': {
      'background': 'radial-gradient(circle, rgb(var(--accent) / 0.4), rgb(var(--warning) / 0.2))',
    },
    '.orb-sm': {
      'width': '100px',
      'height': '100px',
    },
    '.orb-md': {
      'width': '200px',
      'height': '200px',
    },
    '.orb-lg': {
      'width': '300px',
      'height': '300px',
    },
    '.orb-xl': {
      'width': '400px',
      'height': '400px',
    },

    // Floating particles
    '.particles': {
      'position': 'absolute',
      'inset': '0',
      'pointer-events': 'none',
      'overflow': 'hidden',
      'z-index': '-1',
    },
    '.particle': {
      'position': 'absolute',
      'width': '4px',
      'height': '4px',
      'background': 'rgb(var(--primary) / 0.6)',
      'border-radius': '50%',
      'animation': 'particleFloat 15s linear infinite',
    },

    // Mesh gradient backgrounds
    '.mesh-gradient': {
      'background': 'radial-gradient(at 40% 20%, rgb(var(--primary) / 0.3) 0, transparent 50%), radial-gradient(at 80% 0%, rgb(var(--accent) / 0.3) 0, transparent 50%), radial-gradient(at 0% 50%, rgb(var(--secondary) / 0.3) 0, transparent 50%), radial-gradient(at 80% 50%, rgb(var(--info) / 0.3) 0, transparent 50%), radial-gradient(at 0% 100%, rgb(var(--success) / 0.3) 0, transparent 50%), radial-gradient(at 80% 100%, rgb(var(--warning) / 0.3) 0, transparent 50%), radial-gradient(at 0% 0%, rgb(var(--error) / 0.3) 0, transparent 50%)',
      'animation': 'meshShift 20s ease-in-out infinite',
    },

    // Background patterns
    '.bg-dots': {
      'background-image': 'radial-gradient(rgb(var(--base-content) / 0.1) 1px, transparent 1px)',
      'background-size': '20px 20px',
    },
    '.bg-grid': {
      'background-image': 'linear-gradient(rgb(var(--base-content) / 0.1) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--base-content) / 0.1) 1px, transparent 1px)',
      'background-size': '20px 20px',
    },
    '.bg-diagonal': {
      'background-image': 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgb(var(--base-content) / 0.05) 10px, rgb(var(--base-content) / 0.05) 20px)',
    },

    // Tooltip components
    '.tooltip': {
      'position': 'relative',
      'display': 'inline-block',
    },
    '.tooltip-content': {
      'position': 'absolute',
      'bottom': '100%',
      'left': '50%',
      'transform': 'translateX(-50%)',
      'margin-bottom': '8px',
      'padding': '8px 12px',
      'background-color': 'rgb(var(--neutral) / 1)',
      'color': 'rgb(var(--neutral-content) / 1)',
      'font-size': '0.875rem',
      'border-radius': '6px',
      'white-space': 'nowrap',
      'opacity': '0',
      'visibility': 'hidden',
      'transition': 'all 0.2s ease',
      'z-index': '1000',
      'box-shadow': '0 4px 14px 0 rgb(0 0 0 / 0.1)',
    },
    '.tooltip:hover .tooltip-content': {
      'opacity': '1',
      'visibility': 'visible',
    },
    '.tooltip-content::after': {
      'content': '""',
      'position': 'absolute',
      'top': '100%',
      'left': '50%',
      'transform': 'translateX(-50%)',
      'border': '4px solid transparent',
      'border-top-color': 'rgb(var(--neutral) / 1)',
    },

    // Popover components
    '.popover': {
      'position': 'relative',
      'display': 'inline-block',
    },
    '.popover-content': {
      'position': 'absolute',
      'top': '100%',
      'left': '0',
      'margin-top': '8px',
      'padding': '1rem',
      'min-width': '200px',
      'background-color': 'rgb(var(--base-100) / 1)',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'border-radius': '8px',
      'box-shadow': '0 10px 25px -5px rgb(0 0 0 / 0.1)',
      'backdrop-filter': 'blur(20px)',
      'opacity': '0',
      'visibility': 'hidden',
      'transform': 'translateY(-10px)',
      'transition': 'all 0.2s ease',
      'z-index': '1000',
    },
    '.popover.popover-open .popover-content': {
      'opacity': '1',
      'visibility': 'visible',
      'transform': 'translateY(0)',
    },

    // Skeleton loading components
    '.skeleton': {
      'background': 'linear-gradient(90deg, rgb(var(--base-200) / 1), rgb(var(--base-300) / 1), rgb(var(--base-200) / 1))',
      'background-size': '200% 100%',
      'animation': 'skeletonLoading 1.5s infinite',
      'border-radius': '4px',
    },
    '.skeleton-text': {
      'height': '1rem',
      'margin-bottom': '0.5rem',
    },
    '.skeleton-title': {
      'height': '1.5rem',
      'width': '60%',
      'margin-bottom': '1rem',
    },
    '.skeleton-avatar': {
      'width': '3rem',
      'height': '3rem',
      'border-radius': '50%',
    },
    '.skeleton-button': {
      'height': '2.5rem',
      'width': '6rem',
      'border-radius': '0.5rem',
    },

    // Enhanced loading spinners
    '.spinner-dots': {
      'display': 'inline-flex',
      'align-items': 'center',
      'gap': '4px',
    },
    '.spinner-dots::before, .spinner-dots::after, .spinner-dot': {
      'content': '""',
      'width': '8px',
      'height': '8px',
      'border-radius': '50%',
      'background-color': 'rgb(var(--primary) / 1)',
      'animation': 'dotBounce 1.4s ease-in-out infinite both',
    },
    '.spinner-dots::before': {
      'animation-delay': '-0.32s',
    },
    '.spinner-dots::after': {
      'animation-delay': '-0.16s',
    },
    '.spinner-pulse': {
      'width': '2rem',
      'height': '2rem',
      'border-radius': '50%',
      'background-color': 'rgb(var(--primary) / 1)',
      'animation': 'pulse 2s ease-in-out infinite',
    },
    '.spinner-ring': {
      'display': 'inline-block',
      'width': '2rem',
      'height': '2rem',
      'border': '3px solid rgb(var(--base-300) / 1)',
      'border-radius': '50%',
      'border-top-color': 'rgb(var(--primary) / 1)',
      'animation': 'spin 1s ease-in-out infinite',
    },

    // Notification banners
    '.banner': {
      'padding': '1rem 1.5rem',
      'border-radius': '0',
      'border': 'none',
      'backdrop-filter': 'blur(20px)',
      'position': 'relative',
      'overflow': 'hidden',
    },
    '.banner::before': {
      'content': '""',
      'position': 'absolute',
      'top': '0',
      'left': '0',
      'right': '0',
      'height': '3px',
      'background': 'linear-gradient(90deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
    },
    '.banner-success': {
      'background-color': 'rgb(var(--success) / 0.1)',
      'color': 'rgb(var(--success) / 1)',
    },
    '.banner-warning': {
      'background-color': 'rgb(var(--warning) / 0.1)',
      'color': 'rgb(var(--warning) / 1)',
    },
    '.banner-error': {
      'background-color': 'rgb(var(--error) / 0.1)',
      'color': 'rgb(var(--error) / 1)',
    },
    '.banner-info': {
      'background-color': 'rgb(var(--info) / 0.1)',
      'color': 'rgb(var(--info) / 1)',
    },

    // Step progress indicators
    '.steps': {
      'display': 'flex',
      'align-items': 'center',
      'gap': '1rem',
    },
    '.step': {
      'display': 'flex',
      'align-items': 'center',
      'gap': '0.5rem',
      'position': 'relative',
    },
    '.step-circle': {
      'width': '2rem',
      'height': '2rem',
      'border-radius': '50%',
      'background-color': 'rgb(var(--base-300) / 1)',
      'color': 'rgb(var(--base-content) / 1)',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'font-weight': '600',
      'font-size': '0.875rem',
      'transition': 'all 0.3s ease',
    },
    '.step-active .step-circle': {
      'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
      'color': 'rgb(var(--primary-content) / 1)',
      'transform': 'scale(1.1)',
    },
    '.step-completed .step-circle': {
      'background': 'linear-gradient(135deg, rgb(var(--success) / 1), rgb(var(--success) / 0.8))',
      'color': 'rgb(var(--success-content) / 1)',
    },
    '.step-connector': {
      'flex': '1',
      'height': '2px',
      'background-color': 'rgb(var(--base-300) / 1)',
      'position': 'relative',
    },
    '.step-completed + .step .step-connector::before': {
      'content': '""',
      'position': 'absolute',
      'top': '0',
      'left': '0',
      'right': '0',
      'bottom': '0',
      'background': 'linear-gradient(90deg, rgb(var(--success) / 1), rgb(var(--primary) / 1))',
    },

    // Pagination components
    '.pagination': {
      'display': 'flex',
      'align-items': 'center',
      'gap': '0.25rem',
    },
    '.pagination-item': {
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'min-width': '2.5rem',
      'height': '2.5rem',
      'padding': '0.5rem',
      'border': '1px solid rgb(var(--base-300) / 1)',
      'border-radius': '0.5rem',
      'background-color': 'rgb(var(--base-100) / 1)',
      'color': 'rgb(var(--base-content) / 0.7)',
      'text-decoration': 'none',
      'transition': 'all 0.2s ease',
      'cursor': 'pointer',
    },
    '.pagination-item:hover': {
      'background-color': 'rgb(var(--base-200) / 1)',
      'color': 'rgb(var(--base-content) / 1)',
      'transform': 'translateY(-1px)',
    },
    '.pagination-item.active': {
      'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
      'color': 'rgb(var(--primary-content) / 1)',
      'border-color': 'transparent',
    },
    '.pagination-item.disabled': {
      'opacity': '0.5',
      'cursor': 'not-allowed',
      'pointer-events': 'none',
    },

    // Enhanced search components
    '.search': {
      'position': 'relative',
      'display': 'flex',
      'align-items': 'center',
    },
    '.search-input': {
      'width': '100%',
      'padding': '0.75rem 1rem 0.75rem 3rem',
      'font-size': '0.875rem',
      'line-height': '1.25rem',
      'border-radius': '0.75rem',
      'border': '1px solid rgb(var(--base-300) / 1)',
      'background-color': 'rgb(var(--base-100) / 1)',
      'color': 'rgb(var(--base-content) / 1)',
      'transition': 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.search-input:focus': {
      'outline': 'none',
      'border-color': 'rgb(var(--primary) / 1)',
      'box-shadow': '0 0 0 3px rgb(var(--primary) / 0.1)',
    },
    '.search-icon': {
      'position': 'absolute',
      'left': '1rem',
      'color': 'rgb(var(--base-content) / 0.5)',
      'z-index': '10',
    },
    '.search-suggestions': {
      'position': 'absolute',
      'top': '100%',
      'left': '0',
      'right': '0',
      'margin-top': '0.25rem',
      'background-color': 'rgb(var(--base-100) / 1)',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'border-radius': '0.75rem',
      'box-shadow': '0 10px 25px -5px rgb(0 0 0 / 0.1)',
      'backdrop-filter': 'blur(20px)',
      'z-index': '50',
      'max-height': '200px',
      'overflow-y': 'auto',
    },
    '.search-suggestion': {
      'padding': '0.75rem 1rem',
      'cursor': 'pointer',
      'transition': 'background-color 0.2s ease',
    },
    '.search-suggestion:hover': {
      'background-color': 'rgb(var(--base-200) / 0.5)',
    },

    // Table components
    '.table': {
      'width': '100%',
      'border-collapse': 'collapse',
      'background-color': 'rgb(var(--base-100) / 1)',
      'border-radius': '0.75rem',
      'overflow': 'hidden',
      'box-shadow': '0 1px 3px rgb(0 0 0 / 0.1)',
    },
    '.table th': {
      'padding': '0.75rem 1rem',
      'text-align': 'left',
      'font-weight': '600',
      'background-color': 'rgb(var(--base-200) / 1)',
      'color': 'rgb(var(--base-content) / 1)',
      'border-bottom': '1px solid rgb(var(--base-300) / 0.2)',
    },
    '.table td': {
      'padding': '0.75rem 1rem',
      'border-bottom': '1px solid rgb(var(--base-300) / 0.1)',
    },
    '.table tr:hover': {
      'background-color': 'rgb(var(--base-200) / 0.3)',
    },
    '.table-sortable th': {
      'cursor': 'pointer',
      'transition': 'background-color 0.2s ease',
    },
    '.table-sortable th:hover': {
      'background-color': 'rgb(var(--base-300) / 0.5)',
    },

    // Rating components
    '.rating': {
      'display': 'flex',
      'align-items': 'center',
      'gap': '0.25rem',
    },
    '.rating-star': {
      'width': '1.25rem',
      'height': '1.25rem',
      'color': 'rgb(var(--base-300) / 1)',
      'cursor': 'pointer',
      'transition': 'all 0.2s ease',
    },
    '.rating-star.active': {
      'color': 'rgb(var(--warning) / 1)',
      'transform': 'scale(1.1)',
    },
    '.rating-star:hover': {
      'color': 'rgb(var(--warning) / 0.7)',
      'transform': 'scale(1.1)',
    },

    // Tag components
    '.tag': {
      'display': 'inline-flex',
      'align-items': 'center',
      'gap': '0.5rem',
      'padding': '0.25rem 0.75rem',
      'font-size': '0.75rem',
      'font-weight': '500',
      'border-radius': '9999px',
      'background-color': 'rgb(var(--base-200) / 1)',
      'color': 'rgb(var(--base-content) / 1)',
      'border': '1px solid rgb(var(--base-300) / 0.3)',
    },
    '.tag-removable': {
      'cursor': 'pointer',
      'transition': 'all 0.2s ease',
    },
    '.tag-removable:hover': {
      'background-color': 'rgb(var(--error) / 0.1)',
      'color': 'rgb(var(--error) / 1)',
      'border-color': 'rgb(var(--error) / 0.3)',
    },
    '.tag-close': {
      'width': '1rem',
      'height': '1rem',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'border-radius': '50%',
      'background-color': 'transparent',
      'transition': 'background-color 0.2s ease',
    },
    '.tag-close:hover': {
      'background-color': 'rgb(var(--error) / 0.2)',
    },

    // File upload components
    '.file-upload': {
      'position': 'relative',
      'display': 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'center',
      'padding': '2rem',
      'border': '2px dashed rgb(var(--base-300) / 1)',
      'border-radius': '0.75rem',
      'background-color': 'rgb(var(--base-100) / 1)',
      'transition': 'all 0.2s ease',
      'cursor': 'pointer',
    },
    '.file-upload:hover, .file-upload.drag-over': {
      'border-color': 'rgb(var(--primary) / 1)',
      'background-color': 'rgb(var(--primary) / 0.05)',
    },
    '.file-upload input[type="file"]': {
      'position': 'absolute',
      'inset': '0',
      'opacity': '0',
      'cursor': 'pointer',
    },
    '.file-upload-icon': {
      'font-size': '2rem',
      'color': 'rgb(var(--base-content) / 0.5)',
      'margin-bottom': '0.5rem',
    },

    // Slider components
    '.slider': {
      'position': 'relative',
      'width': '100%',
      'height': '1.5rem',
      'display': 'flex',
      'align-items': 'center',
    },
    '.slider input[type="range"]': {
      'width': '100%',
      'height': '4px',
      'background': 'rgb(var(--base-300) / 1)',
      'border-radius': '2px',
      'outline': 'none',
      'cursor': 'pointer',
      'appearance': 'none',
    },
    '.slider input[type="range"]::-webkit-slider-thumb': {
      'appearance': 'none',
      'width': '1.25rem',
      'height': '1.25rem',
      'border-radius': '50%',
      'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
      'cursor': 'pointer',
      'box-shadow': '0 2px 4px rgb(0 0 0 / 0.2)',
      'transition': 'transform 0.2s ease',
    },
    '.slider input[type="range"]::-webkit-slider-thumb:hover': {
      'transform': 'scale(1.1)',
    },

    // Enhanced checkbox and radio components
    '.checkbox': {
      'position': 'relative',
      'display': 'inline-block',
      'width': '1.25rem',
      'height': '1.25rem',
    },
    '.checkbox input[type="checkbox"]': {
      'position': 'absolute',
      'opacity': '0',
      'width': '100%',
      'height': '100%',
      'cursor': 'pointer',
    },
    '.checkbox-mark': {
      'position': 'absolute',
      'inset': '0',
      'background-color': 'rgb(var(--base-100) / 1)',
      'border': '2px solid rgb(var(--base-300) / 1)',
      'border-radius': '0.25rem',
      'transition': 'all 0.2s ease',
    },
    '.checkbox input:checked + .checkbox-mark': {
      'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
      'border-color': 'transparent',
    },
    '.checkbox-mark::after': {
      'content': '""',
      'position': 'absolute',
      'left': '4px',
      'top': '1px',
      'width': '4px',
      'height': '8px',
      'border': 'solid white',
      'border-width': '0 2px 2px 0',
      'transform': 'rotate(45deg)',
      'opacity': '0',
      'transition': 'opacity 0.2s ease',
    },
    '.checkbox input:checked + .checkbox-mark::after': {
      'opacity': '1',
    },

    '.radio': {
      'position': 'relative',
      'display': 'inline-block',
      'width': '1.25rem',
      'height': '1.25rem',
    },
    '.radio input[type="radio"]': {
      'position': 'absolute',
      'opacity': '0',
      'width': '100%',
      'height': '100%',
      'cursor': 'pointer',
    },
    '.radio-mark': {
      'position': 'absolute',
      'inset': '0',
      'background-color': 'rgb(var(--base-100) / 1)',
      'border': '2px solid rgb(var(--base-300) / 1)',
      'border-radius': '50%',
      'transition': 'all 0.2s ease',
    },
    '.radio input:checked + .radio-mark': {
      'border-color': 'rgb(var(--primary) / 1)',
    },
    '.radio-mark::after': {
      'content': '""',
      'position': 'absolute',
      'top': '50%',
      'left': '50%',
      'transform': 'translate(-50%, -50%)',
      'width': '8px',
      'height': '8px',
      'border-radius': '50%',
      'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
      'opacity': '0',
      'transition': 'opacity 0.2s ease',
    },
    '.radio input:checked + .radio-mark::after': {
      'opacity': '1',
    },

    // Select dropdown components
    '.select': {
      'position': 'relative',
      'display': 'inline-block',
      'width': '100%',
    },
    '.select-button': {
      'width': '100%',
      'padding': '0.75rem 3rem 0.75rem 1rem',
      'text-align': 'left',
      'background-color': 'rgb(var(--base-100) / 1)',
      'border': '1px solid rgb(var(--base-300) / 1)',
      'border-radius': '0.5rem',
      'cursor': 'pointer',
      'transition': 'all 0.2s ease',
    },
    '.select-button:focus': {
      'outline': 'none',
      'border-color': 'rgb(var(--primary) / 1)',
      'box-shadow': '0 0 0 3px rgb(var(--primary) / 0.1)',
    },
    '.select-arrow': {
      'position': 'absolute',
      'right': '1rem',
      'top': '50%',
      'transform': 'translateY(-50%)',
      'color': 'rgb(var(--base-content) / 0.5)',
      'transition': 'transform 0.2s ease',
    },
    '.select.open .select-arrow': {
      'transform': 'translateY(-50%) rotate(180deg)',
    },
    '.select-options': {
      'position': 'absolute',
      'top': '100%',
      'left': '0',
      'right': '0',
      'margin-top': '0.25rem',
      'background-color': 'rgb(var(--base-100) / 1)',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'border-radius': '0.5rem',
      'box-shadow': '0 10px 25px -5px rgb(0 0 0 / 0.1)',
      'backdrop-filter': 'blur(20px)',
      'z-index': '50',
      'max-height': '200px',
      'overflow-y': 'auto',
      'opacity': '0',
      'visibility': 'hidden',
      'transform': 'translateY(-10px)',
      'transition': 'all 0.2s ease',
    },
    '.select.open .select-options': {
      'opacity': '1',
      'visibility': 'visible',
      'transform': 'translateY(0)',
    },
    '.select-option': {
      'padding': '0.75rem 1rem',
      'cursor': 'pointer',
      'transition': 'background-color 0.2s ease',
    },
    '.select-option:hover, .select-option.selected': {
      'background-color': 'rgb(var(--primary) / 0.1)',
      'color': 'rgb(var(--primary) / 1)',
    },

    // Carousel components
    '.carousel': {
      'position': 'relative',
      'overflow': 'hidden',
      'border-radius': '1rem',
    },
    '.carousel-container': {
      'display': 'flex',
      'transition': 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.carousel-slide': {
      'min-width': '100%',
      'flex-shrink': '0',
    },
    '.carousel-nav': {
      'position': 'absolute',
      'top': '50%',
      'transform': 'translateY(-50%)',
      'width': '3rem',
      'height': '3rem',
      'background: 'rgb(var(--base-100) / 0.9)',
      'backdrop-filter': 'blur(10px)',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'border-radius': '50%',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'cursor': 'pointer',
      'transition': 'all 0.2s ease',
      'z-index': '10',
    },
    '.carousel-nav:hover': {
      'background': 'rgb(var(--base-100) / 1)',
      'transform': 'translateY(-50%) scale(1.05)',
    },
    '.carousel-prev': {
      'left': '1rem',
    },
    '.carousel-next': {
      'right': '1rem',
    },
    '.carousel-indicators': {
      'position': 'absolute',
      'bottom': '1rem',
      'left': '50%',
      'transform': 'translateX(-50%)',
      'display': 'flex',
      'gap': '0.5rem',
    },
    '.carousel-indicator': {
      'width': '0.75rem',
      'height': '0.75rem',
      'border-radius': '50%',
      'background-color': 'rgb(var(--base-100) / 0.5)',
      'cursor': 'pointer',
      'transition': 'all 0.2s ease',
    },
    '.carousel-indicator.active': {
      'background-color': 'rgb(var(--primary) / 1)',
      'transform': 'scale(1.2)',
    },

    // Floating Action Button
    '.fab': {
      'position': 'fixed',
      'bottom': '2rem',
      'right': '2rem',
      'width': '3.5rem',
      'height': '3.5rem',
      'border-radius': '50%',
      'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
      'color': 'rgb(var(--primary-content) / 1)',
      'border': 'none',
      'box-shadow': '0 8px 24px rgb(var(--primary) / 0.3)',
      'cursor': 'pointer',
      'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      'z-index': '1000',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'font-size': '1.5rem',
    },
    '.fab:hover': {
      'transform': 'scale(1.1)',
      'box-shadow': '0 12px 32px rgb(var(--primary) / 0.4)',
    },
    '.fab:active': {
      'transform': 'scale(1.05)',
    },

    // Empty state components
    '.empty-state': {
      'display': 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'center',
      'text-align': 'center',
      'padding': '4rem 2rem',
      'color': 'rgb(var(--base-content) / 0.6)',
    },
    '.empty-state-icon': {
      'font-size': '4rem',
      'margin-bottom': '1.5rem',
      'opacity': '0.5',
    },
    '.empty-state-title': {
      'font-size': '1.5rem',
      'font-weight': '600',
      'margin-bottom': '0.5rem',
      'color': 'rgb(var(--base-content) / 0.8)',
    },
    '.empty-state-description': {
      'font-size': '1rem',
      'margin-bottom': '2rem',
      'max-width': '24rem',
    },

    // Calendar and date picker components
    '.calendar': {
      'background-color': 'rgb(var(--base-100) / 1)',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'border-radius': '0.75rem',
      'padding': '1.5rem',
      'backdrop-filter': 'blur(10px)',
      'box-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    },
    '.calendar-header': {
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'space-between',
      'margin-bottom': '1rem',
    },
    '.calendar-title': {
      'font-size': '1.125rem',
      'font-weight': '600',
      'color': 'rgb(var(--base-content) / 1)',
    },
    '.calendar-nav': {
      'display': 'flex',
      'gap': '0.5rem',
    },
    '.calendar-nav-btn': {
      'width': '2rem',
      'height': '2rem',
      'border': '1px solid rgb(var(--base-300) / 1)',
      'border-radius': '0.375rem',
      'background-color': 'rgb(var(--base-100) / 1)',
      'color': 'rgb(var(--base-content) / 0.7)',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'cursor': 'pointer',
      'transition': 'all 0.2s ease',
    },
    '.calendar-nav-btn:hover': {
      'background-color': 'rgb(var(--primary) / 0.1)',
      'color': 'rgb(var(--primary) / 1)',
      'border-color': 'rgb(var(--primary) / 0.3)',
    },
    '.calendar-grid': {
      'display': 'grid',
      'grid-template-columns': 'repeat(7, 1fr)',
      'gap': '0.25rem',
    },
    '.calendar-weekday': {
      'padding': '0.5rem',
      'text-align': 'center',
      'font-size': '0.75rem',
      'font-weight': '600',
      'color': 'rgb(var(--base-content) / 0.6)',
      'text-transform': 'uppercase',
    },
    '.calendar-day': {
      'aspect-ratio': '1',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'border-radius': '0.375rem',
      'font-size': '0.875rem',
      'cursor': 'pointer',
      'transition': 'all 0.2s ease',
      'position': 'relative',
    },
    '.calendar-day:hover': {
      'background-color': 'rgb(var(--primary) / 0.1)',
      'color': 'rgb(var(--primary) / 1)',
    },
    '.calendar-day.today': {
      'background-color': 'rgb(var(--accent) / 0.2)',
      'color': 'rgb(var(--accent) / 1)',
      'font-weight': '600',
    },
    '.calendar-day.selected': {
      'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
      'color': 'rgb(var(--primary-content) / 1)',
      'font-weight': '600',
    },
    '.calendar-day.other-month': {
      'color': 'rgb(var(--base-content) / 0.3)',
    },
    '.datepicker': {
      'position': 'relative',
      'display': 'inline-block',
      'width': '100%',
    },
    '.datepicker-input': {
      'width': '100%',
      'padding': '0.75rem 3rem 0.75rem 1rem',
      'font-size': '0.875rem',
      'border-radius': '0.5rem',
      'border': '1px solid rgb(var(--base-300) / 1)',
      'background-color': 'rgb(var(--base-100) / 1)',
      'color': 'rgb(var(--base-content) / 1)',
      'cursor': 'pointer',
      'transition': 'all 0.2s ease',
    },
    '.datepicker-input:focus': {
      'outline': 'none',
      'border-color': 'rgb(var(--primary) / 1)',
      'box-shadow': '0 0 0 3px rgb(var(--primary) / 0.1)',
    },
    '.datepicker-icon': {
      'position': 'absolute',
      'right': '1rem',
      'top': '50%',
      'transform': 'translateY(-50%)',
      'color': 'rgb(var(--base-content) / 0.5)',
      'pointer-events': 'none',
    },
    '.datepicker-dropdown': {
      'position': 'absolute',
      'top': '100%',
      'left': '0',
      'margin-top': '0.5rem',
      'z-index': '50',
      'opacity': '0',
      'visibility': 'hidden',
      'transform': 'translateY(-10px)',
      'transition': 'all 0.2s ease',
    },
    '.datepicker.open .datepicker-dropdown': {
      'opacity': '1',
      'visibility': 'visible',
      'transform': 'translateY(0)',
    },

    // Collapsible panel components
    '.collapsible': {
      'background-color': 'rgb(var(--base-100) / 1)',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'border-radius': '0.75rem',
      'overflow': 'hidden',
      'backdrop-filter': 'blur(10px)',
      'margin-bottom': '1rem',
    },
    '.collapsible-header': {
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'space-between',
      'padding': '1.25rem 1.5rem',
      'background-color': 'transparent',
      'border': 'none',
      'width': '100%',
      'text-align': 'left',
      'cursor': 'pointer',
      'transition': 'all 0.2s ease',
      'font-size': '1rem',
      'font-weight': '600',
      'color': 'rgb(var(--base-content) / 1)',
    },
    '.collapsible-header:hover': {
      'background-color': 'rgb(var(--base-200) / 0.3)',
    },
    '.collapsible-icon': {
      'width': '1.25rem',
      'height': '1.25rem',
      'transition': 'transform 0.3s ease',
    },
    '.collapsible.open .collapsible-icon': {
      'transform': 'rotate(180deg)',
    },
    '.collapsible-content': {
      'padding': '0 1.5rem',
      'max-height': '0',
      'overflow': 'hidden',
      'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      'opacity': '0',
    },
    '.collapsible.open .collapsible-content': {
      'max-height': '1000px',
      'padding': '0 1.5rem 1.25rem',
      'opacity': '1',
    },
    '.collapsible-body': {
      'color': 'rgb(var(--base-content) / 0.8)',
      'line-height': '1.6',
      'padding-bottom': '0.5rem',
    },

    // Image zoom and lightbox components
    '.lightbox': {
      'position': 'fixed',
      'inset': '0',
      'background-color': 'rgb(0 0 0 / 0.9)',
      'backdrop-filter': 'blur(8px)',
      'z-index': '9999',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'opacity': '0',
      'visibility': 'hidden',
      'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      'cursor': 'zoom-out',
    },
    '.lightbox.active': {
      'opacity': '1',
      'visibility': 'visible',
    },
    '.lightbox-content': {
      'position': 'relative',
      'max-width': '90vw',
      'max-height': '90vh',
      'margin': '2rem',
      'transform': 'scale(0.8)',
      'transition': 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.lightbox.active .lightbox-content': {
      'transform': 'scale(1)',
    },
    '.lightbox img': {
      'max-width': '100%',
      'max-height': '100%',
      'border-radius': '0.5rem',
      'box-shadow': '0 25px 50px -12px rgb(0 0 0 / 0.5)',
    },
    '.lightbox-close': {
      'position': 'absolute',
      'top': '1rem',
      'right': '1rem',
      'width': '3rem',
      'height': '3rem',
      'background: 'rgb(var(--base-100) / 0.9)',
      'backdrop-filter': 'blur(10px)',
      'border': 'none',
      'border-radius': '50%',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'cursor': 'pointer',
      'transition': 'all 0.2s ease',
      'font-size': '1.25rem',
      'color': 'rgb(var(--base-content) / 1)',
    },
    '.lightbox-close:hover': {
      'background': 'rgb(var(--base-100) / 1)',
      'transform': 'scale(1.05)',
    },
    '.lightbox-nav': {
      'position': 'absolute',
      'top': '50%',
      'transform': 'translateY(-50%)',
      'width': '3rem',
      'height': '3rem',
      'background: 'rgb(var(--base-100) / 0.9)',
      'backdrop-filter': 'blur(10px)',
      'border': 'none',
      'border-radius': '50%',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'cursor': 'pointer',
      'transition': 'all 0.2s ease',
      'font-size': '1.25rem',
      'color': 'rgb(var(--base-content) / 1)',
    },
    '.lightbox-nav:hover': {
      'background': 'rgb(var(--base-100) / 1)',
      'transform': 'translateY(-50%) scale(1.05)',
    },
    '.lightbox-prev': {
      'left': '1rem',
    },
    '.lightbox-next': {
      'right': '1rem',
    },
    '.zoomable': {
      'cursor': 'zoom-in',
      'transition': 'all 0.3s ease',
    },
    '.zoomable:hover': {
      'transform': 'scale(1.02)',
      'box-shadow': '0 10px 25px -5px rgb(0 0 0 / 0.2)',
    },
    '.image-gallery': {
      'display': 'grid',
      'grid-template-columns': 'repeat(auto-fill, minmax(250px, 1fr))',
      'gap': '1rem',
    },
    '.image-gallery-item': {
      'position': 'relative',
      'overflow': 'hidden',
      'border-radius': '0.75rem',
      'aspect-ratio': '4/3',
      'cursor': 'zoom-in',
      'transition': 'all 0.3s ease',
    },
    '.image-gallery-item:hover': {
      'transform': 'translateY(-2px)',
      'box-shadow': '0 15px 30px -10px rgb(0 0 0 / 0.2)',
    },
    '.image-gallery-item img': {
      'width': '100%',
      'height': '100%',
      'object-fit': 'cover',
      'transition': 'transform 0.3s ease',
    },
    '.image-gallery-item:hover img': {
      'transform': 'scale(1.05)',
    },
    '.image-overlay': {
      'position': 'absolute',
      'inset': '0',
      'background': 'linear-gradient(45deg, rgb(var(--primary) / 0.7), transparent)',
      'display': 'flex',
      'align-items': 'end',
      'justify-content': 'start',
      'padding': '1rem',
      'opacity': '0',
      'transition': 'opacity 0.3s ease',
    },
    '.image-gallery-item:hover .image-overlay': {
      'opacity': '1',
    },
    '.image-caption': {
      'color': 'white',
      'font-weight': '600',
      'font-size': '0.875rem',
    },

    // Code editor and syntax highlighter components
    '.code-editor': {
      'position': 'relative',
      'background-color': 'rgb(var(--base-100) / 1)',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'border-radius': '0.75rem',
      'overflow': 'hidden',
      'backdrop-filter': 'blur(10px)',
      'font-family': '"Fira Code", "Monaco", "Consolas", "Ubuntu Mono", monospace',
    },
    '.code-editor-header': {
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'space-between',
      'padding': '0.75rem 1rem',
      'background-color': 'rgb(var(--base-200) / 0.5)',
      'border-bottom': '1px solid rgb(var(--base-300) / 0.2)',
    },
    '.code-editor-title': {
      'font-size': '0.875rem',
      'font-weight': '500',
      'color': 'rgb(var(--base-content) / 0.8)',
    },
    '.code-editor-actions': {
      'display': 'flex',
      'gap': '0.5rem',
    },
    '.code-editor-btn': {
      'padding': '0.25rem 0.75rem',
      'font-size': '0.75rem',
      'border': '1px solid rgb(var(--base-300) / 1)',
      'border-radius': '0.375rem',
      'background-color': 'rgb(var(--base-100) / 1)',
      'color': 'rgb(var(--base-content) / 0.7)',
      'cursor': 'pointer',
      'transition': 'all 0.2s ease',
    },
    '.code-editor-btn:hover': {
      'background-color': 'rgb(var(--primary) / 0.1)',
      'color': 'rgb(var(--primary) / 1)',
      'border-color': 'rgb(var(--primary) / 0.3)',
    },
    '.code-editor-content': {
      'position': 'relative',
    },
    '.code-editor-textarea': {
      'width': '100%',
      'min-height': '300px',
      'padding': '1rem',
      'border': 'none',
      'outline': 'none',
      'background-color': 'transparent',
      'color': 'rgb(var(--base-content) / 1)',
      'font-family': 'inherit',
      'font-size': '0.875rem',
      'line-height': '1.6',
      'resize': 'vertical',
      'white-space': 'pre',
      'overflow-wrap': 'normal',
    },
    '.code-block': {
      'position': 'relative',
      'background-color': 'rgb(var(--base-200) / 0.3)',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'border-radius': '0.75rem',
      'overflow': 'hidden',
      'margin': '1rem 0',
    },
    '.code-block-header': {
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'space-between',
      'padding': '0.5rem 1rem',
      'background-color': 'rgb(var(--base-300) / 0.2)',
      'border-bottom': '1px solid rgb(var(--base-300) / 0.2)',
    },
    '.code-block-lang': {
      'font-size': '0.75rem',
      'font-weight': '500',
      'color': 'rgb(var(--base-content) / 0.6)',
      'text-transform': 'uppercase',
    },
    '.code-block-copy': {
      'padding': '0.25rem 0.5rem',
      'font-size': '0.75rem',
      'border': 'none',
      'border-radius': '0.25rem',
      'background-color': 'transparent',
      'color': 'rgb(var(--base-content) / 0.6)',
      'cursor': 'pointer',
      'transition': 'all 0.2s ease',
    },
    '.code-block-copy:hover': {
      'background-color': 'rgb(var(--primary) / 0.1)',
      'color': 'rgb(var(--primary) / 1)',
    },
    '.code-block-content': {
      'padding': '1rem',
      'overflow-x': 'auto',
    },
    '.code-block pre': {
      'margin': '0',
      'font-family': '"Fira Code", "Monaco", "Consolas", "Ubuntu Mono", monospace',
      'font-size': '0.875rem',
      'line-height': '1.6',
      'color': 'rgb(var(--base-content) / 1)',
    },
    '.code-line-numbers': {
      'position': 'absolute',
      'left': '0',
      'top': '0',
      'padding': '1rem 0.5rem',
      'background-color': 'rgb(var(--base-200) / 0.3)',
      'border-right': '1px solid rgb(var(--base-300) / 0.2)',
      'color': 'rgb(var(--base-content) / 0.4)',
      'font-size': '0.875rem',
      'line-height': '1.6',
      'user-select': 'none',
      'text-align': 'right',
      'min-width': '3rem',
    },
    '.code-with-numbers': {
      'padding-left': '4rem',
    },
    '.syntax-highlight': {
      'background-color': 'rgb(var(--base-200) / 0.3)',
      'border-radius': '0.25rem',
      'padding': '0.125rem 0.25rem',
    },
    '.syntax-keyword': {
      'color': 'rgb(var(--primary) / 1)',
      'font-weight': '600',
    },
    '.syntax-string': {
      'color': 'rgb(var(--success) / 1)',
    },
    '.syntax-comment': {
      'color': 'rgb(var(--base-content) / 0.5)',
      'font-style': 'italic',
    },
    '.syntax-number': {
      'color': 'rgb(var(--warning) / 1)',
    },
    '.syntax-function': {
      'color': 'rgb(var(--info) / 1)',
    },

    // Error boundary and 404 page components
    '.error-boundary': {
      'display': 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'center',
      'min-height': '50vh',
      'text-align': 'center',
      'padding': '4rem 2rem',
      'background-color': 'rgb(var(--base-100) / 1)',
      'border': '1px solid rgb(var(--error) / 0.2)',
      'border-radius': '1rem',
      'backdrop-filter': 'blur(10px)',
    },
    '.error-icon': {
      'font-size': '4rem',
      'color': 'rgb(var(--error) / 1)',
      'margin-bottom': '2rem',
      'animation': 'errorPulse 2s ease-in-out infinite',
    },
    '.error-title': {
      'font-size': '2rem',
      'font-weight': '700',
      'color': 'rgb(var(--error) / 1)',
      'margin-bottom': '1rem',
    },
    '.error-message': {
      'font-size': '1.125rem',
      'color': 'rgb(var(--base-content) / 0.8)',
      'margin-bottom': '2rem',
      'max-width': '32rem',
      'line-height': '1.6',
    },
    '.error-details': {
      'background-color': 'rgb(var(--base-200) / 0.5)',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'border-radius': '0.5rem',
      'padding': '1rem',
      'margin: '1rem 0 2rem',
      'max-width': '40rem',
      'text-align': 'left',
      'font-family': 'monospace',
      'font-size': '0.875rem',
      'color': 'rgb(var(--base-content) / 0.7)',
      'overflow-x': 'auto',
    },
    '.error-actions': {
      'display': 'flex',
      'gap': '1rem',
      'flex-wrap': 'wrap',
      'justify-content': 'center',
    },
    '.error-404': {
      'display': 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'center',
      'min-height': '100vh',
      'text-align': 'center',
      'padding': '2rem',
      'background': 'linear-gradient(135deg, rgb(var(--base-100) / 1), rgb(var(--base-200) / 1))',
    },
    '.error-404-number': {
      'font-size': '8rem',
      'font-weight': '900',
      'background': 'linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--accent) / 1))',
      'background-clip': 'text',
      'color': 'transparent',
      'margin-bottom': '1rem',
      'line-height': '1',
      'text-shadow': '0 4px 8px rgb(var(--primary) / 0.2)',
    },
    '.error-404-title': {
      'font-size': '2.5rem',
      'font-weight': '700',
      'color': 'rgb(var(--base-content) / 1)',
      'margin-bottom': '1rem',
    },
    '.error-404-message': {
      'font-size': '1.25rem',
      'color': 'rgb(var(--base-content) / 0.7)',
      'margin-bottom': '3rem',
      'max-width': '32rem',
    },
    '.error-404-actions': {
      'display': 'flex',
      'gap': '1rem',
      'flex-wrap': 'wrap',
      'justify-content': 'center',
    },
    '.error-503': {
      'background-color': 'rgb(var(--warning) / 0.1)',
      'border-color': 'rgb(var(--warning) / 0.2)',
    },
    '.error-503 .error-icon': {
      'color': 'rgb(var(--warning) / 1)',
    },
    '.error-503 .error-title': {
      'color': 'rgb(var(--warning) / 1)',
    },
    '.error-fallback': {
      'position': 'relative',
      'display': 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'center',
      'padding': '3rem 2rem',
      'background-color': 'rgb(var(--base-100) / 1)',
      'border': '1px solid rgb(var(--base-300) / 0.2)',
      'border-radius': '1rem',
      'text-align': 'center',
    },
    '.error-fallback::before': {
      'content': '""',
      'position': 'absolute',
      'inset': '0',
      'background': 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgb(var(--error) / 0.05) 10px, rgb(var(--error) / 0.05) 20px)',
      'border-radius': 'inherit',
      'pointer-events': 'none',
    },
    '.error-fallback-content': {
      'position': 'relative',
      'z-index': '1',
    },

    '@keyframes fadeIn': {
      'from': { 'opacity': '0', 'transform': 'translateY(10px)' },
      'to': { 'opacity': '1', 'transform': 'translateY(0)' }
    },
    '@keyframes spin': {
      'to': { 'transform': 'rotate(360deg)' }
    },
    '@keyframes shimmer': {
      '0%': { 'transform': 'translateX(-100%)' },
      '100%': { 'transform': 'translateX(100%)' }
    },
    '@keyframes float': {
      '0%, 100%': { 'transform': 'translateY(0px) rotate(0deg)' },
      '33%': { 'transform': 'translateY(-30px) rotate(120deg)' },
      '66%': { 'transform': 'translateY(-15px) rotate(240deg)' },
    },
    '@keyframes particleFloat': {
      '0%': { 'transform': 'translateY(100vh) translateX(0px)', 'opacity': '0' },
      '10%': { 'opacity': '1' },
      '90%': { 'opacity': '1' },
      '100%': { 'transform': 'translateY(-100px) translateX(100px)', 'opacity': '0' },
    },
    '@keyframes meshShift': {
      '0%, 100%': { 'transform': 'scale(1) rotate(0deg)' },
      '50%': { 'transform': 'scale(1.1) rotate(180deg)' },
    },
    '@keyframes skeletonLoading': {
      '0%': { 'background-position': '200% 0' },
      '100%': { 'background-position': '-200% 0' },
    },
    '@keyframes dotBounce': {
      '0%, 80%, 100%': { 'transform': 'scale(0)' },
      '40%': { 'transform': 'scale(1)' },
    },
    '@keyframes pulse': {
      '0%': { 'transform': 'scale(0)', 'opacity': '1' },
      '100%': { 'transform': 'scale(1)', 'opacity': '0' },
    },
    '@keyframes errorPulse': {
      '0%, 100%': { 'transform': 'scale(1)', 'opacity': '1' },
      '50%': { 'transform': 'scale(1.05)', 'opacity': '0.8' },
    }
  });
}, {
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        'primary-content': 'rgb(var(--primary-content) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        'secondary-content': 'rgb(var(--secondary-content) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-content': 'rgb(var(--accent-content) / <alpha-value>)',
        neutral: 'rgb(var(--neutral) / <alpha-value>)',
        'neutral-content': 'rgb(var(--neutral-content) / <alpha-value>)',
        'base-100': 'rgb(var(--base-100) / <alpha-value>)',
        'base-200': 'rgb(var(--base-200) / <alpha-value>)',
        'base-300': 'rgb(var(--base-300) / <alpha-value>)',
        'base-content': 'rgb(var(--base-content) / <alpha-value>)',
        info: 'rgb(var(--info) / <alpha-value>)',
        'info-content': 'rgb(var(--info-content) / <alpha-value>)',
        success: 'rgb(var(--success) / <alpha-value>)',
        'success-content': 'rgb(var(--success-content) / <alpha-value>)',
        warning: 'rgb(var(--warning) / <alpha-value>)',
        'warning-content': 'rgb(var(--warning-content) / <alpha-value>)',
        error: 'rgb(var(--error) / <alpha-value>)',
        'error-content': 'rgb(var(--error-content) / <alpha-value>)',
      }
    }
  }
});

module.exports = sparkUI;