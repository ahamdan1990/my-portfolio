import {createSelector} from 'reselect';

const selectHeader = state => state.header;

export const selectHeaderSticky = createSelector(
    [selectHeader],
    header => header.sticky
);

export const selectHeaderToggle = createSelector(
    [selectHeader],
    header => header.toggled
);