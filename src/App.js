import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/user.context";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  const { currentUser } = useContext(UserContext);
  console.log("CURRENT USER IN APP", { currentUser });
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
