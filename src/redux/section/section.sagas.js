import { all,call,takeLatest,put } from 'redux-saga/effects';
import SectionActionType from './section.types';
import { 
    fetchSectionDataSuccess,
    fetchSectionDataFailure
 } from './section.actions';

 import sectionData from './section.data';

 export function* fetchSectionData() {
     try {
        yield put(fetchSectionDataSuccess(sectionData))
     }
     catch(error) {
        yield put(fetchSectionDataFailure(error));
     }
 }

 export function* onFetchSectionDataStart() {
     yield takeLatest(SectionActionType.FETCH_SECTION_DATA_START,fetchSectionData)
 }

 export function* SectionSaga() {
     yield all(
         [
            call(onFetchSectionDataStart)
         ]
     )
 }