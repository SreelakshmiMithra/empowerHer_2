import { useReducer } from "react";

const initialState = {
  step: 1,
  name: "",
  email: "",
  username: "",
  password: "",
  isSubmitted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="form-container">
      <h2>Multi-Step Registration Form</h2>
      <p className="step-indicator">Step {state.step} of 3</p>

      {/* STEP 1 */}
      {state.step === 1 && (
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
          />

          <div className="button-group">
            <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
              Next
            </button>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {state.step === 2 && (
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={state.username}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "username",
                value: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "password",
                value: e.target.value,
              })
            }
          />

          <div className="button-group">
            <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
              Back
            </button>
            <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
              Next
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {state.step === 3 && !state.isSubmitted && (
        <div className="form-group">
          <h3>Review Details</h3>
          <p><strong>Name:</strong> {state.name}</p>
          <p><strong>Email:</strong> {state.email}</p>
          <p><strong>Username:</strong> {state.username}</p>

          <div className="button-group">
            <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
              Back
            </button>
            <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
              Submit
            </button>
          </div>
        </div>
      )}

      {/* SUCCESS MESSAGE */}
      {state.isSubmitted && (
        <div className="success-message">
          <h3>🎉 Registration Successful!</h3>
          <button onClick={() => dispatch({ type: "RESET_FORM" })}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
