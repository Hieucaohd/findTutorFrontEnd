import { Grid, makeStyles } from '@material-ui/core';
import Room from 'components/Room/Room';
import React from 'react';

const useStyles = makeStyles({
    root: {
        marginTop: 20,
    }
})

function ParentRoomProfile({parentRoom}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {parentRoom.map( (room)=> (
                    <Room room={{...room, roomId: room.id}} type="info"/>
                ))}
            </Grid>
        </div>
    );
}

export default ParentRoomProfile;