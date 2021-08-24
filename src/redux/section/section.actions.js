import SectionActionType from "./section.types";

export const fetchSectionDataStart = () => ({
    type:SectionActionType.FETCH_SECTION_DATA_START
});

export const fetchSectionDataSuccess = (data) => ({
    type:SectionActionType.FETCH_SECTION_DATA_SUCCESS,
    payload:data
});

export const fetchSectionDataFailure = (error) => ({
    type:SectionActionType.FETCH_SECTION_DATA_FAILED,
    payload:error
});

export const setSection = (sectionNumber) => ({
    type:SectionActionType.SET_SECTION,
    payload: sectionNumber
})

export const setPercent = () => ({
    type:SectionActionType.SET_PERCENT
})

