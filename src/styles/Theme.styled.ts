export const myTheme = {
    default: {
        bgCol: {
            header: {
                top: "rgba(244, 244, 245, 1)",
                bottom: "rgba(0, 166, 81, 1)",
                menu: {
                    textDecorationLink: "white",
                    submenu: "white"
                }                 
            },
            btn: {
                primary: "rgba(0, 166, 81, 1)",
                secondary: "rgba(245, 130, 32, 1)",
                primaryHover: "linear-gradient(225.00deg, rgb(0, 176, 101) 46.498%, rgb(28, 255, 158) 100%)",
                secondaryHover: "linear-gradient(225.00deg, rgb(245, 130, 32) 49.939%,rgb(255, 216, 183) 100%)" 
            },            
            default: "white",
            defaultHover: "#1D1F24",
            firstLinkMenu: "rgba(91, 238, 208, 0.2)",
            firstLinkMenuHover: "rgba(245, 130, 32, 1)",
            swiperPaginationBulletActive: "rgba(245, 130, 32, 1)",
            homePage: {
                advantages: {
                    0: "rgba(213, 243, 238, 1)",
                    1: "rgba(160, 228, 220, 1)",
                    2:"rgba(245, 130, 32, 0.5)",
                    3: "rgba(231, 236, 240, 1)"
                }
            }
        },

        color: {
            primary: "rgba(0, 166, 81, 1)",
            secondary: "rgba(245, 130, 32, 1)",
            outline: "transparent",
            defaultText: "rgb(29, 31, 36)", 
            defaultTextHover: "white",          
            defaultBtn: "white",
            multiСhannel: "rgba(151, 151, 151, 1)",
            defaultLinkMenu: "white",
            activeLinkMenu: "rgba(255, 255, 255, .8)",
            firstLinkMenu: "white",
            borderVisuallyImpairedPanelBtn: "black",
            fillContactIcon: "#1D1F24",
            placeholder: "#6b6b6b"
        },

        childrenCount: {
            primary: "rgba(245, 130, 32, 1)",
            secondary: "rgb(0, 166, 81)",
            totalColor: "white",
            bgTotalColor: "rgba(245, 130, 32, 1)",
            borderColor: "transparent" 
        },
        homeSlider: {
            orange: "rgba(245, 130, 32, 1)",
            green: "rgba(0, 166, 81, 1)",
            black: "rgba(29, 31, 36, 1)",
            white: "rgba(255, 255, 255, 1)"
        },

        filterLogo: "none",
        filter: "none",

        media: {
            tablet: "screen and (max-width: 767px)",
            mobile: "screen and (max-width: 576px)"
        }
    },

    light: {
        bgCol: {
            header: {
                top: "rgba(255, 255, 255, 1)",
                bottom: "rgba(255, 255, 255, 1)",
                menu: {
                    textDecorationLink: "black",
                    submenu: "rgba(255, 255, 255, 1)"
                }                    
            },
            btn: {
                primary: "rgba(255, 255, 255, 1)",
                secondary: "rgba(255, 255, 255, 1)",
                primaryHover: "rgba(0, 0, 0, .4)",
                secondaryHover: "rgba(0, 0, 0, .4)"
            },            
            default: "white",
            defaultHover: "rgba(0, 0, 0, .4)",
            firstLinkMenu: "rgba(0, 0, 0, 1)",
            firstLinkMenuHover: "#6b6b6b",
            swiperPaginationBulletActive: "rgba(0, 0, 0, 1)",
            homePage: {
                advantages: {
                    0: "rgba(255, 255, 255, 1)",
                    1: "rgba(255, 255, 255, 1)",
                    2: "rgba(255, 255, 255, 1)",
                    3: "rgba(255, 255, 255, 1)"
                }
            }
        },

        color: {
            primary: "rgba(0, 0, 0, 1)",
            secondary: "rgba(0, 0, 0, 1)",
            outline: "black",
            defaultText: "black", 
            defaultTextHover: "black",          
            defaultBtn: "black",
            multiСhannel: "rgba(151, 151, 151, 1)", // фраза многоканальный
            defaultLinkMenu: "black",
            activeLinkMenu: "#6b6b6b",
            firstLinkMenu: "white",
            borderVisuallyImpairedPanelBtn: "black",
            fillContactIcon: "black",
            placeholder: "rgb(29, 31, 36)"
        },

        childrenCount: {
            primary: "black",
            secondary: "black",
            totalColor: "black",
            bgTotalColor: "white",
            borderColor: "black" 
        },

        homeSlider: {            
            color: "black",
            transparent: "transparent"
        },

        filterLogo: "grayscale(100%)",
        filter: "grayscale(100%)",
        
        media: {
            tablet: "screen and (max-width: 767px)",
            mobile: "screen and (max-width: 576px)"
        }
    },

    dark: {
        bgCol: {
            header: {
                top: "rgba(0, 0, 0, 1)",
                bottom: "rgba(0, 0, 0, 1)",
                menu: {
                    textDecorationLink: "white",
                    submenu: "rgba(0, 0, 0, 1)"
                }    
            },
            btn: {
                primary: "rgba(0, 0, 0, 1)",
                secondary: "rgba(0, 0, 0, 1)",
                primaryHover: "rgba(255, 255, 255, .2)",
                secondaryHover: "rgba(255, 255, 255, .2)"
            },            
            default: "black",
            defaultHover: "#6b6b6b",
            firstLinkMenu: "rgba(255, 255, 255, 1)",
            firstLinkMenuHover: "rgba(255, 255, 255, .7)",
            swiperPaginationBulletActive: "rgba(0, 0, 0, 1)",
            homePage: {
                advantages: {
                    0: "rgba(0, 0, 0, 1)",
                    1: "rgba(0, 0, 0, 1)",
                    2: "rgba(0, 0, 0, 1)",
                    3: "rgba(0, 0, 0, 1)"
                }
            }
        },

        color: {
            primary: "rgba(255, 255, 255, 1)",
            secondary: "rgba(255, 255, 255, 1)",
            outline: "white",
            defaultText: "white",
            defaultTextHover: "white",            
            defaultBtn: "white",
            multiСhannel: "rgba(255, 255, 255, .8)",
            defaultLinkMenu: "white",
            activeLinkMenu: "rgba(255, 255, 255, .5)",
            firstLinkMenu: "black",
            borderVisuallyImpairedPanelBtn: "white",
            fillContactIcon: "white",
            placeholder: "#6b6b6b"
        },
        
        childrenCount: {
            primary: "white",
            secondary: "white",
            totalColor: "white",
            bgTotalColor: "black",
            borderColor: "white"
        },
        homeSlider: {            
            color: "black",
            transparent: "transparent"
        },

        filterLogo: "grayscale(100%)",
        filter: "grayscale(100%)",

        media: {
            tablet: "screen and (max-width: 767px)",
            mobile: "screen and (max-width: 576px)"
        }
    },

    blue: {
        bgCol: {
            header: {
                top: "rgba(157, 209, 255, 1)",
                bottom: "rgba(157, 209, 255, 1)",
                menu: {
                    textDecorationLink: "#063462",
                    submenu: "rgba(157, 209, 255, .8)"
                }                    
            },
            btn: {
                primary: "rgba(157, 209, 255, 1)",
                secondary: "rgba(157, 209, 255, 1)",
                primaryHover: "rgba(255, 255, 255, .2)",
                secondaryHover: "rgba(255, 255, 255, .2)"
            },            
            default: "rgba(157, 209, 255, 1)",
            defaultHover: "rgba(157, 209, 255, .5)",
            firstLinkMenu: "rgba(157, 209, 255, 1)",
            firstLinkMenuHover: "rgba(157, 209, 255, .5)",
            swiperPaginationBulletActive: "rgba(6, 52, 98, 1)",
            homePage: {
                advantages: {
                    0: "rgba(157, 209, 255, 1)",
                    1: "rgba(157, 209, 255, 1)",
                    2: "rgba(157, 209, 255, 1)",
                    3: "rgba(157, 209, 255, 1)"
                }
            }
        },

        color: {
            primary: "#063462",
            secondary: "#063462",
            outline: "#063462",
            defaultText: "#063462", 
            defaultTextHover: "rgba(0, 0, 0, .5)",          
            defaultBtn: "#063462",
            multiСhannel: "rgba(6, 52, 98, .75)",
            defaultLinkMenu: "#063462",
            activeLinkMenu: "rgba(6, 52, 98, .5)",
            firstLinkMenu: "#063462",
            borderVisuallyImpairedPanelBtn: "#063462",
            fillContactIcon: "#063462",
            placeholder: "rgb(29, 31, 36)"
        },

        childrenCount: {
            primary: "#063462",
            secondary: "#063462",
            totalColor: "#063462",
            bgTotalColor: "white",
            borderColor: "#063462" 
        },

        homeSlider: {            
            color: "#063462",
            transparent: "transparent"
        },

        filterLogo: "hue-rotate(60deg)",
        filter: "grayscale(100%)",
        
        media: {
            tablet: "screen and (max-width: 767px)",
            mobile: "screen and (max-width: 576px)"
        }
    }
}
