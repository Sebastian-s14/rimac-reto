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
                // textSecondary: 'var(--text-secondary)',
                placeholder: 'var(--placeholder)',
                linearGradient: 'var(--linear-gradient)',
                border: 'var(--border)',
            },
        },
    },
    plugins: [],
}
