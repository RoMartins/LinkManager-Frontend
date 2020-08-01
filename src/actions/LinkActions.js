import {api, apiGet, apiPut} from '../helpers/api'

export const LINK_CREATE = 'LINK_CREATE'
export const LINK_LIST = 'LINK_LIST'
export const LINK_ONE = 'LINK_LINK_ONELIST'
export const LINK_UPDATE = 'LINK_UPDATE'

export const LinkCreate = (data) => {
    const isSocial = data.isSocial ? true : false ;
    const payload = api('/link', {...data, isSocial});
    
    return {type: LINK_CREATE , payload}
}

export const LinkUpdate = (id,data) => {
    const isSocial = !!data.isSocial 
    const payload = apiPut(`/link/${id}`, {...data, isSocial});
    
    return {type: LINK_UPDATE , payload}
}


export const LinkList = () => {
    const payload = apiGet('/link', );
    
    return {type: LINK_LIST, payload}
}


export const LinkOne = (id) => {
    const payload = apiGet(`/link/${id}` );
    
    return {type: LINK_ONE, payload}
}