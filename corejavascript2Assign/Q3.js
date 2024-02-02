const contactInform = new Map();

contactInform.set('shrey',{
    age: 20,
    email:'shrey@gmail.com',
    location: 'usa'

})
contactInform.set('Rahul',{
    age: 20,
    email:'rahul@gmail.com',
    location: 'nepal'

})
contactInform.set('Shagun',{
    age: 20,
    email:'shagun@gmail.com',
    location: 'india'

})
contactInform.set('Sanju',{
    age: 20,
    email:'sanju@gmail.com',
    location: 'australia'

})

function getContactInform(name) {
    return contactInform.get(name)
    
}


console.log(getContactInform('Sanju'))