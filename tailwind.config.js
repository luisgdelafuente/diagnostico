export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        canvas: '#0A0A0B',
        surface: '#141416',
        raised: '#1B1B1E',
        ink: '#F5F5F4',
        muted: '#8A8A85',
        signal: '#C8F751',
        hairline: 'rgba(255,255,255,0.08)',
      },
      borderColor: {
        DEFAULT: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
}
