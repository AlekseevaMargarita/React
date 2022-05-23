import { getFactsFailure, getFactsRequest, getFactsSuccess } from '../action';
import { factsReducer, initialState } from '../reducer';

describe('factsReducer tests with snapshot', () => {
    it('--- return correct state after GET_FACTS_REQUEST action', () => {
        const factStore = factsReducer(initialState, getFactsRequest());
        expect(factStore).toMatchSnapshot();
    });

    it('--- return correct state after GET_FACTS_SUCCESS action', () => {
        const factStore = factsReducer(initialState, getFactsSuccess());
        expect(factStore).toMatchSnapshot();
    });

    it('--- return correct state after GET_FACTS_FAILURE action', () => {
        const factStore = factsReducer(initialState, getFactsFailure());
        expect(factStore).toMatchSnapshot();
    });
});
