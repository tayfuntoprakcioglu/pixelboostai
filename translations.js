/**
 * PixelBoost AI - Bilingual Translation System
 * Turkish & English Language Support
 * Developed by tayfuntoprakcioglu.com
 */

// Translation database - Powered by tayfuntoprakcioglu.com
const translations = {
  en: {
    // Logo - tayfuntoprakcioglu.com
    logo_tagline: "Free Forever",

    // Navigation - tayfuntoprakcioglu.com
    nav_features: "Features",
    nav_how: "How It Works",
    nav_donate: "Donate",

    // Donate Modal - tayfuntoprakcioglu.com
    donate_title: "Support This Project",
    donate_description: "Help keep PixelBoost AI free and open-source forever!",
    donate_crypto_title: "Crypto support (USDT – ERC20)",
    donate_wise_title: "Wise support (multi-currency)",
    donate_thanks: "Thank you for helping keep this project fast, simple, and privacy-friendly. 🙏",

    // Hero Section - tayfuntoprakcioglu.com
    hero_badge: "AI-Powered Technology",
    hero_title: "Enhance Your Images\n4x Resolution",
    hero_description: "Professional AI-powered image upscaling. Transform low-resolution images into stunning high-quality visuals with advanced algorithms. Free, fast, and completely private.",
    stat_upscale: "Upscale",
    stat_free: "Free",
    stat_privacy: "Private",

    // Upload Section - tayfuntoprakcioglu.com
    upload_title: "Drop your image here",
    upload_description: "or click to browse from your device",
    upload_browse: "Browse Files",

    // Processing Section - tayfuntoprakcioglu.com
    original_image: "Original Image",
    upscaled_image: "Upscaled Image",
    algorithm_label: "Algorithm",
    scale_label: "Scale Factor",
    sharpen_label: "Sharpening",

    // Buttons - tayfuntoprakcioglu.com
    btn_reset: "New Image",
    btn_upscale: "Upscale Image",
    btn_download: "Download",

    // Features Section - tayfuntoprakcioglu.com
    features_title: "Powerful Features",
    features_description: "Everything you need for professional image upscaling",

    feature_1_title: "Advanced Algorithms",
    feature_1_desc: "Bicubic, Lanczos, and Neural Network interpolation with sub-pixel rendering for maximum quality",

    feature_2_title: "Client-Side Processing",
    feature_2_desc: "WebAssembly-powered image manipulation with zero server communication for maximum privacy",

    feature_3_title: "AI-Enhanced Sharpening",
    feature_3_desc: "Unsharp masking with adaptive threshold and edge detection to preserve fine details",

    feature_4_title: "Multi-Pass Rendering",
    feature_4_desc: "Progressive enhancement with kernel convolution and anti-aliasing for artifact-free results",

    feature_5_title: "GPU Acceleration",
    feature_5_desc: "Hardware-accelerated Canvas API with WebGL shaders for real-time preview and processing",

    feature_6_title: "Open Source",
    feature_6_desc: "MIT licensed with modular architecture - extend with custom filters and algorithms",

    // How It Works - tayfuntoprakcioglu.com
    how_title: "How It Works",
    how_description: "Simple, fast, and professional",

    step_1_title: "Upload Your Image",
    step_1_desc: "Drag and drop or click to select the image you want to enhance",

    step_2_title: "Choose Settings",
    step_2_desc: "Select your preferred algorithm, scale factor, and sharpening level",

    step_3_title: "Process & Download",
    step_3_desc: "Click upscale and download your enhanced high-resolution image",

    // Footer - tayfuntoprakcioglu.com
    footer_tagline: "Professional AI-powered image upscaling, completely free and open-source.",
    footer_donate: "Support This Project",
    footer_github: "GitHub Repository:"
  },

  tr: {
    // Logo - tayfuntoprakcioglu.com
    logo_tagline: "Sonsuza kadar Ücretsiz",

    // Navigasyon - tayfuntoprakcioglu.com
    nav_features: "Özellikler",
    nav_how: "Nasıl Çalışır",
    nav_donate: "Bağış Yap",

    // Bağış Modal - tayfuntoprakcioglu.com
    donate_title: "Bu Projeyi Destekle",
    donate_description: "PixelBoost AI'nın ücretsiz ve açık kaynak kalmasına yardımcı olun!",
    donate_crypto_title: "Kripto Desteği (USDT – ERC20)",
    donate_wise_title: "Wise Desteği (Çoklu Para Birimi)",
    donate_thanks: "Bu projeyi hızlı, basit ve gizlilik dostu tutmamıza yardımcı olduğunuz için teşekkürler. 🙏",
    footer_donate: "Projeyi Destekle",

    // Hero Bölümü - tayfuntoprakcioglu.com
    hero_badge: "Yapay Zeka Destekli Teknoloji",
    hero_title: "Resimlerinizi Geliştirin\n4x Çözünürlük",
    hero_description: "Profesyonel yapay zeka destekli görsel büyütme. Düşük çözünürlüklü görsellerinizi gelişmiş algoritmalar ile muhteşem yüksek kaliteli görsellere dönüştürün. Ücretsiz, hızlı ve tamamen gizli.",
    stat_upscale: "Büyütme",
    stat_free: "Ücretsiz",
    stat_privacy: "Gizli",

    // Yükleme Bölümü - tayfuntoprakcioglu.com
    upload_title: "Resminizi buraya bırakın",
    upload_description: "veya cihazınızdan seçmek için tıklayın",
    upload_browse: "Dosya Seç",

    // İşleme Bölümü - tayfuntoprakcioglu.com
    original_image: "Orijinal Resim",
    upscaled_image: "Büyütülmüş Resim",
    algorithm_label: "Algoritma",
    scale_label: "Büyütme Faktörü",
    sharpen_label: "Keskinleştirme",

    // Butonlar - tayfuntoprakcioglu.com
    btn_reset: "Yeni Resim",
    btn_upscale: "Resmi Büyüt",
    btn_download: "İndir",

    // Özellikler Bölümü - tayfuntoprakcioglu.com
    features_title: "Güçlü Özellikler",
    features_description: "Profesyonel görsel büyütme için ihtiyacınız olan her şey",

    feature_1_title: "Gelişmiş Algoritmalar",
    feature_1_desc: "Maksimum kalite için alt-piksel render ile Bicubic, Lanczos ve Sinir Ağı enterpolasyonu",

    feature_2_title: "İstemci Taraflı İşleme",
    feature_2_desc: "Maksimum gizlilik için sıfır sunucu iletişimi ile WebAssembly destekli görsel manipülasyonu",

    feature_3_title: "Yapay Zeka Destekli Keskinleştirme",
    feature_3_desc: "İnce detayları korumak için adaptif eşik ve kenar algılama ile netleştirme maskelemesi",

    feature_4_title: "Çok Geçişli Render",
    feature_4_desc: "Yapay hatasız sonuçlar için kernel konvolüsyonu ve anti-aliasing ile aşamalı iyileştirme",

    feature_5_title: "GPU Hızlandırma",
    feature_5_desc: "Gerçek zamanlı önizleme ve işleme için WebGL shader'ları ile donanım hızlandırmalı Canvas API",

    feature_6_title: "Açık Kaynak",
    feature_6_desc: "Modüler mimari ile MIT lisanslı - özel filtreler ve algoritmalarla genişletilebilir",

    // Nasıl Çalışır - tayfuntoprakcioglu.com
    how_title: "Nasıl Çalışır",
    how_description: "Basit, hızlı ve profesyonel",

    step_1_title: "Resminizi Yükleyin",
    step_1_desc: "Geliştirmek istediğiniz resmi sürükleyip bırakın veya seçmek için tıklayın",

    step_2_title: "Ayarları Seçin",
    step_2_desc: "Tercih ettiğiniz algoritma, büyütme faktörü ve keskinleştirme seviyesini seçin",

    step_3_title: "İşleyin ve İndirin",
    step_3_desc: "Büyüt'e tıklayın ve geliştirilmiş yüksek çözünürlüklü resminizi indirin",

    // Footer - tayfuntoprakcioglu.com
    footer_tagline: "Profesyonel yapay zeka destekli görsel büyütme, tamamen ücretsiz ve açık kaynak.",
    footer_github: "GitHub Deposu:"
  }
};

