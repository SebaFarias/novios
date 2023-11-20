import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'manus': ['Imperial Script','cursive'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation:{
        fadein: 'appear 2s ease-in forwards',
        fadeintrans: 'appeartrans 1s ease-out',
        fadeinfast: 'appear 1s ease-out forwards',
        fadeinwait: 'appear 2s ease-in 1s forwards',
      },
      keyframes:{
        appear: {
          '0%': { opacity:'0',},
          '100%':{ opacity: '1'},
        },
        appeartrans: {
          '0%': { opacity:'0',},
          '100%':{ opacity: '0.3'},
        },
      },
    }
  },
  plugins: [],
}
export default config