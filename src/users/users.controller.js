const uuid = require('uuid')

const usersDB = [
    {
        id: '81706b99-9a7c-48a8-ac4e-2ec76df9e3c5',
        first_name: 'Camila',
        last_name: 'Bonilla',
        email: 'mariabonilla@gmail.com',
        password: '123456',
        birthday: '1992/05/17'
    },
    {
        id: '5f27137f-8013-471b-aebd-ccbc311e6039',
        first_name: 'Emanuel',
        last_name: 'Sierra',
        email: 'emanuelsierra@gmail.com',
        password: '654321',
        birthday: '2022/03/23'
    },
    {
        id: '93b39048-b800-42d9-980e-c2b7570f54ae',
        first_name: 'Diego',
        last_name: 'Sierra',
        email: 'diegosierra@gmail.com',
        password: '7891011',
        birthday: '1987/03/20'
    }
];

const getAllUsers = () => {
    return usersDB
}

// console.log(getAllUsers());

const getUsersById = (id) => {
    const data = usersDB.find(user => user.id === id)
    return data
}

const createUser = (first_name, last_name, email, password, birthday) => {
    const newUser = {
        id: uuid.v4(),
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        birthday: birthday
    }
    usersDB.push(newUser)
    return newUser
}

// console.log(createUser('Andrea', 'Sierra', 'andreasierra@gmail.com', 'dkjshdjsh', '1980/09/30'));

module.exports = {
    getAllUsers,
    getUsersById,
    createUser
}