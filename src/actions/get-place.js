import { placeInfoAction } from "../store/place-info";
import { errorsActions } from "../store/errors";

export const getUserPlaceAndSetToStore = ({ lat, lng }) => async dispatch => {
  dispatch(errorsActions.delete({ fieldName: 'get-place-info-error' }));

  const response = await fetch(`https://uremont.com/googlePlacesByCoords?lat=${lat}&lng=${lng}`)
    .then(res => {
      console.log(res);
      if (!res.ok && !(res.status === 200)) {
        throw new Error(`Failed with status ${res.status}`);
      }
      return res.json();
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      return { error };
    });

  if (response && response.byGoogle) {
     dispatch(placeInfoAction.updateResponseByGoogle(response.byGoogle));
  } else {
    dispatch(errorsActions.set({ fieldName: 'get-place-info-error', value: String(response.error) }));
  }
};
