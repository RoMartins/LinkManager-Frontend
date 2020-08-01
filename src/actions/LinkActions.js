import {api, apiGet} from '../helpers/api'

export const LINK_CREATE = 'LINK_CREATE'
export const LINK_LIST = 'LINK_LIST'

export const LinkCreate = (data) => {
    const isSocial = data.isSocial ? true : false ;
    const payload = api('/link', {...data, isSocial});
    
    return {type: LINK_CREATE , payload}
}


export const LinkList = () => {
    const payload = apiGet('/link', );
    
    return {type: LINK_LIST, payload}
}