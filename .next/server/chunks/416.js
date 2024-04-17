exports.id = 416;
exports.ids = [416];
exports.modules = {

/***/ 751:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Experience_container__HZWxt",
	"italic": "Experience_italic__82gwq",
	"collapseTitle": "Experience_collapseTitle__61RAm",
	"arrow": "Experience_arrow__4WhuS",
	"arrow-open": "Experience_arrow-open__nSpEA",
	"imageContainer": "Experience_imageContainer__6OXt5",
	"guikerHomepage": "Experience_guikerHomepage__C3eHZ"
};


/***/ }),

/***/ 549:
/***/ ((module) => {

// Exports
module.exports = {
	"socials": "GetInTouch_socials__B7Zrh",
	"container": "GetInTouch_container__cAhPk",
	"icon": "GetInTouch_icon__e42fx"
};


/***/ }),

/***/ 619:
/***/ ((module) => {

// Exports
module.exports = {
	"hero": "Hero_hero__q3Jev",
	"circle": "Hero_circle__g6t6O",
	"circleCTA": "Hero_circleCTA__ceJpM",
	"imageBanner": "Hero_imageBanner__iARxm",
	"heroImage": "Hero_heroImage__Ll8Gy",
	"background-light": "Hero_background-light__iMG8U",
	"background-dark": "Hero_background-dark__7YAbw",
	"title": "Hero_title__nGUHa",
	"imageContainer": "Hero_imageContainer__txrNr",
	"circleBackground-light": "Hero_circleBackground-light__vnWP_",
	"grow": "Hero_grow__1Rl_0",
	"circleBackground-dark": "Hero_circleBackground-dark__ymvRA",
	"arrow": "Hero_arrow__Kjt3S",
	"slideRight": "Hero_slideRight__R6weo",
	"circle-light": "Hero_circle-light__bxNhd",
	"circle-dark": "Hero_circle-dark__rpvqD"
};


/***/ }),

/***/ 499:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Projects_container__8fvpl",
	"plantifulLogin": "Projects_plantifulLogin__G0Y78",
	"projectSection": "Projects_projectSection__PomJN",
	"fitomeLogin": "Projects_fitomeLogin__CSZtu",
	"fitomeWorkout": "Projects_fitomeWorkout__MZ56s",
	"plantifulPost": "Projects_plantifulPost__gjsl_",
	"project": "Projects_project__2smFy",
	"projectTitle": "Projects_projectTitle__b_P_t",
	"projectRight": "Projects_projectRight__aBnY9",
	"projectLeft": "Projects_projectLeft__laJb1"
};


/***/ }),

/***/ 701:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Social_container__gO9BQ",
	"button-light": "Social_button-light__kpecv",
	"button-dark": "Social_button-dark__59jzD",
	"buttonCTA": "Social_buttonCTA__R9f_u",
	"line": "Social_line__Dxa8D",
	"icon": "Social_icon___ab4K"
};


/***/ }),

/***/ 416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x$": () => (/* reexport */ AboutMe),
  "a3": () => (/* reexport */ Experience),
  "Rs": () => (/* reexport */ GetInTouch),
  "VM": () => (/* reexport */ Hero),
  "pj": () => (/* reexport */ Projects),
  "l2": () => (/* reexport */ ResumeButton),
  "g_": () => (/* reexport */ Social)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/Experience.module.css
var Experience_module = __webpack_require__(751);
var Experience_module_default = /*#__PURE__*/__webpack_require__.n(Experience_module);
;// CONCATENATED MODULE: ./components/AboutMe.tsx


function AboutMe() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Experience_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "thick accent",
                children: "ABOUT ME"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "thick",
                children: "Hello! I'm Louisa."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "I am a full stack developer with a user-driven mindset."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "My passion for programming started in 2012 when I first discovered Java and created a simple autonomous driving robot that learns how to navigate and shoots on its own for a school competition. Ever since then, I loved learning new technologies and turning cool ideas into reality."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "As I have studied and previously worked in Marketing for several years, I have a solid understanding on how to better interpret market research data and to understand user journies and engagement. My experiences have helped me plan and develop applications with a user-focused mindset. I enjoy writing code that solves real-life problems by merging functionality, design and creativity together. I have always loved a good challenge and problem solving as it’s all about looking at a situation from different perspectives and breaking it down into bite size pieces."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "I have designed and built robust applications that are intuitive to navigate and engaging to users. I believe in providing value continously and deploying often by delivering well tested, quality code."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "When I’m not coding, you can either find me in a coffee shop or in my craft room getting my hands on my next project. Let’s grab a coffee and discuss ideas!"
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(41);
;// CONCATENATED MODULE: ./components/Experience.tsx





