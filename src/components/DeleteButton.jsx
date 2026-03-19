import React from 'react';
import Joi from 'joi';
import { validateProps } from '../utils/validation';
import { FiDelete } from 'react-icons/fi';

const deleteButtonPropsSchema = Joi.object({
    id: Joi.string().required(),
    onDelete: Joi.func().required(),
})

function DeleteButton(props) {
  const validatedProps = validateProps(deleteButtonPropsSchema, props, 'DeleteButton')
  const { id, onDelete } = validatedProps;
  
  return <button className='contact-item__delete' onClick={() => onDelete(id)}><FiDelete /></button>
}

export default DeleteButton;