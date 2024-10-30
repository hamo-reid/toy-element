export default function () {
  if (PROD) {
    const logo = `
__________________________________________________________________________

 _______                            __                              __   
|_     _|.-----.--.--.______.-----.|  |.-----.--------.-----.-----.|  |_ 
  |   |  |  _  |  |  |______|  -__||  ||  -__|        |  -__|     ||   _|
  |___|  |_____|___  |      |_____||__||_____|__|__|__|_____|__|__||____|
               |_____|                                                   

__________________________________________________________________________
                          origin author: EricWXY
                                 author: hamo-reid
`;
const rainbowGradient = `
background: linear-gradient(135deg, orange 60%, cyan);
background-clip: text;
color: transparent;
font-size: 16px; 
line-height: 1;
font-family: monospace;
font-weight: 600;
`;  
    console.info(`%c${logo}`, rainbowGradient);
  } else if ( DEV ) {
    console.log("[ToyElement]: dev mode")
  }
}
