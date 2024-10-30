import Title from "../title/Title";
import Body from "../body/Body";


function About(){
    return(
        <>
            <Title tilte ="Hello world"/>
            <Body/>
            <About info={{Title: "Some Title", Body:"Some body"}}/>
        </>
    )
}


export default About;