module.exports = {
  content: [
    '*.html',
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#CB9E50",
        'secondary': '#5C444C',
        'border': '#2F2F2F'
      },
      spacing: {
        'xs': '15px',
        s: '30px',
        m: '60px',
        l: '90px',
        'xl': '120px',
        'xxl': '150px',
        88: '22rem',
        '5/20': 'calc(25% - 168px)',
        '4/10margin': 'calc(40% - 45px)',
        '6/10margin': 'calc(60% - 45px)',
        '82/100': '82%',
        'timeline-mobile': 'calc(100% - 32px - 20px)',
      },
      fontFamily: {
        'primary': ['Source Code Pro'],
      },
      fontSize: {
        'h1': ['70px', { lineHeight: '92px' }],
        'h1mobile': ['38px', { lineHeight: '49px' }],
        'h2': ['38px', { lineHeight: '50px' }],
        'h2mobile': ['29px', { lineHeight: '38px' }],
        'h3': ['28px', { lineHeight: '37px' }],
        'h3mobile': '22px',
        'small': ['12px', { lineHeight: '18px'}]
      },
      maxWidth: {
        '8xl': '88rem',
        '1/2': '50%',
        '82/100': '82%',
      },
    },
  },
  plugins: [],
}
