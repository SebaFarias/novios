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
      'manus': ['Imperial Script',],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
        appeartransbold: {
          '0%': { opacity:'0',},
          '100%':{ opacity: '0.6'},
        },
      },
    }
  },
  plugins: [],
}
export default config