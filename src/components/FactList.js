import { CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFacts } from '../store/facts/action';
import { selectFacts, selectFactsError, selectFactsLoading } from '../store/facts/selectors';

const FactList = () => {
    const dispatch = useDispatch();
    const facts = useSelector(selectFacts);
    const error = useSelector(selectFactsError);
    const loading = useSelector(selectFactsLoading);

    const requestFacts = async () => {
        dispatch(getFacts());
    };

    useEffect(() => {
        requestFacts();
    }, []);

    const renderFact = useCallback(
        (fact) => <li key={fact._id}>{fact.text || "No fact"}</li>,
        []
    );

    return (
        <div>
            {loading && <CircularProgress />}
            {!loading && !error && <Button variant="contained" onClick={requestFacts}>Update</Button>}
            {!error ? (
                <>
                    <ul>{facts.map(renderFact)}</ul>
                </>
            ) : (
                <>
                    <h2>Error</h2>
                    <Button variant="contained" onClick={requestFacts}>Retry</Button>
                </>
            )}
        </div>
    )
};

export default FactList;