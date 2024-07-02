// Single Selection
// Multiple Selection

import { useState } from "react";
import data from "./data";
import './styles.css';

export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId){
        //console.log(getCurrentId);
        let cpyMultiple = [...multiple];
        const findIndexOfId = cpyMultiple.indexOf(getCurrentId);
        console.log(findIndexOfId);
        if (findIndexOfId === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfId, 1)

        setMultiple(cpyMultiple);
    }

    function toggleMultiple() {
        setEnableMultiSelection(!enableMultiSelection);
        setMultiple([]);
        setSelected(null);
    }
    console.log(selected, multiple);

    return <div className="wrapper">
        <button onClick={toggleMultiple}>{enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}</button>
        <div className="accordian">
            {
                data && data.length > 0 ? 
                data.map(dataItem=> <div className="item" key={dataItem.id}>
                    <div onClick={ enableMultiSelection 
                        ? ()=>handleMultiSelection(dataItem.id) 
                        : ()=>handleSingleSelection(dataItem.id)} 
                        className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    { /* Alternate way for multiple selection
                        {
                            enableMultiSelection ?
                            multiple.indexOf(dataItem.id) !== -1 && 
                            <div className="content"> (dataItem.answer) </div> :
                            selected === dataItem.id && <div className="content"> {dataItem.answer} </div>

                        }
                    */}
                        {selected === dataItem.id || 
                        multiple.indexOf(dataItem.id) !== -1 ? (
                        <div className="content"> {dataItem.answer}</div>
                        ) : null
                        }
                </div>)
                : <div> No data found </div>
            }

        </div>
    </div>;
}