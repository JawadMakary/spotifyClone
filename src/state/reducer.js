export const initialState={
    user:null,
    playlists:[],
    playing:false,
    // for testing purposes put initialvalue for token(so it wont ask for auth everytime we refresh)
    token:null,
    item:null,
    discover_weekly:null
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
            case "SET_PLAYLISTS":
                return {
                  ...state,
                  playlists: action.playlists,
                };
                case "SET_DISCOVER_WEEKLY":
                    return {
                      ...state,
                      discover_weekly: action.discover_weekly,
                    };
        default:
            return state;
}
}
export default reducer