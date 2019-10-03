import React from "react";
import { connect } from "react-redux";
import { placeInfoAction } from "../../store/place-info";
import  Wrapper  from "./components/Wrapper";

class Inputs extends  React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Wrapper {...this.props} />
    );
  } 
}

const mapStateToProps = ({ placeInfoReducer }) => {
  return { 
    byGoogle: placeInfoReducer.byGoogle
  };
};

export default connect(
  mapStateToProps
)(Inputs);
  