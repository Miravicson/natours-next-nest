import sharp from 'sharp';

export function createCustomImageTransformer() {
  return sharp()
    .resize(800, 600, {
      fit: 'cover',
    })
    .webp({ quality: 90 });
}
