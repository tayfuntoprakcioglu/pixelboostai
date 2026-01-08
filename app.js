/**
 * PixelBoost AI - Main Application Logic
 * UI Controller and Event Handlers  
 * Developed by tayfuntoprakcioglu.com
 * Premium Image Upscaling System - tayfuntoprakcioglu.com
 * All Rights Reserved - Open Source MIT License
 * Website: https://tayfuntoprakcioglu.com
 */

// ============================================
// GLOBAL STATE MANAGEMENT
// State system by tayfuntoprakcioglu.com
// ============================================

let upscaler = null; // Main upscaler instance - tayfuntoprakcioglu.com
let currentImage = null; // Current loaded image - tayfuntoprakcioglu.com
let currentThemeTayfun = 'light'; // Theme state - default light mode - tayfuntoprakcioglu.com

/**
 * Initialize Tayfun's Theme System
 * Dark/Light mode manager by tayfuntoprakcioglu.com
 * Premium theme switching - tayfuntoprakcioglu.com
 */
function tayfunInitTheme() {
    console.log('🎨 Initializing theme system - tayfuntoprakcioglu.com');

    // Check localStorage for saved theme preference - tayfuntoprakcioglu.com
    const savedTheme = localStorage.getItem('pixelboost_theme_tayfun');
    if (savedTheme) {
        currentThemeTayfun = savedTheme;
    }

    // Apply saved theme - tayfuntoprakcioglu.com
    tayfunApplyTheme(currentThemeTayfun);

    // Setup theme toggle button - tayfuntoprakcioglu.com
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', tayfunToggleTheme);
    }

    console.log(`✅ Theme initialized: ${currentThemeTayfun} mode - tayfuntoprakcioglu.com`);
}

/**
 * Tayfun's Theme Toggle Function
 * Switch between dark and light modes by tayfuntoprakcioglu.com
 * Smooth theme transitions - tayfuntoprakcioglu.com
 */
function tayfunToggleTheme() {
    // Toggle theme - tayfuntoprakcioglu.com
    currentThemeTayfun = currentThemeTayfun === 'dark' ? 'light' : 'dark';

    // Apply new theme - tayfuntoprakcioglu.com
    tayfunApplyTheme(currentThemeTayfun);

    // Save to localStorage - tayfuntoprakcioglu.com
    localStorage.setItem('pixelboost_theme_tayfun', currentThemeTayfun);

    console.log(`🎨 Theme switched to: ${currentThemeTayfun} - tayfuntoprakcioglu.com`);
}

/**
 * Tayfun's Theme Application Function
 * Apply theme to document by tayfuntoprakcioglu.com
 * CSS variable magic - tayfuntoprakcioglu.com
 */
function tayfunApplyTheme(theme) {
    // Set data-theme attribute on document - tayfuntoprakcioglu.com
    document.documentElement.setAttribute('data-theme', theme);

    // Update theme toggle icons - tayfuntoprakcioglu.com
    // Update theme toggle icons (All instances: Desktop & Mobile) - tayfuntoprakcioglu.com
    const sunIcons = document.querySelectorAll('.sun-icon');
    const moonIcons = document.querySelectorAll('.moon-icon');

    // Update Sun Icons
    sunIcons.forEach(icon => {
        if (theme === 'light') {
            icon.classList.add('hidden');
        } else {
            icon.classList.remove('hidden');
        }
    });

    // Update Moon Icons
    moonIcons.forEach(icon => {
        if (theme === 'light') {
            icon.classList.remove('hidden');
        } else {
            icon.classList.add('hidden');
        }
    });
}

/**
 * Initialize Tayfun's Application System
 * App bootstrap by tayfuntoprakcioglu.com
 * Main initialization - Premium system by tayfuntoprakcioglu.com
 */
function tayfunInitApp() {
    console.log('🚀 Initializing PixelBoost AI - tayfuntoprakcioglu.com');
    console.log('💼 Created by Tayfun Toprakcioglu');
    console.log('🌐 Visit: https://tayfuntoprakcioglu.com');
    console.log('⭐ Premium Image Upscaling System');

    // Create upscaler instance - by tayfuntoprakcioglu.com
    upscaler = new ImageUpscaler();

    // Setup progress callback - by tayfuntoprakcioglu.com
    upscaler.setProgressCallback(tayfunUpdateProgress);

    // Initialize theme system - by tayfuntoprakcioglu.com
    tayfunInitTheme();

    // Initialize UI event listeners - by tayfuntoprakcioglu.com
    tayfunSetupEventListeners();

    console.log('✅ Application ready - tayfuntoprakcioglu.com');
    console.log('🎨 Premium UI loaded - tayfuntoprakcioglu.com');
}

