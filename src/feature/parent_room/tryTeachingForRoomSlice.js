import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { deleteForTryTeaching } from "./invitedListForRoomSlice";

const tryTeachingForRoomAdapter = createEntityAdapter();

const initialState = tryTeachingForRoomAdapter.getInitialState({
  status: "idle",
});

export const fetchTryTeachingForRoom = createAsyncThunk(
  "tryTeachingForRoom/fetchTryTeachingForRoom",
  async (args) => {
    const { roomId, token } = args;
    return await fetch(
      `http://localhost:8000/findTutor/tryTeachingList/?pk_room=${roomId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
    });
  }
);

export const addTryTeachingForRoom = createAsyncThunk(
  "tryTeachingForRoom/addTryTeachingForRoom",
  async (args, thunkAPI) => {
    const { invitedId, token } = args;
    return await fetch(
      `http://localhost:8000/findTutor/listInvitedDetail/${invitedId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        thunkAPI.dispatch(deleteForTryTeaching(invitedId));
        return response.json();
      } else {
        alert("Lop hoc da co nguoi day thu, xin hay cho luot sau.");
      }
    });
  }
);

export const deleteTryTeachingForRoom = createAsyncThunk(
  "tryTeachingForRoom/deleteTryTeachingForRoom",
  async (args, thunkAPI) => {
    const { try_teachingId, token } = args;
    return fetch(
      `http://localhost:8000/findTutor/tryTeachingDetail/${try_teachingId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Ban khong the thuc hien hanh dong nay.");
      }
    });
  }
);

const tryTeachingForRoomSlice = createSlice({
  name: "tryTeachingForRoom",
  initialState,
  reducers: {
    deleteForTeaching(state, action) {
      tryTeachingForRoomAdapter.removeOne(state, action.payload);
    },
    upsertForTeaching(state, action) {
      tryTeachingForRoomAdapter.upsertOne(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTryTeachingForRoom.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTryTeachingForRoom.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload) {
          tryTeachingForRoomAdapter.setAll(state, action.payload);
        }
      })
      .addCase(fetchTryTeachingForRoom.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(addTryTeachingForRoom.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addTryTeachingForRoom.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload) {
          tryTeachingForRoomAdapter.addOne(state, action.payload);
        }
      })
      .addCase(addTryTeachingForRoom.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(deleteTryTeachingForRoom.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteTryTeachingForRoom.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload) {
          tryTeachingForRoomAdapter.removeOne(state, action.payload.id);
        }
      })
      .addCase(deleteTryTeachingForRoom.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export default tryTeachingForRoomSlice.reducer;

export const {
  selectAll: selectTryTeachingForRoom,
  selectById: selectTryTeachingForRoomByIds,
} = tryTeachingForRoomAdapter.getSelectors(
  (state) => state.parentRoom.tryTeaching
);

export const { deleteForTeaching, upsertForTeaching } =
  tryTeachingForRoomSlice.actions;

