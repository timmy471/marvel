import React, { useReducer } from 'react'
import axios from 'axios';
import comicsReducer from './comicsReducer';
import comicsContext from './comicsContext';

import { GET_COMICS, GET_CAPTAIN_COMICS, GET_COMIC, SET_LOADING } from './types';

const key = "90d608269f5e11cdfe8903db7b9b406a";
const BASEURL = "https://gateway.marvel.com:443/v1/public/comics";
const hash = "309bcd4cfa366fc216ddeef81bc5b638";
const captainId = "1010338";
// https://gateway.marvel.com:443/v1/public/comics/characters/1010338/comics?ts=1&apikey=90d608269f5e11cdfe8903db7b9b406a&hash=309bcd4cfa366fc216ddeef81bc5b638 
// https://gateway.marvel.com/v1/public/characters/1010338/comics?dateRange=2018-01-01%2C2020-01-02&ts=1&apikey=90d608269f5e11cdfe8903db7b9b406a&hash=309bcd4cfa366fc216ddeef81bc5b638

const ComicsState = props => {
    const initialState = {
        comics: [],
        captainComics: [],
        comic: [],
        loading: false
    }


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
    const getCaptainComics = async () => {
        dispatch({
            type: SET_LOADING
        })
        try {
            const res = await axios.get(`https://gateway.marvel.com/v1/public/characters/${captainId}/comics?ts=1&apikey=${key}&hash=${hash}`);
            console.log(res.data.data.results);
        dispatch({
            type: GET_CAPTAIN_COMICS,
            payload: res.data.data.results
        })
        } catch (error) {
            console.log(error);
        }
    }

    // Get a single comic
    const getComic = () => {
       

    }


    return (
        <comicsContext.Provider value={{
            comics: state.comics,
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