function userReducer(state: any, action: any) {
    switch (action.type) {
        case 'incremented_age': {
        return {
            name: state.name,
            age: state.age + 1
        };
        }
        case 'changed_name': {
        return {
            name: action.nextName,
            age: state.age
        };
        }
    }
}

export default userReducer