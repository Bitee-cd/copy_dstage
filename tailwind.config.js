const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors : {
        primary: "#170B2D",
        sub1: "#975BE3",
        sub2: "#80FFDB",
        grad1: "#692ADC",
        grad2: "#80FFDB",
        grad3: "#361E59",
        grad4: "1B0E33",
        box: "#190935",
        plus: "#00FF00",
        btn2: "#692ADC",
        Bid: "#190935",
        Bid2: "#3D2364",
        Bid3: "#190935",
        area: "#3D2364",
        line1: "#98A2B3",
        svg1: "#692ADC",
        svg2: "#80FFDB",
        hero: "#190935",
        list1: "#528791",
        light_purple:"#BFA3EA",
        dark_purple: "#160B2B",
        background_purple:"#1E1037",
        table_color: "#1E1037",
        table_cell: "#382162",
        profit_color: "#14CC86",
        table_border: "#692ADC",
        active_day: "#190935",
        light_ash:"#686868",
        dark_grey:"#BDBDBD",
        create_border: "#692ADC",
        create_card:"#975BE3",
        lighter_purple:"#F1EAFF",
        create_card:"#975BE30D",
        create_border_b: "#65656533",
        lighter_grey:"#BDBDBD",
      },


      fontFamily : {
        Header: ["magistral", "san-serif"],
        Body: ["inter", "san-serif"],
      },
        height : {
          128 : "100px"
        },

        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'bright_shadow' :"url(/images/background.png)",
          'profile_background' :"url(/images/bg_profile.svg)",

        },

        animation: {
          slide : "slide 20s infinite linear",
          slide2 : "slide2 20s infinite linear",
          slide3 : "slide3 20s infinite linear",
          slide4 : "slide4 20s infinite linear",
          cycle : "cycle 30s infinite linear",
          cycle_2 : "cycle_2 30s infinite linear",
      },
      

        keyframes: {
          /* top trending */
          slide : {
            "0%" : {
              transform: "translate(-100px 0px)"
          },
      
          "50%" : {
              transform: "translate(-550px, 0px)"
          },

          "100%" : {
            transform: "translate(-100px 0px)"
        }
      },
      
       /* buttom trending */
     slide2 : {
          "0%" : {
              transform: "translate(-650px, 0px)"
          },

          "50%" : {
            transform: "translate(-100px, 0px)"
        },

        "100%" : {
          transform: "translate(-550px 0px)"
      }

          },

           /* top auctions */

          slide3 : {
            "0%" : {
                transform: "translate(-150px, 0px)"
            },
  
            "50%" : {
              transform: "translate(-950px, 0px)"
          },
  
          "100%" : {
            transform: "translate(-150px 0px)"
        }
  
            },

            /* buttom auctions */

            slide4 : {
              "0%" : {
                  transform: "translate(-950px, 0px)"
              },
    
              "50%" : {
                transform: "translate(-150px, 0px)"
            },
    
            "100%" : {
              transform: "translate(-860px 0px)"
          }
    
              },

              /* glow movement*/
              cycle : {

                "0%" : {
                    transform: "translate(0%, 0%)"
                },
      
                "12.5%" : {
                  transform: "translate(130%, 25%)"
              },
              "25%" : {
                transform: "translate(0%, 50%)"
            },

            "37.5%" : {
              transform: "translate(130%, 75%)"
          },

          "50%" : {
            transform: "translate(0%, 100%)"
          },

          "62.5%" : {
            transform: "translate(130%, 75%)"
        },
        "75%" : {
          transform: "translate(0%, 50%)"
      },

      "87.5%" : {
        transform: "translate(130%, 25%)"
    },

    "100%" : {
      transform: "translate(0%, 0%)"
        },
                },
              
               /* glow movement mobile */
                cycle_2 : {

                  "0%" : {
                      transform: "translate(0%, 0%)"
                  },
        
                  "12.5%" : {
                    transform: "translate(130%, 65%)"
                },
                "25%" : {
                  transform: "translate(0%, 130%)"
              },
  
              "37.5%" : {
                transform: "translate(130%, 195%)"
            },
  
            "50%" : {
              transform: "translate(0%, 260%)"
            },
  
            "62.5%" : {
              transform: "translate(130%, 195%)"
          },
          "75%" : {
            transform: "translate(0%, 130%)"
        },
  
        "87.5%" : {
          transform: "translate(130%, 65%)"
      },
  
      "100%" : {
        transform: "translate(0%, 0%)"
          },
                  },
    
  
  

          
        }
    },
  },
  plugins: [],
}
