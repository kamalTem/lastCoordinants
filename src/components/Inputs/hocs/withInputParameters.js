import { compose, withStateHandlers, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { checkNumberWithAsciiCode } from '../../../lib/check-number-with-ascii-code';
export const withInputParameters = compose(
    connect(),
    withStateHandlers(
        ({
            initialState = {
                lat: 0,
                lng: 0 
            }
        }) => ({
            lat: initialState.lat,
            lng: initialState.lat
        }),
        {
            updateLat: (props, state) => (value) => ({ ...state, lat: Number(value) }),
            updateLng: (props, state) => (value) => ({ ...state, lng: Number(value) }),
        }
    ),
    withHandlers({
        onChange: props => (fieldName, value) => {
           
            if(checkNumberWithAsciiCode(value)==false){
               return Promise.reject();
             } 

            switch (fieldName) {
                case 'lat':
                    props.updateLat(value);
                    return Promise.resolve({ lat: value, lng: props.lng });
                case 'lng':
                    props.updateLng(value);
                    return Promise.resolve({ lat: props.lat, lng: value });
                default:
                    return Promise.reject();
            }
        },
    }),
);
