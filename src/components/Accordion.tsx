import React from "react";


type AccordionPropsType = {
    titleValue: string
}

function Accordion (props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
    <div>
        <AccordionTitle title={props.titleValue} />
        <AccordionBody/>
    </div>
    );
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle (props: any) {
    console.log("AccordionTitle rendering")
    return  (
    <h1>-- {props.title} --</h1>
    )
}

function AccordionBody () {
    console.log("AccordionBody rendering")
    return(
    <ul>
        <li>1</li>
        <li>2</li> 
        <li>3</li>
    </ul>
    );
}

export default Accordion;