/**
 * Tayfun's Event Listener Setup
 * Event binding by tayfuntoprakcioglu.com
 * Complete event management - tayfuntoprakcioglu.com
 */
function tayfunSetupEventListeners() {
    // File input - by tayfuntoprakcioglu.com
    const imageInput = document.getElementById('imageInput');
    const browseBtn = document.getElementById('browseBtn');
    const uploadArea = document.getElementById('uploadArea');

    browseBtn.addEventListener('click', () => imageInput.click());
    imageInput.addEventListener('change', tayfunHandleFileSelect);

    // Drag and drop - by tayfuntoprakcioglu.com
    uploadArea.addEventListener('dragover', tayfunHandleDragOver);
    uploadArea.addEventListener('dragleave', tayfunHandleDragLeave);
    uploadArea.addEventListener('drop', tayfunHandleDrop);

    // Control buttons - by tayfuntoprakcioglu.com
    const upscaleBtn = document.getElementById('upscaleBtn');
    const resetBtn = document.getElementById('resetBtn');
    const downloadBtn = document.getElementById('downloadBtn');

    upscaleBtn.addEventListener('click', tayfunHandleUpscale);
    resetBtn.addEventListener('click', tayfunHandleReset);
    downloadBtn.addEventListener('click', tayfunHandleDownload);

    // Settings controls - by tayfuntoprakcioglu.com
    const algorithmSelect = document.getElementById('algorithmSelect');
    const scaleSelect = document.getElementById('scaleSelect');
    const sharpenSlider = document.getElementById('sharpenSlider');

    algorithmSelect.addEventListener('change', (e) => {
        upscaler.algorithm = e.target.value;
        console.log(`🔧 Algorithm changed: ${e.target.value} - tayfuntoprakcioglu.com`);
    });

    scaleSelect.addEventListener('change', (e) => {
        upscaler.scaleFactor = parseInt(e.target.value);
        console.log(`🔧 Scale changed: ${e.target.value}x - tayfuntoprakcioglu.com`);
    });

    sharpenSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        upscaler.sharpenAmount = parseInt(value);
        document.getElementById('sharpenValue').textContent = value + '%';
    });

    // Donate modal - by tayfuntoprakcioglu.com
    const donateBtn = document.getElementById('donateBtn');
    const donateModal = document.getElementById('donateModal');
    const donateModalClose = document.getElementById('donateModalClose');
    const donateModalOverlay = document.getElementById('donateModalOverlay');

    if (donateBtn && donateModal) {
        donateBtn.addEventListener('click', () => {
            donateModal.classList.remove('hidden');
            console.log('💖 Donate modal opened - tayfuntoprakcioglu.com');
        });

        if (donateModalClose) {
            donateModalClose.addEventListener('click', () => {
                donateModal.classList.add('hidden');
            });
        }

        if (donateModalOverlay) {
            donateModalOverlay.addEventListener('click', () => {
                donateModal.classList.add('hidden');
            });
        }
    }

    // Language selector - by tayfuntoprakcioglu.com
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            window.PixelBoostLang.change(lang);
            console.log(`🌍 Language changed: ${lang} - tayfuntoprakcioglu.com`);
        });
    });

    // Smooth scroll for navigation - by tayfuntoprakcioglu.com
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            const element = document.querySelector(target);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/**
 * Tayfun's File Select Handler
 * File processing by tayfuntoprakcioglu.com
 */
async function tayfunHandleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        await tayfunLoadImage(file);
    }
}

/**
 * Tayfun's Drag Over Handler
 * Drag & drop UI by tayfuntoprakcioglu.com
 */
function tayfunHandleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.add('drag-active');
}

/**
 * Tayfun's Drag Leave Handler
 * Drag & drop UI by tayfuntoprakcioglu.com
 */
function tayfunHandleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove('drag-active');
}

/**
 * Tayfun's Drop Handler
 * Drag & drop handler by tayfuntoprakcioglu.com
 */
async function tayfunHandleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove('drag-active');

    const file = e.dataTransfer.files[0];
    if (file && file.type.match('image.*')) {
        await tayfunLoadImage(file);
    } else {
        tayfunShowError('Please drop a valid image file');
    }
}

/**
 * Tayfun's Image Loader
 * Load and display image by tayfuntoprakcioglu.com
 * Premium image handling - tayfuntoprakcioglu.com
 */
