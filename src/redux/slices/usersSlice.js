import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserMails = createAsyncThunk("users/getmails", async () => {
    const res = await fetch("https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123");
    const data = await res.json();
    const inboxMails = data.filter((mail) => mail.tag === "inbox");
    const trashMails = data.filter((mail) => mail.tag === "trash");
    const spamMails = data.filter((mail) => mail.tag === "spam");
    const draftMails = data.filter((mail) => mail.tag === "draft");
    return {
        allMails: data,
        inbox: inboxMails,
        trash: trashMails,
        spam: spamMails,
        draft: draftMails,
    };
});

const initialState = {
    allMails: [],
    inbox: [],
    trash: [],
    spam: [],
    draft: [],
    loading: false,
    error: "",
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserMails.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUserMails.fulfilled, (state, action) => {
                state.loading = false;
                state.allMails = action.payload.allMails;
                state.inbox = action.payload.inbox;
                state.trash = action.payload.trash;
                state.spam = action.payload.spam;
                state.draft = action.payload.draft;
                state.error = "";
            })
            .addCase(fetchUserMails.rejected, (state) => {
                state.loading = false;
                state.allMails = [];
                state.inbox = [];
                state.trash = [];
                state.spam = [];
                state.draft = [];
                state.error = "Error while fetching data.";
            });
    },
});

export default usersSlice.reducer;
