const INITIAL_STATE = {
    dataLoaded: false,
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
        default:
            return state.dataLoaded
    }
}

export default dataLoaderReducer;