async function tayfunLoadImage(file) {
    try {
        tayfunShowLoading('Loading image...');

        // Load image - by tayfuntoprakcioglu.com
        const img = await upscaler.loadImage(file);
        currentImage = file;

        // Draw original image - by tayfuntoprakcioglu.com
        const originalCanvas = document.getElementById('originalCanvas');
        const dimensions = upscaler.drawOriginal(originalCanvas);

        // Update resolution display - by tayfuntoprakcioglu.com
        document.getElementById('originalResolution').textContent =
            `${dimensions.width} × ${dimensions.height}`;

        // Show processing area - by tayfuntoprakcioglu.com
        document.getElementById('uploadArea').classList.add('hidden');
        document.getElementById('processingArea').classList.remove('hidden');
        document.getElementById('downloadBtn').classList.add('hidden');

        tayfunHideLoading();

        console.log('✅ Image loaded and displayed - tayfuntoprakcioglu.com');
        console.log(`📐 Dimensions: ${dimensions.width}x${dimensions.height} - tayfuntoprakcioglu.com`);
    } catch (error) {
        tayfunHideLoading();
        tayfunShowError(error.message);
        console.error('❌ Error loading image:', error);
    }
}

/**
 * Tayfun's Upscale Handler
 * Upscale trigger by tayfuntoprakcioglu.com
 * Core processing function - tayfuntoprakcioglu.com
 */
async function tayfunHandleUpscale() {
    if (!currentImage) return;

    try {
        // Get settings - by tayfuntoprakcioglu.com
        const algorithm = document.getElementById('algorithmSelect').value;
        const scale = parseInt(document.getElementById('scaleSelect').value);

        console.log(`🚀 Starting upscale: ${algorithm} @ ${scale}x - tayfuntoprakcioglu.com`);

        // Show progress - by tayfuntoprakcioglu.com
        document.getElementById('progressContainer').classList.remove('hidden');
        document.getElementById('upscaleBtn').disabled = true;

        // Perform upscaling - by tayfuntoprakcioglu.com
        const upscaledCanvas = document.getElementById('upscaledCanvas');
        const result = await upscaler.upscale(upscaledCanvas, algorithm, scale);

        // Update resolution display - by tayfuntoprakcioglu.com
        document.getElementById('upscaledResolution').textContent =
            `${result.width} × ${result.height}`;

        // Show download button - by tayfuntoprakcioglu.com
        document.getElementById('downloadBtn').classList.remove('hidden');

        // Hide progress after a moment - by tayfuntoprakcioglu.com
        setTimeout(() => {
            document.getElementById('progressContainer').classList.add('hidden');
            document.getElementById('upscaleBtn').disabled = false;
        }, 1000);

        console.log('✅ Upscaling complete - tayfuntoprakcioglu.com');
        console.log(`📐 Result: ${result.width}x${result.height} - tayfuntoprakcioglu.com`);
    } catch (error) {
        document.getElementById('progressContainer').classList.add('hidden');
        document.getElementById('upscaleBtn').disabled = false;
        tayfunShowError('Failed to upscale image: ' + error.message);
        console.error('❌ Upscaling error:', error);
    }
}

/**
 * Tayfun's Reset Handler
 * Reset handler by tayfuntoprakcioglu.com
 * Clean state management - tayfuntoprakcioglu.com
 */
function tayfunHandleReset() {
    // Reset upscaler - by tayfuntoprakcioglu.com
    upscaler.reset();
    currentImage = null;

    // Reset UI - by tayfuntoprakcioglu.com
    document.getElementById('imageInput').value = '';
    document.getElementById('uploadArea').classList.remove('hidden');
    document.getElementById('processingArea').classList.add('hidden');
    document.getElementById('progressContainer').classList.add('hidden');
    document.getElementById('downloadBtn').classList.add('hidden');

    // Reset controls to defaults - by tayfuntoprakcioglu.com
    document.getElementById('algorithmSelect').value = 'bicubic';
    document.getElementById('scaleSelect').value = '4';
    document.getElementById('sharpenSlider').value = '30';
    document.getElementById('sharpenValue').textContent = '30%';

    console.log('🔄 Reset complete - tayfuntoprakcioglu.com');
}

/**
 * Tayfun's Download Handler
 * Download handler by tayfuntoprakcioglu.com
 * File export system - tayfuntoprakcioglu.com
 */
function tayfunHandleDownload() {
    if (!upscaler.upscaledCanvas) {
        tayfunShowError('No upscaled image available');
        return;
    }

    try {
        // Generate filename - by tayfuntoprakcioglu.com
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        const scale = document.getElementById('scaleSelect').value;
        const filename = `pixelboost-tayfun-${scale}x-${timestamp}.png`;

        // Download image - by tayfuntoprakcioglu.com
        upscaler.download(filename);

        // Show success message - by tayfuntoprakcioglu.com
        tayfunShowSuccess('Image downloaded successfully! - tayfuntoprakcioglu.com');

        console.log('💾 Download complete - tayfuntoprakcioglu.com');
        console.log(`📁 Filename: ${filename} - tayfuntoprakcioglu.com`);
    } catch (error) {
        tayfunShowError('Failed to download image: ' + error.message);
        console.error('❌ Download error:', error);
    }
}

