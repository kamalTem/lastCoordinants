import React from "react";
import styled from "styled-components";
import JSONTree from "react-json-tree";
import PropTypes from "prop-types";

const OutputDataJson = styled.section`
  padding: 100px 40px;
  background: #3F4448 ;
  width: 50%;
`;
const theme = {
    base00: '#24292E'
};
const OutputData = (props) => {
    return (
        <OutputDataJson>
          <JSONTree data={props.byGoogle} theme={theme} invertTheme={false} />
        </OutputDataJson>
    );     
}
export default OutputData;