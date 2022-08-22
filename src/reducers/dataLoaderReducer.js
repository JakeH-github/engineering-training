const INITIAL_STATE = {
    dataLoaded: false,
};

function dataLoaderReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "TOGGLE_DATALOADED":
            return {
                ...state,
                dataLoaded: !state.dataLoaded,
            };
        default:
            return state.dataLoaded
    }
}

export default dataLoaderReducer;
