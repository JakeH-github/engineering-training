const INITIAL_STATE = {
    dataLoaded: false,
    data: [],
};

function dataLoaderReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "TOGGLE_DATALOADED":
            return {
                ...state,
                loading:false,
                dataLoaded: !state.dataLoaded,
            };
        case "TOGGLE_DATALOADING":
            return {
                ...state,
                loading:true,
            };
        case "TOGGLE_SUCCESS":
            return {
                ...state,
                data: action.data,
            }
        default:
            return state.dataLoaded
    }
}

export default dataLoaderReducer;
