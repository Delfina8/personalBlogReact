export type Action = {type: 'ADD_TOKEN'; payload: string}; //A propriedade “payload: string” tem a função de armazenar o token.

export const addToken = (token: string): Action => ({
    type:'ADD_TOKEN',
    payload: token,
});