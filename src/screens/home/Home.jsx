import React from "react";
import styled from "styled-components";
import LeftGrid from "./leftgrid";
import RightGrid from "./rightgrid";

const Home = () => {
    return (
        <Container>
            <LeftGrid />
            <RightGrid />
        </Container>
    )
}

const Container =  styled.div`
position: relative;
height: 100vh;
width: 100vw;
background: #ffffff;
display: flex;
justify-content: space-between;
`;

export default Home;