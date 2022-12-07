
export const reducer = (state, action) => {
    switch (action.type) {

        case 'ADD_USER': {
            const user = state.user
            user.push(action.payload);
            return {...state, user }
        }

        case 'DELETE_USER': {
            const user = state.user;
            const userArray = user.filter(item => item.id !== action.payload)
            return {...state, user: userArray};
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
        // case 'ON_SEARCH': {
        //     const word = action.payload;
        //     const {search} = state
        //     const {user} = state;
        //     const filterData = user.filter((item) => item.name.toLowerCase().trim().includes(word.toLowerCase().trim()))
        //     search.push(filterData)
        //     return {...state, search}
        // }

        case 'ADD_CASH':{
            const cash = state.cash
            cash.push(action.payload)
            return {...state, cash}
        }

        case 'DELETE_CASH':{
            const {cash} = state;
            const arrayCash = cash.filter((item)=>item.id !== action.payload)
            return {...state, cash:arrayCash}
        }

        case 'EDIT_CASH':{
            const {cash} = state;
            const newData = cash.map((item) => {
                  if(item.id === action.payload.id) {
                     item = {
                        id:action.payload.id,
                        name:action.payload.name,
                        cashNumber:action.payload.cashNumber
                     }
                  }
                  return item
            })
            return {...state, cash:newData}
        }
        case 'ADD_INCOME':{
            const income = state.income
            income.push(action.payload)
            return {...state, income}
        }
        case 'EDIT_INCOME':{
            const {income} = state;
            const newData = income.map((item) => {
                if(item.id === action.payload.id) {
                    item = {
                        id:action.payload.id,
                        username:action.payload.username,
                        cashNumber:action.payload.cashNumber,
                        amount:action.payload.amount,
                        phoneNumber:action.payload.phoneNumber,
                        date:action.payload.date,
                    }
                }
                return item
            })
            return {...state, income:newData}
        }
        case 'DELETE_INCOME':{
            const {income} = state;
            const arrayCash = income.filter((item)=>item.id !== action.payload)
            return {...state, income:arrayCash}
        }

        default:
            return state;
    }
}
