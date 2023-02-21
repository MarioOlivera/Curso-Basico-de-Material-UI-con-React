import {urlFetch} from '../constants/index'

export const getGitHubUser = async (user) => {

    const response = await fetch(`${urlFetch}${user}`,{
        method: 'GET'
    })

    const playload = response.json()

    return playload
}