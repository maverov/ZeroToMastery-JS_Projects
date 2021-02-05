import './App.css';
import { createStore, combineReducers } from "redux";

function App() {

// ACTION CREATOR
 const createPolicy = (name, cash) => {
   return { // ACTION
      type: "CREATE_POLICY",
      payload: {
        name: name,
        cash: cash
      }
   }
 }

//  ACTION CREATOR
 const deletePolicy = (name) => {
  // v  ACTION
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  }
 }

//  ACTION CREATOR
const createClaim = (name, claimAmount) => {
  // ACTION BELOW
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      claimAmount: claimAmount
    }
  }
}
 
// Reducers (Departments)
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    // we care about this action form
     return [...oldListOfClaims, action.payload];
  }

  return oldListOfClaims;
}

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.claimAmount;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.claimAmount;
  }

  return bagOfMoney;
}

const policies = (oldListOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [oldListOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return oldListOfPolicies.filter(name => name !== action.payload.name)
  }

  return oldListOfPolicies;
}

  const ourDepartments = combineReducers({
    accounting: accounting,
    claimHistory: claimsHistory,
    policies: policies
  })

  const store = createStore(ourDepartments);

  store.dispatch(createPolicy("Misho", 20));
  store.dispatch(createPolicy("Kuncho", 40));
  store.dispatch(createClaim("Shaman", 45));
  store.dispatch(createPolicy("Minka", 100))
  console.log(store.getState());

// =============================================== //
  return (
    <div className="app">
      <h1>qweqeqw</h1>
    </div>
  );
}

export default App;
