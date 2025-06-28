import React, { useState } from 'react'

export default function About() {

   const[myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor:"white"
    })

    const[btntext, setbtntext] = useState("Enable Dark Mode");


    let toggleStyle = () => {

        if(myStyle.color === 'black'){
            setMyStyle({

                color:'white',
                backgroundColor:'black'

            })
            setbtntext("Enable Light Mode");
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setbtntext("Enable Dark Mode");
        }
    }
    

    return (
        <div className='container' style={myStyle}>
            <h2 className='m3'>About Us</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            toUpperCase
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                             The <strong> toUpperCase() </strong>method returns the value of the string converted to uppercase. This method does not affect the value of the string itself since JavaScript strings are immutable.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            toLowerCase
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            The <strong> toLowerCase() </strong>  method returns the value of the string converted to lower case. toLowerCase() does not affect the value of the string str itself. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Clear Text
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className='container text-center'>
                <button type='button' onClick={toggleStyle} className="btn btn-primary my-3">{btntext}</button>
            </div>
        </div>
    )
}
