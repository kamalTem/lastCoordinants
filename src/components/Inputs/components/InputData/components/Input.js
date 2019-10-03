import styled from 'styled-components';

export const InputDataFields = styled.section`
  padding: 100px 40px;
  background: #24292E;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const InputLat = styled('input')`
    background: none;
	outline: none;
	border: 0;
	border-bottom: 1px solid #ccc;
	font-family: inherit;
	-webkit-appearance: none;
	border-radius: 0;
	padding: 5px 5px 5px 0;
	cursor: text;
	color: #657B6D;
    font-size: 20px;
	margin-top: 20px;
    cursor: pointer;
    &:hover {
        border-bottom: 1px solid #666;
    }
`;

export const InputLng = styled.input`
    background: none;
	outline: none;
	border: 0;
	border-bottom: 1px solid #ccc;
	font-family: inherit;
	-webkit-appearance: none;
	border-radius: 0;
	padding: 5px 5px 5px 0;
	cursor: text;
	color: #657B6D;
    font-size: 20px;
	margin-top: 30px;
    cursor: pointer;
    &:hover {
        border-bottom: 1px solid #666;
    }
`;