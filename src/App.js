import "bootstrap/dist/css/bootstrap.min.css";

import ClickCounter from "./ClickCounter";
import TodoList from "./TodoList";
import SignupForm from "./SignupForm";

function App() {
  return (
    <div className="container mt-5">
      <ClickCounter />
      <hr />
      <div className="mt-5">
        <TodoList />
      </div>
      <hr />
      <div className="mt-5">
        <SignupForm />
      </div>
    </div>
  );
}

export default App;
