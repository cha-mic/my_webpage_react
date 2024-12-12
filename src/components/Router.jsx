import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Research } from "./Research";
import { Portfolio } from "./Portfolio";
import Contact from "./Contact";

export const Router = () => {
  return (
    <Routes>
      {/* exactをつけると完全一致になります。Homeはexactをつけてあげます */}
      <Route exact path="/my_webpage_react" element={<Home />}>
      </Route>
      <Route path="/my_webpage_react/Research" element={<Research />}>
      </Route>
      <Route path="/my_webpage_react/Portfolio" element={<Portfolio />}>
      </Route>
      <Route path="/my_webpage_react/Contact" element={<Contact />}>
      </Route>
    </Routes>
  );
};

