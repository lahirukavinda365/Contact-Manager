import express from 'express'
import { createContacts, deleteContacts, getContact, getContacts, updateContacts } from '../controllers/contactController.js';

const router = express.Router();

router.route('/').get(getContacts);

router.route('/:id').get(getContact);

router.route('/').post(createContacts);

router.route('/:id').put(updateContacts);

router.route('/:id').delete(deleteContacts);


export default  router;