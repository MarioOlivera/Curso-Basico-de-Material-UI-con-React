import React, { useState } from 'react'

import { IconButton, Stack, TextField } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'


const Searcher = (props) => {

    const { inputUser, setInputUser} = props

    const [valueInput, setValueInput] = useState('')

    const onSearchValueChange = (event) => {

        const inputValue  = event.target.value

        setValueInput(inputValue)
    }

    const handleSubmit = () => {
        setInputUser(valueInput)
    }

    return (
    <Stack 
        direction={'row'}
        sx={{
            marginTop: '30px',
            width: '80%'
        }}>
        <TextField 
            id="github_user"
            label="Github User"
            placeholder='Octocat'
            variant='outlined'
            size='small'
            value={valueInput}
            onChange={onSearchValueChange}
            sx={{
                width: '90%'
            }}>
        </TextField>
        <IconButton 
            onClick={handleSubmit}
            size='small'
            sx={{
                left: '-45px'
            }}>
            <SearchIcon></SearchIcon>
        </IconButton>
    </Stack>)
}

export default Searcher