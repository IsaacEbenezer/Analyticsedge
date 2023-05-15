export const getUsers = ()=> async (dispatch)=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        //dispatch an action
        dispatch({
            type:"GET_USERS",
            payload:data
        })
    }catch(error){
        console.log(error)
    }
}

export const getPosts = ()=>async (dispatch)=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        dispatch({
            type:"GET_POSTS",
            payload:data
        })
    }catch (error){
        console.log(error)
    }
}
export const getComments = ()=>async (dispatch)=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await response.json()
        dispatch({
            type:"GET_COMMENTS",
            payload:data
        })
    }catch (error){
        console.log(error)
    }
}