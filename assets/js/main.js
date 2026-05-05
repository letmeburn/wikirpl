/**
 * WikiRPL - Main JavaScript
 * Core functionality: dark mode, navigation, smooth scrolling
 */

// ========== Dark Mode ========== //
const DarkMode = (() => {
    const THEME_KEY = 'wikirpl-theme';
    const DARK_THEME = 'dark';
    const LIGHT_THEME = 'light';

    const init = () => {
        const savedTheme = localStorage.getItem(THEME_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? DARK_THEME : LIGHT_THEME);
        setTheme(theme);
        setupToggle();
    };

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);
        updateToggleIcon(theme);
    };

    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || LIGHT_THEME;
        const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        setTheme(newTheme);
    };

    const updateToggleIcon = (theme) => {
        const toggle = document.getElementById('darkModeToggle');
        if (toggle) {
            const icon = toggle.querySelector('i');
            if (icon) {
                icon.className = theme === DARK_THEME ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    };

    const setupToggle = () => {
        const toggle = document.getElementById('darkModeToggle');
        if (toggle) {
            toggle.addEventListener('click', toggleTheme);
        }
    };

    return { init };
})();

// ========== Mobile Navigation ========== //
const MobileNav = (() => {
    const init = () => {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        if (!hamburger || !navMenu) return;

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    };

    return { init };
})();

// ========== Smooth Scrolling ========== //
const SmoothScroll = (() => {
    const init = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    };

    return { init };
})();

// ========== Utility Functions ========== //
const Utils = {
    /**
     * Format number dengan locale
     */
    formatNumber: (num) => {
        return new Intl.NumberFormat('id-ID').format(num);
    },

    /**
     * Format tanggal
     */
    formatDate: (date) => {
        return new Intl.DateTimeFormat('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    },

    /**
     * Debounce function
     */
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Get query parameter
     */
    getQueryParam: (param) => {
        const params = new URLSearchParams(window.location.search);
        return params.get(param);
    }
};

// ========== Performance ========== //
const Performance = {
    /**
     * Log navigation timing
     */
    logMetrics: () => {
        if (window.performance && window.performance.timing) {
            const timing = window.performance.timing;
            const navigation = window.performance.navigation;

            const loadTime = timing.loadEventEnd - timing.navigationStart;
            const domReadyTime = timing.domContentLoadedEventEnd - timing.navigationStart;

            console.log(`Page Load Time: ${loadTime}ms`);
            console.log(`DOM Ready Time: ${domReadyTime}ms`);
        }
    }
};

// ========== Initialize ========== //
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    DarkMode.init();
    MobileNav.init();
    SmoothScroll.init();

    // Log performance metrics (development only)
    if (process.env.NODE_ENV === 'development') {
        Performance.logMetrics();
    }

    console.log('WikiRPL initialized ✓');
});

// ========== Export untuk modules ========== //
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Utils, DarkMode, MobileNav, SmoothScroll };
}
