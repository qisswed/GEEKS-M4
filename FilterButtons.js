
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, resetFilter } from '../redux/actions';

const FilterButtons = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.filter);

    return (
        <div>
            <button
                onClick={() => dispatch(setFilter('all'))}
                style={{ fontWeight: currentFilter === 'all' ? 'bold' : 'normal' }}
            >
            </button>
            <button
                onClick={() => dispatch(setFilter('active'))}
                style={{ fontWeight: currentFilter === 'active' ? 'bold' : 'normal' }}
            >
            </button>
            <button
                onClick={() => dispatch(setFilter('completed'))}
                style={{ fontWeight: currentFilter === 'completed' ? 'bold' : 'normal' }}
            >
            </button>
            <button onClick={() => dispatch(resetFilter())}>Сбросить фильтр</button>
        </div>
    );
};

export default FilterButtons;
