import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-sidebar-desktop':
          "url('../public/assets/images/bg-sidebar-desktop.svg')",
        'bg-sidebar-mobile':
          "url('../public/assets/images/bg-sidebar-mobile.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-ubuntu)'],
      },
      colors: {
        marine: 'hsl(213, 96%, 18%)',
        purplish: 'hsl(243, 100%, 62%)',
        lightBlue: 'hsl(228, 100%, 84%)',
        strawberry: 'hsl(354, 84%, 57%)',
        coolGray: 'hsl(231, 11%, 63%)',
        lightGray: 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}
export default config
