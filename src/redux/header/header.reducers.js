import HeaderActionTypes from "./header.types"

const INITIAL_STATE = {
    sticky: false,
    toggled: false,
}

const headerReducer = (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case HeaderActionTypes.SET_STICKY:
            return {
                ...state,
                sticky:true
            }
        case HeaderActionTypes.REMOVE_STICKY:
            return {
                ...state,
                sticky:false
            }
        case HeaderActionTypes.TOGGLE_MENU:
            return {
                ...state,
                toggled: !state.toggled
            }
        default:
            return state
    }
}

export default headerReducer;

