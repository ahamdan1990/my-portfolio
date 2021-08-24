import SectionActionType from "./section.types";

const INITIAL_STATE={
    sectionData:null,
    error:null,
    sectionNumber:null
};

const sectionsReducers = (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case SectionActionType.FETCH_SECTION_DATA_SUCCESS:
            return {
                ...state,
                sectionData:action.payload
            }
        case SectionActionType.FETCH_SECTION_DATA_FAILED:
            return {
                ...state,
                error:action.payload
            }
        case SectionActionType.SET_SECTION:
            return {
                ...state,
                sectionNumber: action.payload
            }
        case SectionActionType.SET_PERCENT:
            return {
                ...state,
                sectionData: {
                    ...state.sectionData,
                    about: {
                        ...state.sectionData.about,
                        progressBarData: {
                            ...state.sectionData.about.progressBarData,
                            percent: [90,85,80,83,75,70,65,60,55]
                        }
                    }
                }
            }
        default:
            return state
    }
};

export default sectionsReducers;