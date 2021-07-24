import React from 'react'
import catImg1 from "../images/cat1.jpeg"
import catImg2 from "../images/cat2.jpeg"
import catImg3 from "../images/cat3.jpeg"
import catImg4 from "../images/cat4.jpeg"
import catImg5 from "../images/cat5.jpeg"
import catImg6 from "../images/cat6.jpeg"
import catImg7 from "../images/cat7.jpeg"
import catImg8 from "../images/cat8.jpeg"
import catImg9 from "../images/cat9.jpeg"


function Images() {
    
    return (
        <>
            <div className="flex flex-wrap gap-2 ">
                <img src={catImg1} alt=""  className="shadow-lg"/>
                <img src={catImg2} alt=""  className="shadow-lg"/>
                <img src={catImg3} alt="" width="50%" className="shadow-lg"/>
                <img src={catImg4} alt=""  className="shadow-lg"/>
                <img src={catImg5} alt=""  className="shadow-lg"/>
                <img src={catImg6} alt=""  className="shadow-lg"/>
                <img src={catImg7} alt=""  className="shadow-lg"/>
                <img src={catImg8} alt=""  className="shadow-lg"/>
                <img src={catImg9} alt=""  className="shadow-lg"/>
            </div>
        </>
    )
}

export default Images
