

function FetchMultipleData(urls){
    const promise = urls.map((urls) => 
    fetch(urls).then((resp)=> resp.json()));

    return Promise.all(promise);
}

const urls= [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/3",

]

FetchMultipleData(urls).then((resp)=> console.log(resp))