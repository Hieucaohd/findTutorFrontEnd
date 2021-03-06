import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginWithGoogleAccount, loginWithMail, logOut } from "axios/auth";
import { server_name } from "../../namespace";
import { removeUserInfoLocalStorage, setAvatarLocalStorage, setParentTrueLocalStorage, setTutorTrueLocalStorage, setUserInfoToLocalStorage } from "./localStorage";
 

const initialState = localStorage.getItem('isSignedIn') ? {
  status: "idle",
  id: localStorage.getItem('userId'),
  type_tutor: localStorage.getItem('userTypeTutor') === "false" ? false : true,
  type_parent: localStorage.getItem('userTypeParent') === "false" ? false : true,
  isSignedIn: localStorage.getItem('isSignedIn') === 'true' ? true : false,
  email: localStorage.getItem('userEmail'),
  userName: localStorage.getItem('userName'),
  avatar: localStorage.getItem('userAvatar'),
} : {
  status: "idle",
  token: "",
  refresh_token: "",
  id: "",
  type_tutor: "",
  type_parent: "",
  isSignedIn: false,
  email: '',
  userName: '',
  avatar: "",
};


// Lấy: id, token, type_tutor, type_parent từ server.
export const login = createAsyncThunk("auth/authLogin", async (args) => {
  return await loginWithMail(args);
});

export const loginWithGoogle = createAsyncThunk("/social-auth/google-auth/", async (args) => {
  return await loginWithGoogleAccount(args);
});

export const loginWithFacebook = createAsyncThunk("/social-auth/facebook-auth/", async (args) => {
  try {             
    const response = await fetch(`${server_name}/social-auth/facebook-auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(args),
    });
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log('Failed to login with facebook: ',error);
  }
})

export const logout = createAsyncThunk("/auth/logout/", async () => {
  return await logOut();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTutorTrue(state, action) {
      state.type_tutor = true;
      setTutorTrueLocalStorage();
    },
    setParentTrue(state, action) {
      state.type_parent = true;
      setParentTrueLocalStorage();
    },
    setAvatar(state, action) {
      state.avatar = action.payload;
      setAvatarLocalStorage(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.rejected, (state) => {
        state.status = "error";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle";
        if(action.payload){
          const {id, type_tutor, type_parent, email, username } = action.payload;
          state.id = id;
          state.type_tutor = type_tutor;
          state.type_parent = type_parent;
          state.isSignedIn = true;
          state.email = email;
          state.userName = username;
          setUserInfoToLocalStorage(action.payload);
        }
      })
      .addCase(loginWithGoogle.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.status = "idle";
        if(action.payload){
          const {id, type_tutor, type_parent, email, username } = action.payload;
          state.id = id;
          state.type_tutor = type_tutor;
          state.type_parent = type_parent;
          state.isSignedIn = true;
          state.email = email;
          state.userName = username;
          setUserInfoToLocalStorage(action.payload);
        }
      })
      .addCase(loginWithFacebook.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loginWithFacebook.fulfilled, (state, action) => {
        state.status = "idle";
        if(action.payload){
          const {id, type_tutor, type_parent, email, username } = action.payload;
          state.id = id;
          state.type_tutor = type_tutor;
          state.type_parent = type_parent;
          state.isSignedIn = true;
          state.email = email;
          state.userName = username;
          setUserInfoToLocalStorage(action.payload);
          // setUserInfoCookies(action.payload);
        }
      })
      .addCase(logout.pending, (state) => {
        state.status =  "loading";
        state.id = "";
        state.type_tutor = "";
        state.type_parent = "";
        state.isSignedIn = false;
        state.email = "";
        console.log('dang log out')
        removeUserInfoLocalStorage();
      })
      .addCase(logout.fulfilled, (state) => {
        state.status =  "idle";
      })
      .addCase(logout.rejected, (state) => {
        state.status =  "error";
      } )

  },
});

export default authSlice.reducer;

export const { setTutorTrue, setParentTrue, setStateFromCookies, setAvatar } = authSlice.actions;

// Lấy: id, token, type_tutor, type_parent cho component
export const selectStateStatus = (state) => state.status;
export const selectId_of_user = (state) => state.auth.id;
export const selectType_tutor = (state) => state.auth.type_tutor;
export const selectType_parent = (state) => state.auth.type_parent;
export const selectIsSignedIn = (state) => state.auth.isSignedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUsername = (state) => state.auth.userName
export const selectAvatar = state => state.auth.avatar;