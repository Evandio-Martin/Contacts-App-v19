import React from 'react';
import Joi from 'joi';
import { validateProps } from '../utils/validation';
import { LocaleConsumer } from '../contexts/LocaleContext';

const searchBarPropsSchema = Joi.object({
  keyword: Joi.string().required(),
  keywordChange: Joi.function().required(),
})

function SearchBar(props) {
    const validatedProps = validateProps(searchBarPropsSchema, props, 'SearchBar')
    const { keyword, keywordChange } =  validatedProps;

    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <input
                            className="search-bar"
                            type="text"
                            placeholder={locale === 'id' ? 'Cari berdasarkan nama' : 'Search by name'}
                            value={keyword}
                            onChange={(event) => keywordChange(event.target.value)}
                        />
                    )
                }
            }
        </LocaleConsumer>
    );
}

export default SearchBar;