// footer.js

const footerHTML = `
<footer class="bg-navy dark:bg-gray-900 text-white pt-20 pb-10 border-t border-transparent dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            <div class="md:col-span-5">
                <a href="index.html" class="text-3xl font-display font-bold text-copper tracking-tighter mb-6 block">SE</a>
                <p class="text-gray-400 text-lg leading-relaxed max-w-sm">
                    Data Scientist & Engineer based in the San Francisco Bay Area. 
                    Specializing in analytics, machine learning, and scalable data solutions.
                </p>
                <div class="mt-8 flex space-x-5">
                    <a href="https://github.com/shadowfax42" target="_blank" class="p-2 bg-charcoal hover:bg-copper rounded-lg transition-all duration-300 group"><svg class="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                    <a href="https://www.linkedin.com/in/siham-elmali/" target="_blank" class="p-2 bg-charcoal hover:bg-copper rounded-lg transition-all duration-300 group"><svg class="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                    <a href="https://sihamwrites.substack.com/" target="_blank" class="p-2 bg-charcoal hover:bg-copper rounded-lg transition-all duration-300 group"><svg class="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M22.539 8.242H1.46V5.405h21.078v2.837zM1.46 10.881V24L12 18.11L22.54 24V10.881H1.46zM22.54 0H1.46v2.837h21.078V0z"/></svg></a>
                </div>
            </div>

            <div class="md:col-span-3">
                <h4 class="text-xs uppercase tracking-widest text-copper font-bold mb-6">Explore</h4>
                <ul class="space-y-4">
                    <li><a href="#top" class="footer-link text-gray-400 hover:text-white">Back to Top</a></li>
                    <li><a href="index.html" class="footer-link text-gray-400 hover:text-white">Home</a></li>
                    <li><a href="projects.html" class="footer-link text-gray-400 hover:text-white">Projects</a></li>
                    <li><a href="about.html" class="footer-link text-gray-400 hover:text-white">About Me</a></li>
                    <li><a href="resources/Siham_Elmali_Nov2025.pdf" target="_blank" class="footer-link text-gray-400 hover:text-white">Resume</a></li>
                </ul>
            </div>

            <div class="md:col-span-4">
                <h4 class="text-xs uppercase tracking-widest text-copper font-bold mb-6">Connect</h4>
                <p class="text-gray-400 mb-6">Interested in discussing data infrastructure or analytics?</p>
                <a href="mailto:siham.elmali@gmail.com" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy font-bold rounded-lg hover:bg-copper hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    Send a Message
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
            </div>
        </div>
    </div>
</footer>
`;

const footerPlaceholder = document.getElementById('footer-placeholder');
if(footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;