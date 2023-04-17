const { response } = require('./app');
const User = require('./models/user')
const axios = require('axios').default;

const URL = 'http://localhost:3000/'

const alexander = new User('alexander', 'hello@all.com')

// axios.get('http://localhost:3000/users').then(function (res) {
//     console.log(res.data)
// })

async function main() {

    // create a user with axios
    await axios.post(URL + 'users', {
        name: 'Alexander',
        email: 'alex@me.com'
    }) // after creating the static method on the user class, that self
    // creates users, theres no need to create variables to hold
    // and log them to the console as in the following example

    const bob = await axios.post(URL + 'users', {
        name: 'bob',
        email: 'bob@me.com'
    }).then(function (res){
        //console.log(res.data)
    })

    const allUsers = await axios.get(URL + 'users')

    // const alexanderRecipes = await axios.post(URL + 'users/alexander/recipes', {
    //     title: 'Sweet and sour pork',
    //     date: Date.now(),
    //     ingredients: ['salt', 'butter', 'olives', 'water']
    // })


    console.log('all users: ', allUsers.data)
}

main()