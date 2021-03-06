import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'; 
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);
    //change only when setFetchedCountries change
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country, id) => <option key={id} value={country.slug}>{country.country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker