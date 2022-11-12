import { Action } from "./actions";

export interface TokenState {
    tokens: string
}

const initialState = {
    tokens: ''
}

/* O reducer precisa receber dois parâmentos, o primeiro parâmetro é o state e o segundo é a ação que vai modificar
esse state
*/
export const tokenReducer = (state: TokenState = initialState, action:Action)=>{
    switch (action.type){
        case 'ADD_TOKEN': {
            return {tokens: action.payload}
        }
        default: 
        return state
    }
}