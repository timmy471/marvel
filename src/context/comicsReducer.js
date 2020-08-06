import { GET_COMICS, GET_INTRO_COMICS, GET_CAPTAIN_COMICS, GET_COMIC, SET_LOADING } from './types';


const comicsReducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading:true
            }

        case GET_COMICS:
            return {
                ...state,
                comics: action.payload,
                loading:false
            }

            case GET_CAPTAIN_COMICS:
                return {
                    ...state,
                    captainComics: action.payload,
                    loading:false
                }

            case GET_INTRO_COMICS:
                return {
                    ...state,
                    introComics: action.payload,
                    loading:false
                }
            

        default:
            return state;
    }
}

export default comicsReducer