import { Grid, makeStyles } from '@material-ui/core';
import { deleteRoom } from 'axios/room';
import Room from 'components/Room/Room';
import { GetAllParentRoom } from 'graphql/RoomQueries';
import React, { useEffect, useState } from 'react';
import { FcAddDatabase } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectId_of_user, selectIsSignedIn, selectType_parent } from '../auth/authSlice';

function ParentHome() {
    const classes = useStyles();
    const parentId = useSelector(selectId_of_user);
    const typeParent = useSelector(selectType_parent);
    const history = useHistory();
    const [parentRoomList, setParentRoomList] = useState([]);
    const isSigned = useSelector(selectIsSignedIn);

    const handleDeleteRoom = async (id) => {
        let newParentRoomList = [...parentRoomList];
        newParentRoomList = await newParentRoomList.filter( (room) => Number(room.id) !== Number(id));
        setParentRoomList(newParentRoomList);
        await deleteRoom({ roomId: id});
    }
    
    useEffect ( ()=> {
        const getList = async () => {
            const parentRooms = await GetAllParentRoom(parentId);
            setParentRoomList(parentRooms);
        }
        getList();
    }, [parentId])

    const handleShowCreateRoom = () => {
        history.push("/createroom");
    };
 

    return (
        <div className={classes.root}>
            {isSigned && typeParent && <button onClick={handleShowCreateRoom} className={classes.addRoom}><FcAddDatabase /></button>}
            {parentRoomList.length !== 0 ? <Grid container className={classes.root}>
                {parentRoomList?.map( (room)=> (
                    <Room room={{...room, roomId: room.id}} type="userroom" onDelete={handleDeleteRoom}/>
                ))}
            </Grid> : <span className={classes.none}>Bạn chưa tạo phòng nào</span>}
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        padding: '48px 28px',
    },
    addRoom: {
        position: 'fixed',
        top: '40%',
        left: '8px',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '32px',
        "&:hover": {
            cursor: 'pointer',
        }
    },
    none: {
        fontStyle: 'italic',
        position: 'fixed',
        top: 100,
        left: 72,
    }
})

export default ParentHome;