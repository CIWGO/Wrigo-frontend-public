import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
	// topicId: null,
	// topicContent: null,
	// popularity: null
	topicData: null
};

const topicSlice = createSlice({
	name: "topic",
	initialState: initialUserState,
	reducers: {
		// saveTopicId: (state, action) => {
		//   state.topicId = action.payload.topicId;
		// },
		// saveTopicContent: (state, action) => {
		//   state.topicContent = action.payload.topicContent;
		// },
		// savePopularity: (state, action) => {
		//   state.popularity = action.payload.popularity;
		// },
		saveTopicData: (state, action) => {
			state.topicData = action.payload;
		}
	}
});

export const topicReducer = topicSlice.reducer;
export const topicActions = topicSlice.actions;
