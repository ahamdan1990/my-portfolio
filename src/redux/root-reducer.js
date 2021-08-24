import { combineReducers } from "redux";
import headerReducer from "./header/header.reducers";
import sectionsReducers from "./section/section.reducers";

const rootReducer = combineReducers({
    header:headerReducer,
    sections: sectionsReducers
});

export default rootReducer;