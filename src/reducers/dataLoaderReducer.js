const INITIAL_STATE = {
    dataLoaded: false,
    data: [],
    error: null,
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
        case "DATA_FAILURE":
            return {
                ...state,
                loading:false,
                error:"Node failed to launch",
            }
        default:
            return state.dataLoaded
    }
}

export default dataLoaderReducer;
