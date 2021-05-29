import React from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from '../routing/router';

import { Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export const AddGoalButton = ({ url }) => {
    const history = useHistory();
    return (
        <div>
            <Button variant="base" className="rainbow-m-around_medium" onClick={() => history.push(url)}>
                <FontAwesomeIcon icon={faPlusCircle} className="rainbow-m-right_medium" />
                Dodaj zadania, żeby zrealizować cel
            </Button>
        </div>
    );
};