const projects = [
    "One-click Tenant Application",
    "US Recurrent & One-time Payment (Stripe)",
    "Signing Relevant Documents (DocuSign)",
    "SMS Notification (Twilio)",
    "Website Redesign",
    "Booking Timer Countdown",
    "Bulk Listing Update",
    "Fractional Ownership Feature",
    "Roommate Matching",
    "Payout OnBoarding Flow"
];
const techs = [
    "AWS (Lambda, EventBridge, S3, SQS, Rekognition)",
    "MySQL",
    "Sequelize",
    "MongoDB",
    "Mongoose",
    "React",
    "TypeScript",
    "Node.js"
];
const integrations = [
    "Stripe",
    "PaySafe",
    "Twilio",
    "TransferWise",
    "DocuSign",
    "Certn",
    "Slack"
];
function Experience() {
    const [isOpenProjects, setIsOpenProjects] = (0,external_react_.useState)(false);
    const [isOpenTech, setIsOpenTech] = (0,external_react_.useState)(false);
    const [isOpenIntegrations, setIsOpenIntegrations] = (0,external_react_.useState)(false);
    const handleProjects = ()=>setIsOpenProjects(!isOpenProjects);
    const handleTech = ()=>setIsOpenTech(!isOpenTech);
    const handleIntegrations = ()=>setIsOpenIntegrations(!isOpenIntegrations);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Experience_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "thick accent",
                children: "EXPERIENCE"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "thick",
                children: "GUIKER - INTERMEDIATE FULL STACK SOFTWARE DEVELOPER"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Experience_module_default()).italic,
                children: "August 2021 - Present"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Real estate web application that will revolutionize real estate investments for our generation."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Guiker is a platform for all things real estate. From helping landlords and corporations find their perfect tenants, to managing their leases, and rent payments. Guiker is also an investment platform for those who want to get a piece of the pie in real estate through property fractional ownership. It allows people to own a piece of property by owning only a slice of it as an investment rather than buying a property fully. This opens the real estate market to the masses and it will no longer be an investment barrier."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Experience_module_default()).collapseTitle,
                onClick: handleProjects,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "SELECT PROJECTS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(md_.MdKeyboardArrowDown, {
                        className: (Experience_module_default())[`arrow` + (isOpenProjects ? "-open" : "")]
                    })
                ]
            }),
            isOpenProjects && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: projects.map((project)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: project
                    }, project))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Experience_module_default()).collapseTitle,
                onClick: handleTech,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "TECHNOLOGY STACK"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(md_.MdKeyboardArrowDown, {
                        className: (Experience_module_default())[`arrow` + (isOpenTech ? "-open" : "")]
                    })
                ]
            }),
            isOpenTech && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: techs.map((tech)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: tech
                    }, tech))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Experience_module_default()).collapseTitle,
                onClick: handleIntegrations,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "INTEGRATIONS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(md_.MdKeyboardArrowDown, {
                        className: (Experience_module_default())[`arrow` + (isOpenIntegrations ? "-open" : "")]
                    })
                ]
            }),
            isOpenIntegrations && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: integrations.map((tech)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: tech
                    }, tech))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Experience_module_default()).imageContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    className: (Experience_module_default()).guikerHomepage,
                    alt: "Guiker Homepage",
                    src: "/images/guiker.png"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(750);
// EXTERNAL MODULE: ./styles/GetInTouch.module.css
var GetInTouch_module = __webpack_require__(549);
var GetInTouch_module_default = /*#__PURE__*/__webpack_require__.n(GetInTouch_module);
;// CONCATENATED MODULE: ./components/SocialLink.tsx

const SocialLink = ({ icon , link  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: link,
        target: "_blank",
        rel: "noreferrer",
        children: icon
    });
};

;// CONCATENATED MODULE: ./components/GetInTouch.tsx







function GetInTouch() {
    const themeContext = (0,external_react_.useContext)(external_styled_components_.ThemeContext);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (GetInTouch_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "monoton",
                children: "Get In Touch"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (GetInTouch_module_default()).socials,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "mailto: louisawywong@gmail.com?subject=Let's%20Get%20In%20Touch!",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(md_.MdOutlineEmail, {
                            className: (GetInTouch_module_default()).icon
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "accent",
                            children: "louisawywong@gmail.com"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (GetInTouch_module_default()).socials,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                        link: "https://gitlab.com/louisawong",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiGitlab, {
                            className: (GetInTouch_module_default()).icon
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                        link: "https://github.com/louisawong",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiGithub, {
                            className: (GetInTouch_module_default()).icon
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                        link: "https://www.linkedin.com/in/louisa-wy-wong/",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiLinkedin, {
                            className: (GetInTouch_module_default()).icon
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: ./styles/Hero.module.css
var Hero_module = __webpack_require__(619);
var Hero_module_default = /*#__PURE__*/__webpack_require__.n(Hero_module);
;// CONCATENATED MODULE: ./components/Hero.tsx






function Hero() {
    const themeContext = (0,external_react_.useContext)(external_styled_components_.ThemeContext);
    const theme = themeContext.background === "#283618" ? "dark" : "light";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Hero_module_default()).hero,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Hero_module_default()).imageContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Hero_module_default()).imageBanner,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: (Hero_module_default()).heroImage,
                                alt: "Louisa Wong in illustration",
                                src: "/images/hero.png"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Hero_module_default())[`background-${theme}`]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        className: (Hero_module_default()).circle,
                        href: "mailto: louisawywong@gmail.com?subject=Let's%20Connect!",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Hero_module_default())[`circleBackground-${theme}`]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Hero_module_default())[`circle-${theme}`],
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (Hero_module_default()).circleCTA,
                                    children: "LET'S TALK"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRight, {
                        className: (Hero_module_default()).arrow
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "monoton",
                children: "Louisa Wong"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Hero_module_default()).title,
                children: "FULL STACK SOFTWARE ENGINEER"
            })
        ]
    });
}

