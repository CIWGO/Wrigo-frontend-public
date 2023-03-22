import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
	topicId: null
};

const topicSlice = createSlice({
	name: "topic",
	initialState: initialUserState,
	reducers: {
		saveTopicId: (state, action) => {
			state.topicId = action.payload;
		}
	}
});

export const topicReducer = topicSlice.reducer;
export const { saveTopicId } = topicSlice.actions;
