import { Outfit } from 'next/font/google';
import localFont from 'next/font/local';

export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
});


export const sfProDisplay = localFont({
  
  src: [
    {
      path: './SFProDisplay-BlackItalic.woff',
      weight: '900',
      style: 'italic',
    },
    {
      path: './SFProDisplay-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './SFProDisplay-HeavyItalic.woff',
      weight: '800',
      style: 'italic',
    },
    {
      path: './SFProDisplay-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: './SFProDisplay-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './SFProDisplay-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SFProDisplay-SemiboldItalic.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: './SFProDisplay-ThinItalic.woff',
      weight: '100',
      style: 'italic',
    },
    {
      path: './SFProDisplay-UltralightItalic.woff',
      weight: '200',
      style: 'italic',
    },
  ],
  variable: '--font-sf',
  style: ''
});
