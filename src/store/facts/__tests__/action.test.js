import { getFacts, getFactsFailure, getFactsRequest, getFactsSuccess } from '../action';

describe('getFacts tests', () => {
    it('dispatches getFactsRequest', () => {
        const mockDispatch = jest.fn();
        getFacts()(mockDispatch);
        expect(mockDispatch).toHaveBeenCalledWith(getFactsRequest());
    });

    it('calls getFactsSuccess if fetch was succesfull', async () => {
        const mockDispatch = jest.fn();
        const body = { test: 'test' };
        fetch.mockResponseOnce(JSON.stringify(body));
        await getFacts()(mockDispatch);
        expect(mockDispatch).toHaveBeenLastCalledWith(getFactsSuccess(body));
    });

    it('calls getFactsFailure if fetch was unsuccesfull', async () => {
        const mockDispatch = jest.fn();
        const error = { message: 'test' };
        fetch.mockRejectOnce(error);
        await getFacts()(mockDispatch);
        expect(mockDispatch).toHaveBeenLastCalledWith(getFactsFailure(error.message));
    });
});