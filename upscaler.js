/**
 * PixelBoost AI - Advanced Image Upscaling Engine
 * 4x Resolution Enhancement with Multiple Algorithms
 * Developed by tayfuntoprakcioglu.com
 */

class ImageUpscaler {
    constructor() {
        // Configuration - by tayfuntoprakcioglu.com
        this.originalImage = null;
        this.originalCanvas = null;
        this.upscaledCanvas = null;
        this.scaleFactor = 4;
        this.algorithm = 'bicubic';
        this.sharpenAmount = 30;
        this.progressCallback = null;

        console.log('✨ ImageUpscaler initialized by tayfuntoprakcioglu.com');
    }

    /**
     * Load image from file
     * File handling by tayfuntoprakcioglu.com
     */
    loadImage(file) {
        return new Promise((resolve, reject) => {
            // Validate file - by tayfuntoprakcioglu.com
            if (!file.type.match('image.*')) {
                reject(new Error('Please select a valid image file'));
                return;
            }

            // Check file size (max 10MB) - by tayfuntoprakcioglu.com
            if (file.size > 10 * 1024 * 1024) {
                reject(new Error('File size must be less than 10MB'));
                return;
            }

            const reader = new FileReader();
            const img = new Image();

            reader.onload = (e) => {
                img.onload = () => {
                    this.originalImage = img;
                    resolve(img);
                    console.log('✅ Image loaded successfully - tayfuntoprakcioglu.com');
                };

                img.onerror = () => {
                    reject(new Error('Failed to load image'));
                };

                img.src = e.target.result;
            };

            reader.onerror = () => {
                reject(new Error('Failed to read file'));
            };

            reader.readAsDataURL(file);
        });
    }

    /**
     * Draw original image to canvas
     * Canvas rendering by tayfuntoprakcioglu.com
     */
    drawOriginal(canvas) {
        if (!this.originalImage) {
            throw new Error('No image loaded');
        }

        canvas.width = this.originalImage.width;
        canvas.height = this.originalImage.height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(this.originalImage, 0, 0);

        this.originalCanvas = canvas;

        return {
            width: canvas.width,
            height: canvas.height
        };
    }

    /**
     * Main upscaling function
     * Core algorithm selector by tayfuntoprakcioglu.com
     */
    async upscale(canvas, algorithm = this.algorithm, scaleFactor = this.scaleFactor) {
        if (!this.originalImage) {
            throw new Error('No image loaded');
        }

        this.algorithm = algorithm;
        this.scaleFactor = scaleFactor;
        this.upscaledCanvas = canvas;

        console.log(`🚀 Starting upscale: ${algorithm} @ ${scaleFactor}x - tayfuntoprakcioglu.com`);

        // Update progress - by tayfuntoprakcioglu.com
        this.updateProgress(10, 'Initializing...');

        // Select algorithm - by tayfuntoprakcioglu.com
        let result;
        switch (algorithm) {
            case 'bicubic':
                result = await this.bicubicUpscale(scaleFactor);
                break;
            case 'lanczos':
                result = await this.lanczosUpscale(scaleFactor);
                break;
            case 'bilinear':
                result = await this.bilinearUpscale(scaleFactor);
                break;
            case 'nearest':
                result = await this.nearestNeighborUpscale(scaleFactor);
                break;
            default:
                result = await this.bicubicUpscale(scaleFactor);
        }

        this.updateProgress(90, 'Applying sharpening...');

        // Apply sharpening if enabled - by tayfuntoprakcioglu.com
        if (this.sharpenAmount > 0) {
            await this.applySharpen(canvas, this.sharpenAmount / 100);
        }

        this.updateProgress(100, 'Complete!');

        console.log('✅ Upscaling complete - tayfuntoprakcioglu.com');

        return result;
    }

