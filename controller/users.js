import { v4 as uuidv4 } from 'uuid';

let users = []

export const getUsers = (req,res)=>{
    res.send(users)
}

export const createUser = (req,res)=>{
    users.push({id: uuidv4(),...req.body});
    res.send(`User with the name ${req.body.firstName} added`)
}

export const getUser = (req,res)=>{
    const { id } = req.params;
    const foundUser = users.find((user) => user.id===id);
    res.send(foundUser)
}

export const deleteUser = (req,res)=>{
    const { id } = req.params;
    users = users.filter((user)=> user.id != id);
    res.send(`User with the ID:${id} has been deleted successfully!!`)
}

export const editUser = (req,res)=>{
    const { id } = req.params;
    const {firstName,lastName,age} = req.body;
    const user = users.find((user)=> user.id === id) 
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated`)
}