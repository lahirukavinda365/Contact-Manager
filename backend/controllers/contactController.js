import asyncHandler from 'express-async-handler';
import Contact from '../modals/contactModal.js';

// get all contacts

export const getContacts = asyncHandler(async(req, res) => {
    try {
        const contacts = await Contact.find();
    
        res.status(200).json(contacts)
    } catch (error) {
        console.log(error);
    }
    
});


// get contact

export const getContact = asyncHandler(async(req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if(!contact){
            res.status(404);
            throw new Error("Contact not found..");
        }else{
            res.status(200).json(contact);
        }
    }catch(error){
        console.log(error);
    }
    
});

//post 

export const createContacts = asyncHandler(async(req, res) => {
    
    const {name, email, phone} = req.body;
    console.log(name);
    console.log(email);
    console.log(phone);

    if (!name || !email || !phone) {
        
        res.status(400);
        throw new Error ('All fields are mandatory...')
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json(contact);
    return contact;
});


// edit

export const updateContacts = asyncHandler(async(req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
            );
            res.status(200).json(contact);
    } catch (error) {
        console.log(error);
    }
});


//deleted

export const deleteContacts = asyncHandler(async(req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
            res.status(200).json(contact);
    } catch (error) {
        console.log(error);
    }
});



























