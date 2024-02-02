
function displayInfo(name , role){
    console.log(`Name ${name}, Role ${role}`)
}



displayInfo.call(null, 'rahul','frontend developer')

displayInfo.apply(null,['Shrey','Full Stack Developer'])

const person={
    name: 'shrey'
    
}

function greet(){
    console.log(`hello, ${this.name}`)
}

const boundGreet = greet.bind(person);
boundGreet()
