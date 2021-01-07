import {DELETE,ADD,COMPLETE,EDIT} from '../actionTypes/actionTypes'

export const deelete =(payload)=>({
    type:DELETE,
    payload
})

export const add=(payload)=>({
    type:ADD,
    payload
})

export const complete=(payload)=>({
    type:COMPLETE,
    payload
})

export const edit=(payload)=>({
    type:EDIT,
    payload
})