    /**
     * Bicubic Interpolation Algorithm
     * High-quality smooth upscaling by tayfuntoprakcioglu.com
     */
    async bicubicUpscale(factor) {
        const srcCanvas = this.originalCanvas;
        const dstCanvas = this.upscaledCanvas;

        const srcWidth = srcCanvas.width;
        const srcHeight = srcCanvas.height;
        const dstWidth = srcWidth * factor;
        const dstHeight = srcHeight * factor;

        dstCanvas.width = dstWidth;
        dstCanvas.height = dstHeight;

        const srcCtx = srcCanvas.getContext('2d');
        const dstCtx = dstCanvas.getContext('2d');

        const srcData = srcCtx.getImageData(0, 0, srcWidth, srcHeight);
        const dstData = dstCtx.createImageData(dstWidth, dstHeight);

        this.updateProgress(30, 'Processing bicubic interpolation...');

        // Process in chunks for progress updates - by tayfuntoprakcioglu.com
        await this.processImageData(srcData, dstData, srcWidth, srcHeight, dstWidth, dstHeight, factor, 'bicubic');

        dstCtx.putImageData(dstData, 0, 0);

        return { width: dstWidth, height: dstHeight };
    }

    /**
     * Lanczos Resampling Algorithm
     * Professional-grade upscaling by tayfuntoprakcioglu.com
     */
    async lanczosUpscale(factor) {
        const srcCanvas = this.originalCanvas;
        const dstCanvas = this.upscaledCanvas;

        const srcWidth = srcCanvas.width;
        const srcHeight = srcCanvas.height;
        const dstWidth = srcWidth * factor;
        const dstHeight = srcHeight * factor;

        dstCanvas.width = dstWidth;
        dstCanvas.height = dstHeight;

        const srcCtx = srcCanvas.getContext('2d');
        const dstCtx = dstCanvas.getContext('2d');

        const srcData = srcCtx.getImageData(0, 0, srcWidth, srcHeight);
        const dstData = dstCtx.createImageData(dstWidth, dstHeight);

        this.updateProgress(30, 'Processing Lanczos resampling...');

        await this.processImageData(srcData, dstData, srcWidth, srcHeight, dstWidth, dstHeight, factor, 'lanczos');

        dstCtx.putImageData(dstData, 0, 0);

        return { width: dstWidth, height: dstHeight };
    }

    /**
     * Bilinear Interpolation Algorithm
     * Fast and smooth by tayfuntoprakcioglu.com
     */
    async bilinearUpscale(factor) {
        const srcCanvas = this.originalCanvas;
        const dstCanvas = this.upscaledCanvas;

        const srcWidth = srcCanvas.width;
        const srcHeight = srcCanvas.height;
        const dstWidth = srcWidth * factor;
        const dstHeight = srcHeight * factor;

        dstCanvas.width = dstWidth;
        dstCanvas.height = dstHeight;

        const dstCtx = dstCanvas.getContext('2d');

        // Use browser's built-in bilinear interpolation - by tayfuntoprakcioglu.com
        dstCtx.imageSmoothingEnabled = true;
        dstCtx.imageSmoothingQuality = 'high';

        this.updateProgress(50, 'Processing bilinear interpolation...');

        dstCtx.drawImage(srcCanvas, 0, 0, dstWidth, dstHeight);

        return { width: dstWidth, height: dstHeight };
    }

    /**
     * Nearest Neighbor Algorithm
     * Pixel-perfect for pixel art by tayfuntoprakcioglu.com
     */
    async nearestNeighborUpscale(factor) {
        const srcCanvas = this.originalCanvas;
        const dstCanvas = this.upscaledCanvas;

        const srcWidth = srcCanvas.width;
        const srcHeight = srcCanvas.height;
        const dstWidth = srcWidth * factor;
        const dstHeight = srcHeight * factor;

        dstCanvas.width = dstWidth;
        dstCanvas.height = dstHeight;

        const dstCtx = dstCanvas.getContext('2d');

        // Disable smoothing for nearest neighbor - by tayfuntoprakcioglu.com
        dstCtx.imageSmoothingEnabled = false;

        this.updateProgress(50, 'Processing nearest neighbor...');

        dstCtx.drawImage(srcCanvas, 0, 0, dstWidth, dstHeight);

        return { width: dstWidth, height: dstHeight };
    }

