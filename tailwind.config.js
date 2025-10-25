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
        // Vibrant Bold Color Palette
        'ts-primary': '#390099',
        'ts-secondary': '#9e0059',
        'ts-accent': '#ffbd00',
        'ts-background': '#fff1cc',
        'ts-surface': '#FFFFFF',
        'ts-card': '#FFFFFF',
        'ts-text': '#390099',
        'ts-text-muted': '#22005c',
        'ts-success': '#ff5400',
        'ts-warning': '#ffbd00',
        'ts-error': '#ff0054',
        'ts-border': '#ffd666',
        'ts-border-dark': '#ff7733',
        'ts-outline': '#390099',
        // Theme Color Variants
        'ts-duke-blue': '#390099',
        'ts-murrey': '#9e0059',
        'ts-folly': '#ff0054',
        'ts-orange-pantone': '#ff5400',
        'ts-amber': '#ffbd00',
        // Duke Blue Shades
        'duke-blue': {
          100: '#0b001f',
          200: '#16003d',
          300: '#22005c',
          400: '#2d007a',
          500: '#390099',
          600: '#5200e0',
          700: '#7729ff',
          800: '#a570ff',
          900: '#d2b8ff'
        },
        // Murrey Shades
        'murrey': {
          100: '#200012',
          200: '#3f0024',
          300: '#5f0036',
          400: '#7e0048',
          500: '#9e0059',
          600: '#e40081',
          700: '#ff2ca4',
          800: '#ff72c2',
          900: '#ffb9e1'
        },
        // Folly Shades
        'folly': {
          100: '#330011',
          200: '#660022',
          300: '#990033',
          400: '#cc0044',
          500: '#ff0054',
          600: '#ff3377',
          700: '#ff6699',
          800: '#ff99bb',
          900: '#ffccdd'
        },
        // Orange (Pantone) Shades
        'orange-pantone': {
          100: '#331100',
          200: '#662200',
          300: '#993300',
          400: '#cc4400',
          500: '#ff5400',
          600: '#ff7733',
          700: '#ff9966',
          800: '#ffbb99',
          900: '#ffddcc'
        },
        // Amber Shades
        'amber': {
          100: '#332500',
          200: '#664b00',
          300: '#997000',
          400: '#cc9600',
          500: '#ffbd00',
          600: '#ffc933',
          700: '#ffd666',
          800: '#ffe499',
          900: '#fff1cc'
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