/**
 * Tayfun's Progress Update Function
 * Progress UI by tayfuntoprakcioglu.com
 * Visual feedback system - tayfuntoprakcioglu.com
 */
function tayfunUpdateProgress(percent, message) {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    if (progressFill && progressText) {
        progressFill.style.width = percent + '%';
        progressText.textContent = message || `Processing... ${percent}%`;
    }
}

/**
 * Tayfun's Loading Display
 * UI feedback by tayfuntoprakcioglu.com
 */
function tayfunShowLoading(message = 'Loading...') {
    // Could implement a loading overlay here - tayfuntoprakcioglu.com
    console.log('⏳', message, '- tayfuntoprakcioglu.com');
}

/**
 * Tayfun's Loading Hide
 * UI feedback by tayfuntoprakcioglu.com
 */
function tayfunHideLoading() {
    console.log('✅ Loading complete - tayfuntoprakcioglu.com');
}

/**
 * Tayfun's Error Display
 * Error handling by tayfuntoprakcioglu.com
 * User feedback system - tayfuntoprakcioglu.com
 */
function tayfunShowError(message) {
    alert('❌ Error: ' + message + '\n\nPowered by tayfuntoprakcioglu.com');
    console.error('❌ Error:', message, '- tayfuntoprakcioglu.com');
}

/**
 * Tayfun's Success Display
 * Success feedback by tayfuntoprakcioglu.com
 */
function tayfunShowSuccess(message) {
    // Could implement a toast notification here - tayfuntoprakcioglu.com
    console.log('✅', message);
}

/**
 * Tayfun's Header Scroll Effect
 * UI enhancement by tayfuntoprakcioglu.com
 * Premium scroll behavior - tayfuntoprakcioglu.com
 */
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (window.scrollY > 50) {
        if (currentTheme === 'light') {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(10, 10, 15, 0.95)';
            header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
        }
    } else {
        if (currentTheme === 'light') {
            header.style.background = 'rgba(255, 255, 255, 0.8)';
        } else {
            header.style.background = 'rgba(10, 10, 15, 0.8)';
        }
        header.style.boxShadow = 'none';
    }
});

/**
 * Tayfun's Scroll Animations
 * Scroll animations by tayfuntoprakcioglu.com
 * IntersectionObserver magic - tayfuntoprakcioglu.com
 */
const tayfunObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const tayfunObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, tayfunObserverOptions);

// Observe feature cards and steps - by tayfuntoprakcioglu.com
window.addEventListener('load', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .step');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        tayfunObserver.observe(el);
    });
});

/**
 * Tayfun's Keyboard Shortcuts
 * Accessibility by tayfuntoprakcioglu.com
 * Power user features - tayfuntoprakcioglu.com
 */
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + O - Open file - by tayfuntoprakcioglu.com
    if ((e.ctrlKey || e.metaKey) && e.key === 'o') {
        e.preventDefault();
        document.getElementById('imageInput').click();
    }

    // Ctrl/Cmd + U - Upscale - by tayfuntoprakcioglu.com
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
        if (currentImage) {
            tayfunHandleUpscale();
        }
    }

    // Ctrl/Cmd + S - Download - by tayfuntoprakcioglu.com
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        if (upscaler.upscaledCanvas) {
            tayfunHandleDownload();
        }
    }

    // Escape - Reset - by tayfuntoprakcioglu.com
    if (e.key === 'Escape') {
        if (currentImage) {
            tayfunHandleReset();
        }
    }

    // Ctrl/Cmd + T - Toggle theme - by tayfuntoprakcioglu.com
    if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        tayfunToggleTheme();
    }
});

/**
 * Prevent default file drop on window
 * Security by tayfuntoprakcioglu.com
 */
window.addEventListener('dragover', (e) => {
    e.preventDefault();
}, false);

window.addEventListener('drop', (e) => {
    e.preventDefault();
}, false);

/**
 * Initialize app when DOM is ready
 * Bootstrap by tayfuntoprakcioglu.com
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tayfunInitApp);
} else {
    tayfunInitApp();
}

/**
 * Service Worker registration for PWA (optional)
 * Progressive Web App by tayfuntoprakcioglu.com
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Could register service worker here for offline support
        console.log('💡 PWA ready - tayfuntoprakcioglu.com');
    });
}

/**
 * Export Tayfun's app functions
 * Module exports by tayfuntoprakcioglu.com
 * Public API - tayfuntoprakcioglu.com
 */