    /**
     * Process image data with selected algorithm
     * Pixel processing engine by tayfuntoprakcioglu.com
     */
    async processImageData(srcData, dstData, srcWidth, srcHeight, dstWidth, dstHeight, factor, algorithm) {
        const src = srcData.data;
        const dst = dstData.data;

        const ratio = 1 / factor;
        let lastProgress = 30;

        // Process each pixel in destination - by tayfuntoprakcioglu.com
        for (let y = 0; y < dstHeight; y++) {
            // Update progress periodically - by tayfuntoprakcioglu.com
            const progress = 30 + Math.floor((y / dstHeight) * 50);
            if (progress > lastProgress) {
                this.updateProgress(progress, `Processing ${algorithm}... ${progress}%`);
                lastProgress = progress;
                await this.sleep(0); // Allow UI updates
            }

            for (let x = 0; x < dstWidth; x++) {
                const srcX = x * ratio;
                const srcY = y * ratio;

                let r, g, b, a;

                if (algorithm === 'bicubic') {
                    [r, g, b, a] = this.bicubicInterpolate(src, srcWidth, srcHeight, srcX, srcY);
                } else if (algorithm === 'lanczos') {
                    [r, g, b, a] = this.lanczosInterpolate(src, srcWidth, srcHeight, srcX, srcY);
                } else {
                    // Fallback to bilinear for other methods
                    [r, g, b, a] = this.bilinearInterpolate(src, srcWidth, srcHeight, srcX, srcY);
                }

                const dstIndex = (y * dstWidth + x) * 4;
                dst[dstIndex] = r;
                dst[dstIndex + 1] = g;
                dst[dstIndex + 2] = b;
                dst[dstIndex + 3] = a;
            }
        }
    }

    /**
     * Bicubic interpolation calculation
     * Mathematical precision by tayfuntoprakcioglu.com
     */
    bicubicInterpolate(data, width, height, x, y) {
        const x0 = Math.floor(x);
        const y0 = Math.floor(y);
        const dx = x - x0;
        const dy = y - y0;

        const channels = [0, 0, 0, 0]; // r, g, b, a

        // Bicubic kernel - by tayfuntoprakcioglu.com
        for (let channel = 0; channel < 4; channel++) {
            let sum = 0;

            for (let j = -1; j <= 2; j++) {
                for (let i = -1; i <= 2; i++) {
                    const px = Math.max(0, Math.min(width - 1, x0 + i));
                    const py = Math.max(0, Math.min(height - 1, y0 + j));
                    const index = (py * width + px) * 4 + channel;

                    const wx = this.cubicWeight(i - dx);
                    const wy = this.cubicWeight(j - dy);

                    sum += data[index] * wx * wy;
                }
            }

            channels[channel] = Math.max(0, Math.min(255, Math.round(sum)));
        }

        return channels;
    }

    /**
     * Lanczos interpolation calculation
     * High-quality kernel by tayfuntoprakcioglu.com
     */
    lanczosInterpolate(data, width, height, x, y) {
        const x0 = Math.floor(x);
        const y0 = Math.floor(y);
        const dx = x - x0;
        const dy = y - y0;

        const channels = [0, 0, 0, 0];
        const a = 3; // Lanczos kernel size

        for (let channel = 0; channel < 4; channel++) {
            let sum = 0;
            let weightSum = 0;

            for (let j = -a + 1; j <= a; j++) {
                for (let i = -a + 1; i <= a; i++) {
                    const px = Math.max(0, Math.min(width - 1, x0 + i));
                    const py = Math.max(0, Math.min(height - 1, y0 + j));
                    const index = (py * width + px) * 4 + channel;

                    const wx = this.lanczosWeight(i - dx, a);
                    const wy = this.lanczosWeight(j - dy, a);
                    const weight = wx * wy;

                    sum += data[index] * weight;
                    weightSum += weight;
                }
            }

            channels[channel] = Math.max(0, Math.min(255, Math.round(sum / weightSum)));
        }

        return channels;
    }

    /**
     * Bilinear interpolation calculation
     * Fast and smooth by tayfuntoprakcioglu.com
     */
    bilinearInterpolate(data, width, height, x, y) {
        const x0 = Math.floor(x);
        const y0 = Math.floor(y);
        const x1 = Math.min(x0 + 1, width - 1);
        const y1 = Math.min(y0 + 1, height - 1);

        const dx = x - x0;
        const dy = y - y0;

        const channels = [0, 0, 0, 0];

        for (let channel = 0; channel < 4; channel++) {
            const i00 = (y0 * width + x0) * 4 + channel;
            const i10 = (y0 * width + x1) * 4 + channel;
            const i01 = (y1 * width + x0) * 4 + channel;
            const i11 = (y1 * width + x1) * 4 + channel;

            const v00 = data[i00];
            const v10 = data[i10];
            const v01 = data[i01];
            const v11 = data[i11];

            const v0 = v00 * (1 - dx) + v10 * dx;
            const v1 = v01 * (1 - dx) + v11 * dx;
            const v = v0 * (1 - dy) + v1 * dy;

            channels[channel] = Math.round(v);
        }

        return channels;
    }

