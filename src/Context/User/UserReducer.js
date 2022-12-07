
export const  reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_USER': {
            const user = state.user;
            const array = user.filter(item => item.id !== action.payload)
            return {...state, user: array};
        }

        case 'ADD_USER': {
            const user = state.user
            user.push(action.payload);
            return {...state, user }
        }

        case 'EDIT_USER': {
            const {user} = state;
            const newData = action.payload;
            const array = user.map((item)=> {
                if(item.id === newData.id) {
                    item = {
                        ...item,
                        name: newData.name,
                        id: newData.id,
                        phoneNumber: newData.phoneNumber,
                        address: newData.address
                    }
                }
                return item
            })
            return {...state, user: array}
        }
        case 'ON_SEARCH':{
            const word = action.payload;
            let filterData = state.user.map((item) => {
                  if(item.name === word) return item
            })}

        default:
            return state;
    }
}