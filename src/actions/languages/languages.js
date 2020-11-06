import * as types from "../../lib/types";

export function getlanguages() {
    const languagesArray = [{
        "name": 'English', icon: 'eng', text: 'A', bgColor: 'rgba(3,154,170,0.9)'
    },{
        "name": 'Tamil', icon: 'tamil', text: 'அ', bgColor: 'rgba(107,106,77,0.9)'
    }];
    return {
        type: types.SET_LANGUAGES,
        languagesArray: languagesArray
    }
    
} 
