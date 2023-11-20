import asyncHandler from 'express-async-handler'

// get all contacts

export const getContacts = asyncHandler(async(req, res) => {
    res.send('get all');
});


// get contact

export const getContact = asyncHandler(async(req, res) => {
    res.send('get');
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
    res.send('created');
});


// edit

export const updateContacts = asyncHandler(async(req, res) => {
    res.send('updated');
});


//deleted

export const deleteContacts = asyncHandler(async(req, res) => {
    res.send('deleted');
});



























