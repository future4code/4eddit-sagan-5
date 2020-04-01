const initialState = {
    postList: [],
    selectedPostID: "",
    postDetails: [],
}

const posts = (state = initialState, action) =>{
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                postList: action.payload.posts
            }
        case 'SET_SELECTED_POST':
            return {
                ...state,
                selectedPostID: action.payload.postID
            }
        case 'SET_POST_DETAILS':
            return {
                ...state,
                postDetails: action.payload.postDetails
            }
        case 'ADD_SCORE':
            return {
                ...state,
                postList: action.payload.postDetails
            }
        case 'SUB_SCORE':
            return {
                ...state,
                postList: action.payload.postDetails
            }    
        default:
            return state;
    }
}

export default posts;