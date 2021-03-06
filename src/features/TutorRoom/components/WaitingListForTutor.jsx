import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Room from 'components/Room/RoomContainer';

WaitingListForTutor.propTypes = {
    waitingList: PropTypes.array,
    onDelete: PropTypes.func,
};

WaitingListForTutor.defaultProps = {
    waitingList: [],
    onDelete: null
}

function WaitingListForTutor( {waitingList, onDelete} ) {
    const handleDeleteWaiting = (waitingId) => {
        if(!onDelete) return;
        onDelete(waitingId)
    }
    return (
        <Grid container spacing={2}>
            {waitingList.map( (waiting) => (
                <Room room={waiting} onDelete={handleDeleteWaiting} color={"green"}/>
            ))}
        </Grid>
    );
}

export default WaitingListForTutor;