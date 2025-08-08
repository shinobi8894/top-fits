import React from 'react'

export const STEP_DATA = [
    {
        svg: (
            <svg className="!w-full max-w-[75px] !h-full" viewBox="0 0 74 74" fill="none">
                <path d="M39.0864 69.8982L70.5409 38.4116C73.0444 35.876 73.3012 34.3995 73.3012 30.7405V18.576C73.3012 15.0133 72.4667 13.7936 69.8668 11.1938L62.5168 3.84374C59.8849 1.24393 58.6652 0.409424 55.1346 0.409424H42.938C39.3111 0.409424 37.8346 0.666195 35.3311 3.20181L3.81244 34.6563C-1.00203 39.4708 -1.06622 44.5741 3.84453 49.4206L24.322 69.8982C29.2007 74.7447 34.2719 74.7126 39.0864 69.8982ZM49.4856 27.1778C46.8537 27.1778 44.8637 25.1558 44.8637 22.5559C44.8637 19.9882 46.8537 17.9341 49.4856 17.9341C52.1175 17.9341 54.1075 19.9882 54.1075 22.5559C54.1075 25.1558 52.1175 27.1778 49.4856 27.1778Z" fill="#101010" />

            </svg>
        ),
        number: '15,000',
        suffix: '+',
        description: 'Products have been sourced since the start of the website.',
        rounded: { tl: true, bl: true, noRight: false }
    },
    {
        svg: (
            <svg className="!w-full max-w-[75px] !h-full" viewBox="0 0 95 60" fill="none">
                <path d="M0.381592 56.3478C0.381592 58.1613 1.59059 59.4058 3.43964 59.4058H91.1274C92.9765 59.4058 94.1854 58.1613 94.1854 56.3478V3.1164C94.1854 1.26735 92.9765 0.0583496 91.1274 0.0583496H3.43964C1.59059 0.0583496 0.381592 1.26735 0.381592 3.1164V56.3478ZM7.88448 49.9472V9.51696C7.88448 8.20129 8.56009 7.56124 9.80465 7.56124H84.798C86.007 7.56124 86.7181 8.20129 86.7181 9.51696V49.9472C86.7181 51.2273 86.007 51.9029 84.798 51.9029H9.80465C8.56009 51.9029 7.88448 51.2273 7.88448 49.9472ZM11.7959 47.1736C11.7959 47.707 12.0804 47.9559 12.5782 47.9559H39.0695C35.6203 44.2578 33.5934 37.8217 33.5934 29.6787C33.5934 21.6069 35.6203 15.2064 39.0339 11.4727H12.5782C12.0804 11.4727 11.7959 11.7572 11.7959 12.255V47.1736ZM55.4265 47.9559H82.0244C82.4866 47.9559 82.7711 47.707 82.7711 47.1736V12.255C82.7711 11.7572 82.4866 11.4727 82.0244 11.4727H55.462C58.9823 15.2064 61.0447 21.6069 61.0447 29.6787C61.0447 37.8217 58.9468 44.2578 55.4265 47.9559ZM38.0738 29.6787C38.0738 40.3108 41.7719 47.1736 47.1413 47.1736C52.724 47.1736 56.5288 40.3108 56.5288 29.6787C56.5288 19.0823 52.724 12.255 47.1413 12.255C41.7719 12.255 38.0738 19.0823 38.0738 29.6787Z" fill="#101010" />

            </svg>
        ),
        number: '$2.6',
        suffix: 'M',
        description: 'Worth of products have been purchased since the year 2016.',
        rounded: { noLeft: true, noRight: false }
    },
    {
        svg: (
            <svg className="!w-full max-w-[75px] !h-full" viewBox="0 0 74 69" fill="none">
                <path d="M36.9713 68.5862C37.9137 68.5862 39.291 67.8613 40.4146 67.1364C60.6754 54.0883 73.651 38.793 73.651 23.3165C73.651 9.94223 64.4086 0.663574 52.8465 0.663574C45.6338 0.663574 40.2333 4.6505 36.9713 10.5946C33.7818 4.6505 28.3451 0.663574 21.1324 0.663574C9.53403 0.663574 0.291626 9.94223 0.291626 23.3165C0.291626 38.793 13.3035 54.0883 33.5281 67.1364C34.6516 67.8613 36.0289 68.5862 36.9713 68.5862Z" fill="#101010" />

            </svg>
        ),
        number: '100',
        suffix: '%',
        description: 'Satisfaction guarantee offered on all our products.',
        rounded: { noLeft: true, noRight: false }
    },
    {
        svg: (
            <svg className="!w-full max-w-[75px] !h-full" viewBox="0 0 83 79" fill="none">
                <path d="M41.2324 0.760986L50.9307 30.6092H82.3149L56.9246 49.0563L66.6228 78.9045L41.2324 60.4573L15.8421 78.9045L25.5403 49.0563L0.149963 30.6092H31.5342L41.2324 0.760986Z" fill="#101010" />
            </svg>
        ),
        number: '2,000',
        suffix: '+',
        description: '5 Star reviews have been posted regarding our service.',
        rounded: { tr: true, br: true, noLeft: true }
    }
]



export const GUIDE_STEPS = [
    {
        step: 'STEP ONE',
        title: 'Search for an item',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sapien et justo ullamcorper malesuada. Vivamus rhoncus, lacus sed feugiat scelerisque, libero sapien sagittis',
        img: '/assets/imgs/search-item.png',
    },
    {
        step: 'STEP TWO',
        title: 'Head to supplier',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sapien et justo ullamcorper malesuada. Vivamus rhoncus, lacus sed feugiat scelerisque, libero sapien sagittis',
        img: '/assets/imgs/supplier.png',
    },
    {
        step: 'STEP THREE',
        title: 'Purchase and enjoy!',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sapien et justo ullamcorper malesuada. Vivamus rhoncus, lacus sed feugiat scelerisque, libero sapien sagittis',
        img: '/assets/imgs/purchase.png',
    },
]