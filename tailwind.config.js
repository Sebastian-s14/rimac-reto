/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                'highlight-primary': 'var(--hightlight-primary)',
                'highlight-secondary': 'var(--hightlight-secondary)',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                // textPrimary: 'var(--text-primary)',
                title: 'var(--title)',
                subtitle: 'var(--subtitle)',
                placeholder: 'var(--placeholder)',
                linearGradient: 'var(--linear-gradient)',
                border: 'var(--border)',
                checkbox: 'var(--checkbox)',
            },
            boxShadow: {
                card: '0px 1px 24px 0px #AEACF340',
                card2: '0px 1px 32px 0px #AEACF359',
            },
            gridTemplateColumns: {
                custom: 'repeat(12, 64px)',
            },
            backgroundImage: {
                'linear-gradient': 'var(--linear-gradient)',
            },
        },
    },
    plugins: [],
}
