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
        // High-Contrast Dark Blue & Gold Theme
        'ts-primary': '#011638',
        'ts-secondary': '#0d21a1',
        'ts-accent': '#eec643',
        'ts-background': '#eef0f2',
        'ts-surface': '#ffffff',
        'ts-card': '#fcfcfc',
        'ts-text': '#141414',
        'ts-text-muted': '#0d21a1',
        'ts-success': '#0d21a1',
        'ts-warning': '#eec643',
        'ts-error': '#9d0208',
        'ts-border': '#0d21a1',
        'ts-border-dark': '#011638',
        'ts-outline': '#eec643',
        // Accent variants for compatibility
        'ts-accent-blue': '#0d21a1',
        'ts-accent-purple': '#011638',
        'ts-accent-orange': '#eec643',
        // Theme Color Variants (keeping old names for component compatibility)
        'ts-russian-violet': '#011638',
        'ts-persian-indigo': '#0d21a1',
        'ts-tekhelet': '#0d21a1',
        'ts-french-violet': '#0d21a1',
        'ts-amethyst': '#0d21a1',
        'ts-heliotrope': '#eec643',
        'ts-mauve': '#eec643',
        // Saffron Shades
        'saffron': {
          100: '#382c05',
          200: '#70580a',
          300: '#a88410',
          400: '#e0b115',
          500: '#eec643',
          600: '#f1d26a',
          700: '#f5dd8f',
          800: '#f8e8b4',
          900: '#fcf4da'
        },
        // Night Shades
        'night': {
          100: '#040404',
          200: '#080808',
          300: '#0c0c0c',
          400: '#101010',
          500: '#141414',
          600: '#434343',
          700: '#727272',
          800: '#a1a1a1',
          900: '#d0d0d0'
        },
        // Anti-Flash White Shades
        'anti_flash_white': {
          100: '#2a3036',
          200: '#53606c',
          300: '#81909e',
          400: '#b8c0c8',
          500: '#eef0f2',
          600: '#f1f3f4',
          700: '#f5f6f7',
          800: '#f8f9fa',
          900: '#fcfcfc'
        },
        // Zaffre Shades
        'zaffre': {
          100: '#030720',
          200: '#050d40',
          300: '#081460',
          400: '#0a1a80',
          500: '#0d21a1',
          600: '#122ddf',
          700: '#445bf0',
          800: '#8292f5',
          900: '#c1c8fa'
        },
        // Oxford Blue Shades
        'oxford_blue': {
          100: '#00040b',
          200: '#000916',
          300: '#010d21',
          400: '#01112c',
          500: '#011638',
          600: '#033990',
          700: '#055ce9',
          800: '#4d90fb',
          900: '#a6c7fd'
        },
        // Alice Blue Shades (legacy)
        'alice_blue': {
          100: '#06375a',
          200: '#0c6eb3',
          300: '#2fa0f1',
          400: '#89c9f7',
          500: '#e3f2fd',
          600: '#e8f5fd',
          700: '#eef7fe',
          800: '#f4fafe',
          900: '#f9fcff'
        },
        // Uranian Blue Shades
        'uranian_blue': {
          100: '#053053',
          200: '#0a60a6',
          300: '#168ff1',
          400: '#69b7f6',
          500: '#bbdefb',
          600: '#c9e5fc',
          700: '#d7ebfd',
          800: '#e4f2fd',
          900: '#f2f8fe'
        },
        // Light Sky Blue Shades
        'light_sky_blue': {
          100: '#042b4b',
          200: '#085695',
          300: '#0c80e0',
          400: '#45a6f5',
          500: '#90caf9',
          600: '#a6d4fa',
          700: '#bcdffb',
          800: '#d2eafd',
          900: '#e9f4fe'
        },
        // Argentinian Blue Shades (variant 1)
        'argentinian_blue_light': {
          100: '#042642',
          200: '#084c83',
          300: '#0b71c5',
          400: '#2395f2',
          500: '#64b5f6',
          600: '#84c4f8',
          700: '#a2d2fa',
          800: '#c1e1fb',
          900: '#e0f0fd'
        },
        // Argentinian Blue Shades (variant 2)
        'argentinian_blue': {
          100: '#03223b',
          200: '#064476',
          300: '#0966b1',
          400: '#0c88ec',
          500: '#42a5f5',
          600: '#68b7f7',
          700: '#8ec9f9',
          800: '#b3dbfb',
          900: '#d9edfd'
        },
        // Dodger Blue Shades
        'dodger_blue': {
          100: '#031e34',
          200: '#063c69',
          300: '#085a9d',
          400: '#0b78d1',
          500: '#2196f3',
          600: '#4daaf6',
          700: '#79bff8',
          800: '#a6d4fa',
          900: '#d2eafd'
        },
        // Bleu de France Shades
        'bleu_de_france': {
          100: '#051b2f',
          200: '#0b375d',
          300: '#10528c',
          400: '#166eba',
          500: '#1e88e5',
          600: '#4ca0ea',
          700: '#79b8ef',
          800: '#a6d0f5',
          900: '#d2e7fa'
        },
        // French Blue Shades
        'french_blue': {
          100: '#05172a',
          200: '#0a2f54',
          300: '#0f467e',
          400: '#145ea8',
          500: '#1976d2',
          600: '#3a91e8',
          700: '#6bacee',
          800: '#9cc8f3',
          900: '#cee3f9'
        },
        // Green Blue Shades
        'green_blue': {
          100: '#041427',
          200: '#09294d',
          300: '#0d3d74',
          400: '#11519a',
          500: '#1565c0',
          600: '#2a82e7',
          700: '#5fa2ed',
          800: '#95c1f3',
          900: '#cae0f9'
        },
        // Cobalt Blue Shades
        'cobalt_blue': {
          100: '#030e20',
          200: '#051d40',
          300: '#082b60',
          400: '#0a3a80',
          500: '#0d47a1',
          600: '#1264df',
          700: '#4489f0',
          800: '#82b0f5',
          900: '#c1d8fa'
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