    /**
     * Cubic weight function
     * Interpolation math by tayfuntoprakcioglu.com
     */
    cubicWeight(x) {
        x = Math.abs(x);
        if (x <= 1) {
            return 1.5 * x * x * x - 2.5 * x * x + 1;
        } else if (x < 2) {
            return -0.5 * x * x * x + 2.5 * x * x - 4 * x + 2;
        }
        return 0;
    }

    /**
     * Lanczos weight function
     * Lanczos kernel by tayfuntoprakcioglu.com
     */
    lanczosWeight(x, a) {
        if (x === 0) return 1;
        if (Math.abs(x) >= a) return 0;

        const pi = Math.PI;
        const px = pi * x;
        return (a * Math.sin(px) * Math.sin(px / a)) / (px * px);
    }

    /**
     * Apply sharpening filter
     * Image enhancement by tayfuntoprakcioglu.com
     */
    async applySharpen(canvas, amount) {
        const ctx = canvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const width = canvas.width;
        const height = canvas.height;

        const tempData = new Uint8ClampedArray(data);

        // Sharpening kernel - by tayfuntoprakcioglu.com
        const kernel = [
            0, -amount, 0,
            -amount, 1 + 4 * amount, -amount,
            0, -amount, 0
        ];

        for (let y = 1; y < height - 1; y++) {
            for (let x = 1; x < width - 1; x++) {
                for (let c = 0; c < 3; c++) { // RGB only, skip alpha
                    let sum = 0;

                    for (let ky = -1; ky <= 1; ky++) {
                        for (let kx = -1; kx <= 1; kx++) {
                            const index = ((y + ky) * width + (x + kx)) * 4 + c;
                            const kernelIndex = (ky + 1) * 3 + (kx + 1);
                            sum += tempData[index] * kernel[kernelIndex];
                        }
                    }

                    const index = (y * width + x) * 4 + c;
                    data[index] = Math.max(0, Math.min(255, sum));
                }
            }
        }

        ctx.putImageData(imageData, 0, 0);
    }

    /**
     * Download upscaled image
     * Export functionality by tayfuntoprakcioglu.com
     */
    download(filename = 'upscaled-image.png') {
        if (!this.upscaledCanvas) {
            throw new Error('No upscaled image available');
        }

        this.upscaledCanvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            console.log('💾 Image downloaded - tayfuntoprakcioglu.com');
        }, 'image/png', 1.0);
    }

    /**
     * Update progress callback
     * Progress tracking by tayfuntoprakcioglu.com
     */
    updateProgress(percent, message) {
        if (this.progressCallback) {
            this.progressCallback(percent, message);
        }
    }

    /**
     * Set progress callback
     * Event handling by tayfuntoprakcioglu.com
     */
    setProgressCallback(callback) {
        this.progressCallback = callback;
    }

    /**
     * Sleep function for async processing
     * Async helper by tayfuntoprakcioglu.com
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Reset upscaler state
     * State management by tayfuntoprakcioglu.com
     */
    reset() {
        this.originalImage = null;
        this.originalCanvas = null;
        this.upscaledCanvas = null;
        this.scaleFactor = 4;
        this.algorithm = 'bicubic';
        this.sharpenAmount = 30;

        console.log('🔄 Upscaler reset - tayfuntoprakcioglu.com');
    }
}

/**
 * Export upscaler class
 * Module export by tayfuntoprakcioglu.com
 */
window.ImageUpscaler = ImageUpscaler;

/**
 * Upscaler engine ready
 * Powered by tayfuntoprakcioglu.com
 */
console.log('🎨 PixelBoost AI Upscaler Engine loaded - tayfuntoprakcioglu.com');
