const navbarHTML = `
<nav class="fixed top-0 w-full z-50 nav-blur border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
    <div class="w-full px-6 lg:px-12">
        <div class="flex justify-between items-center h-20">
            
            <div class="flex-shrink-0">
                <a href="index.html" class="text-3xl font-display font-bold text-navy dark:text-white tracking-tight hover:text-copper dark:hover:text-copper transition-colors">Siham Elmali</a>
            </div>

            <div class="hidden md:block">
                <div class="ml-10 flex items-center space-x-8">
                    <a href="index.html" class="nav-link text-charcoal dark:text-gray-300 hover:text-copper dark:hover:text-copper font-medium transition-colors">Home</a>
                    <a href="projects.html" class="nav-link text-charcoal dark:text-gray-300 hover:text-copper dark:hover:text-copper font-medium transition-colors">Projects</a>
                    <a href="about.html" class="nav-link text-charcoal dark:text-gray-300 hover:text-copper dark:hover:text-copper font-medium transition-colors">About</a>
                    
                    <div class="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2"></div>

                    <a href="resources/Siham_Elmali_Nov2025.pdf" target="_blank" class="flex items-center gap-2 text-sm font-medium text-charcoal dark:text-gray-300 hover:text-copper transition-colors">
                        Resume
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    </a>

                    <a href="https://github.com/shadowfax42" target="_blank" class="text-charcoal dark:text-gray-300 hover:text-copper transition-colors" title="GitHub">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>

                    <button id="theme-toggle" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-charcoal dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all focus:outline-none">
                        <svg id="theme-toggle-light-icon" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>
                        <svg id="theme-toggle-dark-icon" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                    </button>
                </div>
            </div>

            <div class="md:hidden flex items-center gap-4">
                 <button id="mobile-theme-toggle" class="text-charcoal dark:text-yellow-400 p-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                </button>
                <button id="mobile-menu-btn" class="text-charcoal dark:text-white hover:text-copper">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    
    <div id="mobile-menu" class="md:hidden hidden bg-white dark:bg-navy border-t border-gray-200 dark:border-gray-700 absolute w-full shadow-xl">
        <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="index.html" class="block px-3 py-2 text-charcoal dark:text-gray-300 hover:text-copper font-medium">Home</a>
            <a href="projects.html" class="block px-3 py-2 text-charcoal dark:text-gray-300 hover:text-copper">Projects</a>
            <a href="about.html" class="block px-3 py-2 text-charcoal dark:text-gray-300 hover:text-copper">About</a>
            <a href="resources/Siham_Elmali_Nov2025.pdf" target="_blank" class="block px-3 py-2 text-charcoal dark:text-gray-300 hover:text-copper flex items-center gap-2">
                Resume <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
             <a href="https://github.com/shadowfax42" target="_blank" class="block px-3 py-2 text-charcoal dark:text-gray-300 hover:text-copper flex items-center gap-2">
                GitHub <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
        </div>
    </div>
</nav>
`;

// Inject HTML
const placeholder = document.getElementById('navbar-placeholder');
if(placeholder) placeholder.innerHTML = navbarHTML;

// 1. Highlight Active Link
const currentPage = window.location.pathname.split("/").pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    if(link.getAttribute('href') === currentPage) {
        link.classList.add('text-copper', 'border-b-2', 'border-copper');
        link.classList.remove('text-charcoal', 'dark:text-gray-300');
    }
});

// 2. Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
if(btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

// 3. Dark Mode Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

// Check Local Storage or System Preference
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    if(lightIcon) lightIcon.classList.remove('hidden');
} else {
    document.documentElement.classList.remove('dark');
    if(darkIcon) darkIcon.classList.remove('hidden');
}

function toggleTheme() {
    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');

    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
}

if(themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
if(mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);

// 4. Navbar Scroll Shadow
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('shadow-md');
        }
    }
});