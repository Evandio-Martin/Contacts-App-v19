import React from 'react';
import Joi from 'joi';
import { validateProps } from '../utils/validation';

const searchBarPropsSchema = Joi.object({
  keyword: Joi.string().required(),
  keywordChange: Joi.function().required(),
})

function SearchBar(props) {
    const validatedProps = validateProps(searchBarPropsSchema, props, 'SearchBar')
    const { keyword, keywordChange } =  validatedProps;

    return (
        <input
            className="search-bar"
            type="text"
            placeholder="Cari berdasarkan nama"
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)}
        />
    );
}

export default SearchBar;