const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS_320px: `screen and (max-width: ${size.mobileS})`,
    mobileM_375px: `screen and (max-width: ${size.mobileM})`,
    mobileL_425px: `screen and (max-width: ${size.mobileL})`,
    tablet_768px: `screen and (max-width: ${size.tablet})`,
    laptop_1024px: `screen and (max-width: ${size.laptop})`,
    laptopL_1440px: `screen and (max-width: ${size.laptopL})`,
    desktop_2560px: `screen and (max-width: ${size.desktop})`,
};