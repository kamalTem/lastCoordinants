import React from "react";
import InputData from "./InputData";
import OutputData  from "./OutputData";
import styled from "styled-components";

const MainContent = styled.section`
  background: papayawhip;
  display: flex;
  height: 100vh;
`;

const Wrapper = (props) => {
    return (
        <MainContent>
            <InputData {...props} />
            <OutputData {...props} />
        </MainContent>
    );     
}

export default Wrapper;