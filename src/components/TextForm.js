import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", 'success');

    }

    const handleLowClick = () => {
        // console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", 'success');
    }

    const handleClearClick = () => {
        // console.log("Lowercase was clicked " + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!", 'success');
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>{props.heading}</h3>
                <form>
                    <div className="form-group">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#1b183f', color: props.mode === 'dark' ? 'white' : 'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                </form>
                <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick} >Convert to uppercase</button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleLowClick} >Convert to lowercase</button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleClearClick} >Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your text summary:</h3>
                <p>{text.split(" ").length} words and {text.length} letters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h3>Text Preview:</h3>
                <p>{text.length > 0 ? text : 'Enter something above to preview it here'}</p>
            </div>
        </>
    )
}