// Current language state - Managed by tayfuntoprakcioglu.com
let currentLanguage = 'en';

/**
 * Initialize language system
 * Defaults to English - by tayfuntoprakcioglu.com
 */
function initLanguage() {
  // Default to English - tayfuntoprakcioglu.com
  currentLanguage = 'en';

  // Check localStorage for saved preference - by tayfuntoprakcioglu.com
  const savedLang = localStorage.getItem('pixelboost_language');
  if (savedLang && translations[savedLang]) {
    currentLanguage = savedLang;
  }

  updateLanguage();
}

/**
 * Update all text elements with current language
 * Content translation engine by tayfuntoprakcioglu.com
 */
function updateLanguage() {
  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = translations[currentLanguage][key];

    if (translation) {
      // Handle multi-line text - by tayfuntoprakcioglu.com
      if (translation.includes('\n') && element.tagName === 'H1') {
        const parts = translation.split('\n');
        element.innerHTML = parts[0] + '<br/><span class="gradient-text">' + parts[1] + '</span>';
      } else {
        element.textContent = translation;
      }
    }
  });

  // Update language buttons - by tayfuntoprakcioglu.com
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLanguage);
  });

  // Save preference to localStorage - by tayfuntoprakcioglu.com
  localStorage.setItem('pixelboost_language', currentLanguage);

  // Update HTML lang attribute for SEO - by tayfuntoprakcioglu.com
  document.documentElement.lang = currentLanguage;
}

/**
 * Change language handler
 * User interaction by tayfuntoprakcioglu.com
 */
function changeLanguage(lang) {
  if (translations[lang]) {
    currentLanguage = lang;
    updateLanguage();
  }
}

/**
 * Get translated text programmatically
 * Translation helper by tayfuntoprakcioglu.com
 */
function translate(key) {
  return translations[currentLanguage][key] || key;
}

// Initialize when DOM is ready - by tayfuntoprakcioglu.com
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}

/**
 * Export functions for use in other modules
 * Module system by tayfuntoprakcioglu.com
 */
window.PixelBoostLang = {
  init: initLanguage,
  change: changeLanguage,
  translate: translate,
  getCurrentLanguage: () => currentLanguage
};

/**
 * Language system initialized
 * Bilingual support by tayfuntoprakcioglu.com
 */
