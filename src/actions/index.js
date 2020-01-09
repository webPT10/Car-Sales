export const REMOVE_FEATURE = 'REMOVE_FEATURE'; // Action Type

//Action Creator is a function
export const removeFeature = feature => {
    // dispatch an action here to remove an item
    return {
        type: 'REMOVE_FEATURE', //Action 
        payload: feature
    }
  };

export const BUY_FEATURE = 'BUY_FEATURE'; // Action Type

//Action Creator is a function
  export const buyFeature = feature => {
    // dipsatch an action here to add an item
    return {
        type: 'BUY_FEATURE', //Action 
        payload: feature
    }
  };  