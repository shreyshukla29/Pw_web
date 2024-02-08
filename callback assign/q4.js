async function fetchData(url){
    const resp = await fetch(url)
    const data = await resp.json();
    return data;
}

fetchData('https://jsonplaceholder.typicode.com/todos/1') .then((data)=> console.log(data))