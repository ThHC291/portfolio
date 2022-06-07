module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF4C29',
        'secondary': '#334756',
        'main-color': '#2C394B',
        'bg-color': '#082032',

        'th-background': 'var(--background)',
        'th-background-secondary': 'var(--background-secondary)',
        'th-foreground': 'var(--foreground)',
        'th-primary-dark': 'var(--primary-dark)',
        'th-primary-medium': 'var(--primary-medium)',
        'th-primary-light': 'var(--primary-light)',
        'th-accent-dark': 'var(--accent-dark)',
        'th-accent-medium': 'var(--accent-medium)',
        'th-accent-light': 'var(--accent-light)'
      },
    },
  },
  plugins: [],
}
