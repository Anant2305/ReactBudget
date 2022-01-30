import entriesTypes from '../actions/entries.actions'

const reducer =(state = initialEntries, action) => {
    
    switch(action.type) {
        case entriesTypes.POPULATE_ENTRIES:
            return action.payload;
        case entriesTypes.ADD_ENTRY:
            const newEntries = state.concat ({...action.payload});
            return newEntries;
        case entriesTypes.REMOVE_ENTRY:
            const removeEntries = state.filter (
            (entry) => entry.id !== action.payload.id);
            return removeEntries;
        case entriesTypes.POPULATE_ENTRY_DETAILS:
        case entriesTypes.UPDATE_ENTRY:
            const updateEntries = [...state];
            const index = updateEntries.findIndex( 
                (entry) => entry.id === action.payload.id
            );
            updateEntries[index] = {...updateEntries[index], ...action.payload.entry};
            return updateEntries;
        default:
        return state;
    }
};
export default reducer;
var initialEntries = [];