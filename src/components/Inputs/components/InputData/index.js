import React from "react";
import debounce from 'debounce-promise';
import { getUserPlaceAndSetToStore } from "../../../../actions/get-place";
import { InputDataFields, InputLat, InputLng } from './components/Input';
import { withInputParameters } from '../../hocs/withInputParameters';

class InputData extends React.Component {
    constructor(props) {
        super(props);
        this.debouncedGetData = debounce(({ lat, lng }) => this.props.dispatch(getUserPlaceAndSetToStore({ lat , lng })), 500, { leading: false, accumulate: false });
    }

    inputHandler = (fieldName, val) => {
        this.props.onChange(fieldName, val)
            .then(({ lat, lng }) => this.debouncedGetData({ lat, lng }))
            .catch(err => console.warn(err));
    }                                   
    render() {
        const {
            lat,
            lng,
        } = this.props;

        return (
            <InputDataFields>
                <InputLat
                     value={lat}
                     onChange={e => {
                        let fullValueLat = e.target.value;
                        this.inputHandler('lat',fullValueLat);                           
                    }}
                />
                <p>{lat}</p>
                <InputLng
                     value={lng}
                     onChange={e => {
                        let fullValueLng = e.target.value;
                        this.inputHandler('lng',fullValueLng);
                    }}
                />
            </InputDataFields>
        );
    }
}

export default withInputParameters(InputData);