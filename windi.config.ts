import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import wundercomm_colors, { wundergreen } from './assets/wundercomm_colors'

export default defineConfig({
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            // screens: {
            //     'sm': '640px',
            //     'md': '768px',
            //     'lg': '1024px',
            //     'xl': '1280px',
            //     '2xl': '1536px',
            // },
            colors: {
                gray: colors.gray,
                blue: colors.sky,
                red: colors.rose,
                pink: colors.fuchsia,
                darker: {
                    '50': '#cdd0e4',
                    '100': '#b5bad6',
                    '200': '#9ea4c8',
                    '300': '#888fb8',
                    '400': '#727aa8',
                    '500': '#5f6795',
                    '600': '#53597c',
                    '700': '#454a64',
                    '800': '#373a4d',
                    '900': '#282a36',
                    DEFAULT: '#282a36'
                },
                nosferatu: wundercomm_colors.nosferatu,
                wundergreen: wundercomm_colors.wundergreen,
                wunderpink: wundercomm_colors.pink
            },
            // fontFamily: {
            //     sans: ['Graphik', 'sans-serif'],
            //     serif: ['Merriweather', 'serif'],
            // },
            // spacing: {
            //     128: '32rem',
            //     144: '36rem',
            // },
            // borderRadius: {
            //     '4xl': '2rem',
            // },
        },
    },
    // plugins: [
    //     require('tailwind-dracula')(),
    //   ]
    /* configurations... */
})
