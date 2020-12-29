import _ from 'lodash';

export default (state={}, action) => {
    switch(action.type){
        case "CREATE_STREAM":
            return {...state, [action.payload.id] : action.payload};
        case "UPDATE_STREAM":
            return {...state, [action.payload.id] : action.payload};
        case "FETCH_STREAM":
            return {...state, [action.payload.id] : action.payload};
        case "DELETE_STREAM":
            return _.omit(state,action.payload);
        case "FETCH_STREAMS":
            //_.mapKeys convierte un arreglo en un objeto con la key igual al segundo argumento
            return {...state, ..._.mapKeys(action.payload,'id')};
        default:
            return state;
    }
};