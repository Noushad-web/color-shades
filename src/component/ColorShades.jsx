

import React, { useRef, useState, useEffect } from 'react';
import hexToHsl from 'hex-to-hsl';
import toHex from 'colornames';



const ColorShades = () => {

    const [typedInput, setTypedInput] = useState('');
    const [convertedInput, setConverterInput] = useState('');
    const [luminous, setLuminous] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const wrapperColorbox = useRef();


    function loop(){
        for (let i = 0; i < 21; i++) {
            setLuminous((array) => array.concat(i*5) );
        }
    };
    

    function checkInput(value) {


        try {
            if (value.startsWith('#')) {
                const hslValue = hexToHsl(value);
                setConverterInput(hslValue);
                return hslValue;
            } else {
                const hexValue = toHex(value);
                const hslValue = hexToHsl(hexValue);
                setConverterInput(hslValue);
                return hslValue;
            }
        } catch (error) {
            console.error(error.message);
            setErrorMessage('invalid color name or hex value');
            setTimeout(()=>{
                setErrorMessage('');
            },3000)
        }
    }





    function formSubmit(e) {
        e.preventDefault();
        setTypedInput(e.target[0].value);

        checkInput(e.target[0].value);
        e.target[0].value = '';
        wrapperColorbox.current.style.display = 'flex';
    
    }


    useEffect(()=>{
        setLuminous([]);
        loop();
    },[typedInput])

    return (
        <div className="wrapper ">
            <div className="container">
                <h1 className="mb-5 text-light">Type the color name or hex value</h1>
                <div className="wrapper-small col-md-10 ">
                    <form className="text-center input-group mb-3 " action="" onSubmit={formSubmit} >
                        <input type="text" className="form-control color-input" placeholder="#003399 or red" />
                        <button type="submit" className="btn ms-2 btn-outline-light rounded"><i className="bi bi-search"></i> Search</button>
                        <p className="text-danger error-para mb-0 ps-2">{errorMessage}</p>
                    </form>
                </div>

                <div className="row wrapperColorbox g-0" ref={wrapperColorbox}>
                    {
                        luminous.map((element, index) => {
                            return (
                                <>
                                    <div className="col-md-2 col-10 mx-auto mx-md-0 colorBox"  data-color="true" style={{backgroundColor :`hsl(${convertedInput[0]},${convertedInput[1]}%,${element}%)` }} >
                                       <span>
                                           {wrapperColorbox.current.children[index] === undefined ? null : wrapperColorbox.current.children[index].style.backgroundColor }
                                       </span>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default ColorShades;

















// import React, { useRef, useState, useEffect } from 'react';
// import hexToHsl from 'hex-to-hsl';
// import toHex from 'colornames';

// const ColorShades = () => {

//     const colorDiv = useRef();
//     // const [hexColor, setHexColor] = useState();
//     const [colorShades, setColorShades] = useState([]);
//     const [inputColor, setInputColor] = useState();
//     const [inputChange, setInputChange] = useState();



//     // array for lightness of hsl 
//     let arrayLightness = [];
//     for (let i = 0; i < 21; i++) {
//         arrayLightness.push(i * 5);
//     }



//     useEffect(() => {

//         if (inputColor !== undefined) {

//             console.log('render');
//             // setColorShades('');
//             changeInput(inputColor);
//             // console.log(colorShades.length);

//         }
//     });


//     // checking conditions if inputed color is in hex form or name format 
//     const conditionChecking = (inputValue) => {

//         if (inputValue.startsWith('#')) {
//             const hslValue = hexToHsl(inputValue);
//             return hslValue;
//         } else {
//             const hexValue = toHex(inputValue);
//             const hslValue = hexToHsl(hexValue);
//             return hslValue;
//         }

//     }



//     const changeInput = (inputValue) => {

//         console.log('render2');
//         // checking conditions if inputed color is in hex form or name format 
//         let hslValue = conditionChecking(inputValue);
//         const h = hslValue[0];
//         const s = hslValue[1];

//         arrayLightness.forEach((l, i) => {
//             const finalColorCode = `hsl(${h},${s}%,${l}%)`;

//             // concatenation of all shades to hook 
//             // setColorShades(arrayOfColorCodes => arrayOfColorCodes.concat(finalColorCode));

//         });
//     }



//     // function call on form submit  
//     const formSubmit = (e) => {
//         e.preventDefault();
//         setInputColor(e.target[0].value.trim());
//     }


//     return (
//         <div className="wrapper ">
//             <div className="container">
//                 <div className="wrapper-small col-md-10 ">
//                     <form className="text-center input-group mb-3" action="" onSubmit={formSubmit}>
//                         <input type="text" className="form-control" placeholder="#003399 or red" onChange={e => setInputChange(e.target.value)} />
//                         <button type="submit" className="btn ms-2 btn-outline-success rounded"><i className="bi bi-search"></i> Search</button>
//                     </form>
//                 </div>

//                 <div className="row g-0" ref={colorDiv}>
//                     {
//                         arrayLightness.map((element, index) => {
//                             return (
//                                 <>
//                                     <div className="col-2 colorBox" id={index} key={index} style={{ backgroundColor: `${colorShades[index]}` }} >
//                                         <span>{
//                                         console.log(colorShades[index])
//                                         }</span>
//                                     </div>
//                                 </>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ColorShades;
