// EXTERNAL MODULE: ./styles/Projects.module.css
var Projects_module = __webpack_require__(499);
var Projects_module_default = /*#__PURE__*/__webpack_require__.n(Projects_module);
;// CONCATENATED MODULE: ./components/Projects/Project.tsx



function Project({ title , techStack , images , description  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: `thick ${(Projects_module_default()).projectTitle}`,
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Projects_module_default()).project,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Projects_module_default()).projectLeft,
                        children: images
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Projects_module_default()).projectRight,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: description
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "TECHNOLOGY STACK"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: techStack.map((tech)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: tech
                                    }, tech))
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Projects/Projects.tsx






function Projects() {
    const themeContext = (0,external_react_.useContext)(external_styled_components_.ThemeContext);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Projects_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "thick accent",
                children: "OTHER EXPERIENCES"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Projects_module_default()).projectSection,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Project, {
                        title: "PLANTIFUL",
                        description: "A responsive web application designed for the plant-loving community. Users are able to discover and connect with nearby users by their geo-spatial data to sell or trade their plant collection. Users can post their plant inspirations globally to show off their terrarium or green space.",
                        techStack: [
                            "React",
                            "Next.Js",
                            "Next.Js API",
                            "Redux",
                            "MongoDB",
                            "Mongoose",
                            "Firebase Authentication",
                            "SASS"
                        ],
                        images: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: (Projects_module_default()).plantifulLogin,
                                    alt: "Plantiful Login Module",
                                    src: "/images/pLogin.png"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: (Projects_module_default()).plantifulPost,
                                    alt: "Plantiful Post Module",
                                    src: "/images/ppost.png"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Project, {
                        title: "FITOME",
                        description: "A PWA management tool for personal trainers to connect remotely with their clients, inspired by the social distancing necessitated by the pandemic. Within the app, personal trainers are able to assign multiple workout regimens and individual exercises to their clients. They can invite clients via invitation codes sent through text messages. With social distancing, it is still important to have face to face time which clients. Trainers can schedule video calls for workouts and checkups that comes with a built in timer overlay. Clients are able to view workouts and join their scheduled video calls on their desktop or mobile devices.",
                        techStack: [
                            "Peer2Peer",
                            "Socket.io",
                            "Google WorkBox",
                            "Express",
                            "PostgreSQL",
                            "Sequelize",
                            "Redux",
                            "Next.JS",
                            "Firebase Authentication"
                        ],
                        images: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: (Projects_module_default()).fitomeLogin,
                                    alt: "Fitome Login Module",
                                    src: "/images/fLogin.png"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: (Projects_module_default()).fitomeWorkout,
                                    alt: "Fitome Workout Screen",
                                    src: "/images/fWorkout.png"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Projects/index.ts


// EXTERNAL MODULE: ./styles/Social.module.css
var Social_module = __webpack_require__(701);
var Social_module_default = /*#__PURE__*/__webpack_require__.n(Social_module);
;// CONCATENATED MODULE: ./components/ResumeButton.tsx





function ResumeButton() {
    const themeContext = (0,external_react_.useContext)(external_styled_components_.ThemeContext);
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "./files/LouisaWong2024.pdf",
        download: true,
        className: "hamburger_choices_option",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Social_module_default())[`button-${themeContext.background === "#283618" ? "dark" : "light"}`],
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiDownload, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (Social_module_default()).buttonCTA,
                    children: "Resume"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Social.tsx





function Social() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Social_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "mailto: louisawywong@gmail.com?subject=Let's%20Connect!",
                children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdOutlineEmail, {
                    className: (Social_module_default()).icon
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                link: "https://gitlab.com/louisawong",
                icon: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiGitlab, {
                    className: (Social_module_default()).icon
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                link: "https://github.com/louisawong",
                icon: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiGithub, {
                    className: (Social_module_default()).icon
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                link: "https://www.linkedin.com/in/louisa-wy-wong/",
                icon: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiLinkedin, {
                    className: (Social_module_default()).icon
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Social_module_default()).line
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/index.ts









/***/ })

};
;