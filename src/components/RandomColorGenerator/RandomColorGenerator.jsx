import { useState } from "react";
import { Button } from "../ui/button";

export default function RandomColorGenerator() {
    const [colorMode, setColorMode] = useState('HEX');
    const [color, setColor] = useState('#999999')

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function generateHEX() {
        const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

        let hexColor = '#';

        for (let i=0; i < 6; i++) {
            hexColor += data[randomColorUtility(data.length)]
        } 

        setColor(hexColor)
    }

    function generateRGB() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        const rgb = `rgb(${r}, ${g}, ${b})`;

        setColor(rgb)
    }

    function handleGenerateColor() {
        if (colorMode === 'HEX') {
            generateHEX()
        } else if (colorMode === 'RGB') {
            generateRGB()
        }
    }
    
    function toggleColorMode() {
        if (colorMode === 'HEX') {
            setColorMode('RGB')
        } else {
            setColorMode('HEX')
        }
    }

    console.log(color)

    return (
        <div className="flex flex-col items-center gap-5 w-screen h-screen p-16">
            <h4 className="font-bold text-2xl tracking-widest text-center drop-shadow-md">COLOR GENERATOR</h4>
            <p className="font-light text-xl text-center">Generate random colors in HEX or RGB</p>


            <div className="m-1 md:m-5 border rounded-sm w-full md:w-5/6 h-1/2 flex" style={{backgroundColor: color}}>
                <h3 className="place-self-center mx-auto tracking-widest font-semibold text-xl text-slate-200 drop-shadow-xl">{color}</h3>
            </div>
            <div className="flex gap-5">
            <Button onClick={toggleColorMode} className="w-auto">Switch to {colorMode === 'HEX' ? 'RGB' : 'HEX'}</Button>
            <Button onClick={handleGenerateColor}>Generate Color</Button>
            </div>

        </div>
    )
}