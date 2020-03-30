const initialState = {
    postList: [],
}

const posts = (state = initialState, action) =>{
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                postList: action.payload.posts
            }
    
        default:
            return state;
    }
}

export default posts;