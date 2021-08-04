import React, { useRef, useState, useEffect } from 'react';


const Cursor = () => {


    const cursorRef = useRef();
    const [cursorPosition, setCursorPosition] = useState({ x: null, y: null, target: null });



    function updateCursorPostion(e) {
        setCursorPosition({ x: e.clientX, y: e.clientY, target: e.target });

    }

    // tracking cursor positions
    useEffect(() => {

        if (window.matchMedia('(min-width : 768px )').matches) {
            // setting on mouse move event according to viewport
            window.addEventListener('mousemove', updateCursorPostion);

            const cursorElement = cursorRef.current;

            if (cursorPosition.target != null) {

                
                if (cursorPosition.target.getAttribute('data-color')) {

                    // cursorElement.classList.add('scale');
                    cursorElement.classList.add('blend-mode-img');
                    // cursorElement.innerHTML = cursorPosition.target.style.backgroundColor;
                    // console.log();

                } else if(cursorPosition.target.localName === 'span') {

                    cursorElement.classList.add('blend-mode-img');

                }else{
                    cursorElement.classList.remove('scale');
                    cursorElement.classList.remove('blend-mode-img');
                    cursorElement.innerHTML = '';
                }



                switch (cursorPosition.target.localName) {

                    case 'span':
                        
                        break;

                    case 'img':
                        cursorElement.classList.add('blend-mode-img');
                        break;

                    case 'h1':
                        cursorElement.classList.add('blend-mode-img');
                        break;

                    default:
                        cursorElement.classList.remove('scale');
                        cursorElement.classList.remove('blend-mode-img');
                        cursorElement.innerHTML = '';
                        break;
                }

            }

            cursorElement.style.cssText = `
            top:${cursorPosition.y}px; 
            left:${cursorPosition.x}px;
            border-radius:50%;
            transform:translate(-50%,-50%);
            z-index:99;
            pointer-events:none;`

        }

        return () => {
            window.removeEventListener('mousemove', updateCursorPostion);
        }
    }, [cursorPosition]);



    return (
        <div className="cursor position-fixed" ref={cursorRef} >

        </div>
    )
}

export default Cursor;
