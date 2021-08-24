import { createSelector } from "reselect";

const selectSections = state => state.sections;

export const selectSectionData = createSelector(
    [selectSections],
    section => section.sectionData
)

export const selectSectionDataForPreview = createSelector(
    [selectSectionData],
    data => data ? Object.keys(data).map(key => data[key]) : [] 
);

export const selectSectionNumber = createSelector(
    [selectSections],
    section => section.sectionNumber
);
