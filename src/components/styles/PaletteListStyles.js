import sizes from './sizes';
import bg from './bg.svg';

export default {
    "@global": {
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: 'opacity 500ms ease-out'
        }
    },
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        /* background by SVGBackgrounds.com */
        backgroundColor: '#f4e3f4',
        backgroundImage: `url(${bg})`,
        overflow: 'scroll',
        "& h1": {
            fontSize: '2rem'
        }
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        [sizes.down('xl')]: {
            width: '80%'
        },
        [sizes.down('xs')]: {
            width: '75%'
        }
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        "& a": {
            color: 'white',
            textShadow: `
                1px 1px 0 #000,
                -1px -1px 0 #000,  
                1px -1px 0 #000,
                -1px 1px 0 #000,
                1px 1px 0 #000;
            `
        },
        textShadow: `
            3px 3px 0 #000,
            -1px -1px 0 #000,  
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
        `
    },
    palettes: {
        boxSizing: 'borderBox',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '2.5rem',
        '& a': {
            textDecoration: 'none'
        },
        [sizes.down('md')]: {
            gridTemplateColumns: 'repeat(2, 50%)'
        },
        [sizes.down('xs')]: {
            gridTemplateColumns: 'repeat(1, 100%)',
            gridGap: '1.4rem'
        }
    }
};
