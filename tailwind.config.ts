import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'play-icon': "url('/play-button.svg')",
        'pause-icon': "url('/pause.svg')",
        'fast-forward-icon': "url('/fast-forward.svg')",
        'reset-icon': "url('/refresh.svg')",
        'twitter-icon': "url('/twitter.svg')",
        'github-icon': "url('/github-sign.svg')",
        'linkedin-icon': "url('/linkedin.svg')",
        'darkmode-icon': "url('/night-mode.svg')",
        'layered-peaks': "url('/layered-peaks.svg')",
      },
    },
  },
  plugins: [],
}
export default config
