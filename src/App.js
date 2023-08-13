import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./contexts/user.context";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => {
  return (
    <div>
      <h1>I am the shop page</h1>
    </div>
  );
};

const App = () => {
  const { currentUser } = useContext(UserContext);
  console.log("CURRENT USER IN APP", { currentUser });
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route
          path="auth"
          element={currentUser ? <Navigate to="/" replace /> : <Authentication />}
        />
      </Route>
    </Routes>
  );
};

export default App;
