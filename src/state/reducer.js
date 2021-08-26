export const initialState={
    user:null,
    playlists:[],
    playing:false,
    // for testing purposes put initialvalue for token(so it wont ask for auth everytime we refresh)
    token:'ahsj',
    item:null,
}
const reducer=(state,action)=>{
// console.log(action)
// action->type + payload
switch(action.type){
    case 'SET_USER':
        return{
            ...state,
            user:action.user
        };

        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }
        default:
            return state;
}
}
export default reducer