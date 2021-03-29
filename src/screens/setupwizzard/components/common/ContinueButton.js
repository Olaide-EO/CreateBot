import styled from "styled-components";
import React from "react";

const ContinueButton = () => {
    return <Container>
        <Button>Continue</Button>
    </Container>
}

const Container = styled.div`
position: absolute;
right: 50px;
top: 30px;

`;

 const Button = styled.button`
width: 150px;
height: 50px;
background: #5956e9;
border: none;
outline: none;
color: #ffffff;
font-family: Poppins;
border-radius: 10px;
font-weight: 600px;
line-height: 20px;
font-size: 25px;
&:focus{
    outline: none;
}
`;

export default ContinueButton;