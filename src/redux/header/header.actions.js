import HeaderActionTypes from "./header.types";

export const setSticky = () => ({
    type: HeaderActionTypes.SET_STICKY
});

export const removeSticky = () => ({
    type:HeaderActionTypes.REMOVE_STICKY
})

export const toggleMenu = () => ({
    type: HeaderActionTypes.TOGGLE_MENU
})