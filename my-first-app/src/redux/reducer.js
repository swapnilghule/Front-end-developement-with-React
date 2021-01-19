import { TECHNOLOGY } from '../shared/technology.js';
import { IMAGES }  from '../shared/images.js';

export const initialState ={
	teches: TECHNOLOGY ,
	images : IMAGES

}


export const Reducer = (state=initialState , action) =>{
	return state;
}