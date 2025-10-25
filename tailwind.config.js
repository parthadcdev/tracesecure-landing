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
        // Ocean & Sunset Color Palette
        'ts-primary': '#023047',
        'ts-secondary': '#219ebc',
        'ts-accent': '#8ecae6',
        'ts-background': '#e8f4fa',
        'ts-surface': '#FFFFFF',
        'ts-card': '#FFFFFF',
        'ts-text': '#023047',
        'ts-text-muted': '#1b5c7a',
        'ts-success': '#219ebc',
        'ts-warning': '#ffb703',
        'ts-error': '#fb8500',
        'ts-border': '#bbdff0',
        'ts-border-dark': '#51aed9',
        'ts-outline': '#023047',
        // Theme Color Variants
        'ts-sky-blue': '#8ecae6',
        'ts-blue-green': '#219ebc',
        'ts-prussian-blue': '#023047',
        'ts-selective-yellow': '#ffb703',
        'ts-ut-orange': '#fb8500',
        // Sky Blue Shades
        'sky-blue': {
          100: '#0d2e3d',
          200: '#1b5c7a',
          300: '#288ab7',
          400: '#51aed9',
          500: '#8ecae6',
          600: '#a5d5eb',
          700: '#bbdff0',
          800: '#d2eaf5',
          900: '#e8f4fa'
        },
        // Blue Green Shades
        'blue-green': {
          100: '#071f25',
          200: '#0d3e4b',
          300: '#145d70',
          400: '#1a7d95',
          500: '#219ebc',
          600: '#39bcdc',
          700: '#6bcce5',
          800: '#9cddee',
          900: '#ceeef6'
        },
        // Prussian Blue Shades
        'prussian-blue': {
          100: '#00090e',
          200: '#01131c',
          300: '#011c2a',
          400: '#012638',
          500: '#023047',
          600: '#04699b',
          700: '#06a3f1',
          800: '#54c3fb',
          900: '#a9e1fd'
        },
        // Selective Yellow Shades
        'selective-yellow': {
          100: '#342500',
          200: '#684b00',
          300: '#9c7000',
          400: '#d09500',
          500: '#ffb703',
          600: '#ffc637',
          700: '#ffd569',
          800: '#ffe39b',
          900: '#fff1cd'
        },
        // UT Orange Shades
        'ut-orange': {
          100: '#321b00',
          200: '#643500',
          300: '#965000',
          400: '#c86b00',
          500: '#fb8500',
          600: '#ff9e2f',
          700: '#ffb663',
          800: '#ffce97',
          900: '#ffe7cb'
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