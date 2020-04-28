// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }

export default {
    up(size) {
        const sizes = {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px'            
        }
        return `@media (min-width: ${sizes[size]})`;
    },
    down(size) {
        const sizes = {
            xs: '575.98px',
            sm: '767.98px',
            md: '991.98px',
            lg: '1199.98px',
            xl: '1599.98px'            
        }
        return `@media (max-width: ${sizes[size]})`;
    }
}
