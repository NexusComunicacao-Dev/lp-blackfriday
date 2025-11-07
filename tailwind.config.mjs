/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Cores da marca Nexus
        nexus: {
          tech: '#606060',          // Tecnológica
          respect: '#034BD3',       // Respeitosa
          creative: '#FF7C1A',      // Criativa (backgrounds)
          'creative-dark': '#CC5500', // Criativa escura (texto em branco) - WCAG AA
          modern: '#FFFFFF',        // Moderna
        },
        // Cores da Black Friday
        bf: {
          black: '#000000',
          gold: '#FFD700',          // Dourado (backgrounds)
          'gold-dark': '#B8860B',   // Dourado escuro (texto em branco) - WCAG AA
          'gray-dark': '#1a1a1a',
          purple: '#7C3AED',        // Roxo para CTAs
          'dark-red': '#991B1B',    // Vermelho escuro para CTAs
        }
      },
      fontFamily: {
        geologica: ['Geologica', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
