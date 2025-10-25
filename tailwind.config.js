/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
        // Wine-Inspired Color Palette
        'ts-primary': '#722f37',
        'ts-secondary': '#8b0000',
        'ts-accent': '#d4af37',
        'ts-background': '#fef7f0',
        'ts-surface': '#FFFFFF',
        'ts-card': '#FFFFFF',
        'ts-text': '#722f37',
        'ts-text-muted': '#8b4513',
        'ts-success': '#228b22',
        'ts-warning': '#ff8c00',
        'ts-error': '#dc143c',
        'ts-border': '#e6d7c3',
        'ts-border-dark': '#b8860b',
        'ts-outline': '#722f37',
        // Theme Color Variants
        'ts-burgundy': '#722f37',
        'ts-wine-red': '#8b0000',
        'ts-gold': '#d4af37',
        'ts-amber': '#ff8c00',
        'ts-forest-green': '#228b22',
        // Burgundy Shades
        'burgundy': {
          100: '#1a0a0c',
          200: '#331418',
          300: '#4d1f24',
          400: '#662930',
          500: '#722f37',
          600: '#8b3a44',
          700: '#a44551',
          800: '#bd505e',
          900: '#d65b6b'
        },
        // Wine Red Shades
        'wine-red': {
          100: '#1a0000',
          200: '#330000',
          300: '#4d0000',
          400: '#660000',
          500: '#8b0000',
          600: '#b30000',
          700: '#cc0000',
          800: '#e60000',
          900: '#ff0000'
        },
        // Gold Shades
        'gold': {
          100: '#2a1f0a',
          200: '#543e14',
          300: '#7e5d1e',
          400: '#a87c28',
          500: '#d4af37',
          600: '#dbbf5a',
          700: '#e2cf7d',
          800: '#e9dfa0',
          900: '#f0efc3'
        },
        // Amber Shades
        'amber': {
          100: '#331a00',
          200: '#663300',
          300: '#994d00',
          400: '#cc6600',
          500: '#ff8c00',
          600: '#ff9933',
          700: '#ffa666',
          800: '#ffb399',
          900: '#ffc0cc'
        },
        // Forest Green Shades
        'forest-green': {
          100: '#0a1a0a',
          200: '#143314',
          300: '#1e4d1e',
          400: '#286628',
          500: '#228b22',
          600: '#3ca03c',
          700: '#56b556',
          800: '#70ca70',
          900: '#8adf8a'
        }
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}