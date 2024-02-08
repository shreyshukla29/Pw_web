function racePromise(promises){
    return Promise.race(promises);
}

const promise1 = new Promise((reject)=>{
    setTimeout(() => {
        reject('Promise1 is reject')
    }, 2000);
})
const promise2 = new Promise((reject)=>{
    setTimeout(() => {
        reject('Promise2 is reject')
    }, 2000);
})

const promise3 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve('Promise 3 is resolved')
    }, 500);
})

const promise = [promise1,promise2,promise3];

racePromise(promise).then((resp)=> console.log(resp)).catch((error)=> console.log(error))