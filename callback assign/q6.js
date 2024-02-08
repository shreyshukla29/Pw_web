function fetchUserDataAndPost(userId){
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((resp) => resp.json())
    .then((userData)=> {
        return fetch('https://jsonplaceholder.typicode.com/posts?userId=${userId}')
        .then((resp)=> resp.json())
        .then((posts) => ({user: userData , posts}))
    });
}

fetchUserDataAndPost(1).then((result) =>{
    console.log(result);
})