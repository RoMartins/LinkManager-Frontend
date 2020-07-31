import {api} from '../helpers/api'

export const LINK_CREATE = 'LINK_CREATE'

export const LinkCreate = (data) => {
    const isSocial = data.isSocial ? true : false ;
    const payload = api('/link', {...data, isSocial});
    
    return {type: LINK_CREATE , payload}
}