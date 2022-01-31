import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./page/LoginPage";
import Default from "./layout/Default";
import DashboardPage from "./page/DashboardPage";

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      <Default>
        <DashboardPage />
      </Default>
    </div>
  );
}

export default App;
