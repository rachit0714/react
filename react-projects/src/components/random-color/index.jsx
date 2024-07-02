import { useState } from "react";

export default function RandomColor() {

    const [colorType, setColorType] = useState('hex');
    const [color, setColor] = useState('#000000');

    return (
        <div style={{
                width : '100vh',
                height : '100vh',
                background : color,
            }}>
            <button>Generate Hex Color</button>     
            <button>Generate RGB Color</button>
            <button>Generate Random Color</button>
        </div>
    );
}