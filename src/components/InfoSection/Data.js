export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'The trailer',
    headline: 'Thrilling Preview',
    description: 'Experience a tantalizing glimpse of this captivating game through this brief trailer. Let it spark your interest and inspire you to download the game immediately!',
    buttonLabel: 'Download Now!',
    imgStart: false,
    video: require('../../videos/wrtrailer.mp4').default, // Video added here
    alt: 'Gameplay',
    dark: true,
    primary: true,
    darkText: false,
    downloadUrl: 'https://apps.apple.com/us/app/wristroad/id6468395372' // Your game's download link

};


export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'The Game',
    headline: 'WristRoad',
    description: 'Experience high-octane excitement with our Apple Watch car game, where precision and timing are key to mastering the tracks. Navigate through dynamic obstacles and collect coins, all while managing your cars speed and power-ups on a visually stunning race track. Perfect for quick gaming sessions, this game transforms your Apple Watch into a thrilling raceway, offering an innovative and engaging way to enjoy gaming on the go.',
    buttonLabel: "Download Now!",
    imgStart: true,
    img: require('../../images/icon_converted.png').default,
    alt: 'Planet',
    dark: false,
    primary: false,
    darkText: true,
};
