export default function ( { dispatch } ) {
  return next => action => {


    if (!action.payload || !action.payload.then) {
      console.log('We have no promise');
      return next(action);
    }

    action.payload
      .then( function(response) {
        const newAction = { ...action, payload: response.data };

        dispatch(newAction);
    });
  }
}
