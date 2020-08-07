import React, { useReducer } from 'react'
import axios from 'axios';
import comicsReducer from './comicsReducer';
import comicsContext from './comicsContext';

import { GET_COMICS, GET_CAPTAIN_COMICS, GET_COMIC, SET_LOADING } from './types';

const key = "90d608269f5e11cdfe8903db7b9b406a";
const BASEURL = "https://gateway.marvel.com:443/v1/public/comics";
const hash = "309bcd4cfa366fc216ddeef81bc5b638";
const captainId = "1010338";


const ComicsState = props => {
    const initialState = {
        comics: [],
        captainComics: [],
        comic: [],
        loading: false
    }
// gateway.marvel.com:443/v1/public/comics/86495?apikey=90d608269f5e11cdfe8903db7b9b406a

    const [state, dispatch] = useReducer(comicsReducer, initialState)

    //api request functions

    //Get All  comic issues screen
    const getComics = async () => {
        dispatch({
            type: SET_LOADING
        })
        try {
            const res = await axios.get(`${BASEURL}?ts=1&apikey=${key}&hash=${hash}`);

            dispatch({
                type: GET_COMICS,
                payload: res.data.data.results
            })
        } catch (error) {
            console.log(error);
        }

    }

    // Get all comic issues in which Captain Marvel appears
    const getCaptainComics = async (to, from) => {
        dispatch({
            type: SET_LOADING
        })
        try {
            let res;
            const url = `https://gateway.marvel.com/v1/public/characters/${captainId}/comics`;
            if(to && from){
               res = await axios.get(`${url}?dateRange=${from}%2C${to}&ts=1&apikey=${key}&hash=${hash}`); 

            }else{
                res = await axios.get(`${url}?ts=1&apikey=${key}&hash=${hash}`);
            }

            dispatch({
                type: GET_CAPTAIN_COMICS,
                payload: res.data.data.results
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Get a single comic
    const getComic = async id => {
        dispatch({
            type: SET_LOADING
        })
        try {
            const res = await axios.get(`${BASEURL}/${id}?ts=1&apikey=${key}&hash=${hash}`);
            dispatch({
                type: GET_COMIC,
                payload: res.data.data.results
            })
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <comicsContext.Provider value={{
            comics: state.comics,
            comic: state.comic,
            captainComics: state.captainComics,
            loading: state.loading,
            getComics,
            getCaptainComics,
            getComic

        }}>

            {props.children}
        </comicsContext.Provider>
    )


}

export default ComicsState