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
        // Dark Purple/Violet Color Palette
        'ts-primary': '#10002b',
        'ts-secondary': '#3c096c',
        'ts-accent': '#c77dff',
        'ts-background': '#f9eeff',
        'ts-surface': '#f2dcff',
        'ts-card': '#eccbff',
        'ts-text': '#10002b',
        'ts-text-muted': '#3c096c',
        'ts-success': '#5a189a',
        'ts-warning': '#7b2cbf',
        'ts-error': '#9d4edd',
        'ts-border': '#5a189a',
        'ts-border-dark': '#7b2cbf',
        'ts-outline': '#e0aaff',
        // Theme Color Variants
        'ts-russian-violet': '#10002b',
        'ts-persian-indigo': '#3c096c',
        'ts-tekhelet': '#5a189a',
        'ts-french-violet': '#7b2cbf',
        'ts-amethyst': '#9d4edd',
        'ts-heliotrope': '#c77dff',
        'ts-mauve': '#e0aaff',
        // Russian Violet Shades
        'russian-violet': {
          100: '#030008',
          200: '#060010',
          300: '#090018',
          400: '#0c0021',
          500: '#10002b',
          600: '#310087',
          700: '#5400e4',
          800: '#8843ff',
          900: '#c4a1ff'
        },
        // Persian Indigo Shades
        'persian-indigo': {
          100: '#0c0216',
          200: '#18042b',
          300: '#240541',
          400: '#300757',
          500: '#3c096c',
          600: '#650fb5',
          700: '#8d25ed',
          800: '#b36ef3',
          900: '#d9b6f9'
        },
        // Tekhelet Shades
        'tekhelet': {
          100: '#12051f',
          200: '#240a3e',
          300: '#360e5d',
          400: '#47137c',
          500: '#5a189a',
          600: '#7a21d4',
          700: '#9c53e4',
          800: '#bd8ced',
          900: '#dec6f6'
        },
        // French Violet Shades
        'french-violet': {
          100: '#180926',
          200: '#31114c',
          300: '#491a73',
          400: '#622399',
          500: '#7b2cbf',
          600: '#954bd6',
          700: '#b078e0',
          800: '#caa5eb',
          900: '#e5d2f5'
        },
        // Amethyst Shades
        'amethyst': {
          100: '#200a33',
          200: '#401365',
          300: '#601d98',
          400: '#8127ca',
          500: '#9d4edd',
          600: '#b172e4',
          700: '#c596eb',
          800: '#d8b9f2',
          900: '#ecdcf8'
        },
        // Heliotrope Shades
        'heliotrope': {
          100: '#2b004d',
          200: '#570099',
          300: '#8200e6',
          400: '#a733ff',
          500: '#c77dff',
          600: '#d399ff',
          700: '#deb3ff',
          800: '#e9ccff',
          900: '#f4e5ff'
        },
        // Mauve Shades
        'mauve': {
          100: '#360055',
          200: '#6b00a9',
          300: '#a100fe',
          400: '#c054ff',
          500: '#e0aaff',
          600: '#e6baff',
          700: '#eccbff',
          800: '#f2dcff',
          900: '#f9eeff'
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