console.clear();

//(Action Creators)
const createPolicy = (name, amount) => {  
  return{                                               //(Action #1) 
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {                                               //(Action #2) 
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {                                               //(Action #3) 
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};


// Reducers (Departments!)
const claimsHistory = (oldListOfClaims = [], action) => {     //Reducer #1
  if (action.type === 'CREATE_CLAIM') {
    // we care about this action (FORM!)
    return [...oldListOfClaims, action.payload];
  }
  
  // we don't care the action (form!!)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {              //Reducer #2
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {             //Reducer #3
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  
  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

createPolicy('Alex', 20)
createClaim('Alex', 120)
deletePolicy('Alex')

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));

// store.dispatch(createClaim('Alex', 120));
// store.dispatch(createClaim('Jim', 50));

// store.dispatch(deletePolicy('Bob'));

console.log(store.getState());