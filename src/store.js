import {createStore} from 'redux';
import axios from 'axios';

let initialState={
posts:[]
}

const rootReducer= function(state=initialState, action){
    switch (action.type) {
        case 'ADD_POST':
            state.posts = state.posts.concat(action.post)
            break; 
        case 'GET_POST':
        state.posts = axios.get('https://jsonplaceholder.typicode.com/posts').then(response => state.posts=response.data
        );
        break;
        // case 'COMMENT_POST':
        // state.posts.map(post => {
        //     if (post.id === action.postId){
        //         return(...posts,...action.comment)
        //     }
        // })
        // break;
        // case 'UPDATE_POST':
        // state.posts.map(post => {
        //     if(post.id === action.postId){

        //         state.posts = state.posts.concat(action.post);
        //     }
        //     return state.posts;
            
        // })
        // break;

            case 'LIKE_POST':
            state.posts.map(post => {
                if (post.id === action.postId) {
                    return post.likes++
                }

                return post
            })

            break;
            default:return state;
    }

    return  state
}

const store = createStore(rootReducer)

export default store;