import React, { Fragment } from 'react'

import { Stack, Typography } from '@mui/material'

import LocationInformation from '../../components/LocationInformation'
import PaperInformation from '../../components/PaperInformation'

const Description = (props) => {

    const {userState} = props
    const { bio } = userState

    return (
        <Fragment>
            <Stack sx={{
                justifyContent: "center"
            }}>
                <Typography variant={'body1'}>
                {
                    bio ? bio : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'   
                }
                </Typography>
            </Stack>
            <PaperInformation userState={userState}></PaperInformation>
            <LocationInformation userState={userState}></LocationInformation>
        </Fragment>
    )
}

export default Description