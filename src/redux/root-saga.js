import {all,call} from 'redux-saga/effects';
import {SectionSaga} from './section/section.sagas';

export default function* rootSaga() {
    yield all(
        [
            call(SectionSaga)
        ]
    )
};