import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fecthPosts = () => {

    return ( async (dispatch) =>{
        const response = await jsonPlaceHolder.get("/posts");
        dispatch({type:"FETCH_POSTS",payload:response});
    });
}