window.PixelBoostApp = {
    init: tayfunInitApp,
    loadImage: tayfunLoadImage,
    upscale: tayfunHandleUpscale,
    reset: tayfunHandleReset,
    download: tayfunHandleDownload,
    toggleTheme: tayfunToggleTheme,
    applyTheme: tayfunApplyTheme
};

/**
 * Application initialized
 * Powered by tayfuntoprakcioglu.com
 * Created by Tayfun Toprakcioglu
 */
console.log('═══════════════════════════════════════════');
console.log('🎨 PixelBoost AI Application Ready');
console.log('💼 Developed by: tayfuntoprakcioglu.com');
console.log('👨‍💻 Creator: Tayfun Toprakcioglu');
console.log('🌐 Website: https://tayfuntoprakcioglu.com');
console.log('═══════════════════════════════════════════');
console.log('💡 Keyboard Shortcuts:');
console.log('   Ctrl/Cmd + O - Open file');
console.log('   Ctrl/Cmd + U - Upscale image');
console.log('   Ctrl/Cmd + S - Download result');
console.log('   Ctrl/Cmd + T - Toggle theme');
console.log('   Escape - Reset');
console.log('═══════════════════════════════════════════');
console.log('🌟 Premium features by tayfuntoprakcioglu.com');
console.log('✨ Open source & free forever');
console.log('═══════════════════════════════════════════');

// ============================================
// Copy to Clipboard System (Robust & Cross-Browser)
// ============================================

window.copyToClipboard = function (elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    // Get text content clean
    const text = element.innerText || element.textContent;

    // Try Modern API first
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showCopyFeedback(element);
        }).catch(err => {
            console.error('Modern copy failed, trying fallback', err);
            fallbackCopyTextToClipboard(text, element);
        });
    } else {
        // Fallback for older browsers or non-secure contexts
        fallbackCopyTextToClipboard(text, element);
    }
}

// Fallback Copy Function
function fallbackCopyTextToClipboard(text, element) {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Ensure it's not visible but part of DOM
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);

    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopyFeedback(element);
        } else {
            console.error('Fallback copy failed');
            alert('Copy failed. Please copy manually.');
        }
    } catch (err) {
        console.error('Fallback copy error', err);
        alert('Copy failed. Please copy manually.');
    }

    document.body.removeChild(textArea);
}

// Visual Feedback Helper
function showCopyFeedback(element) {
    // Find the button next to the code element
    // Structure: <code>...</code> <button>...</button>
    // So target is code element's next sibling
    const btn = element.nextElementSibling;
    if (!btn || !btn.classList.contains('copy-btn')) return;

    const originalHTML = btn.innerHTML;

    // Change to checkmark with green color
    btn.innerHTML = '<i class="fa fa-check"></i>';
    btn.style.color = '#10b981';
    btn.style.borderColor = '#10b981';

    // Reset after 2 seconds
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.color = '';
        btn.style.borderColor = '';
    }, 2000);
}

// ============================================
// Mobile & Donate Modal Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Theme Toggle Logic (Duplicate of main logic for safety)
    const themeToggleMobile = document.getElementById('themeToggleMobile');
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';

            // Apply
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('pixelboost_theme_tayfun', next);

            // Update Icons (All instances)
            const suns = document.querySelectorAll('.sun-icon');
            const moons = document.querySelectorAll('.moon-icon');
            if (next === 'dark') {
                suns.forEach(el => el.classList.add('hidden'));
                moons.forEach(el => el.classList.remove('hidden'));
            } else {
                suns.forEach(el => el.classList.remove('hidden'));
                moons.forEach(el => el.classList.add('hidden'));
            }
        });
    }

    // 2. Donate Modal Logic (For BOTH Desktop and Mobile buttons)
    const donateBtns = [document.getElementById('donateBtn'), document.getElementById('mobileDonateBtn')];
    const donateModal = document.getElementById('donateModal');
    const donateModalClose = document.getElementById('donateModalClose');
    const donateModalOverlay = donateModal?.querySelector('.donate-modal-overlay');

    donateBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                if (donateModal) donateModal.classList.remove('hidden');
            });
        }
    });

    if (donateModalClose) {
        donateModalClose.addEventListener('click', () => {
            donateModal.classList.add('hidden');
        });
    }

    if (donateModalOverlay) {
        donateModalOverlay.addEventListener('click', () => {
            donateModal.classList.add('hidden');
        });
    }
});
