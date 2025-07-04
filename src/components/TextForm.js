import React,{useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        // correct way to change the state
        props.showAlert("Converted to uppercase!","success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!","success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copeid to clipboard!","success");
    }

    const handleClearkClick = () => {
        setText('');
         props.showAlert("Text cleared!","success");
    }

    const[text, setText] = useState("");

    // text = "new text";   // wrong way to change the state

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white':'#343a40', color: props.mode === 'light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>

            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

            <button className="btn btn-primary mx-2" onClick={handleClearkClick}>Clear Text</button>
        </div>

        <div className="container my-3">
            <h4>Your text summary</h4>
            <p>{text.split(" ").length} and {text.length}</p>
            <p>{0.008 * text.split(" ").length} Minutes required to read.</p>
            <h5>Preview</h5>
            <p>{text.length>0?text:'Enter something in the above textbox to preview it here'}</p>
        </div>
        </>
    )
}
