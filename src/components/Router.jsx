import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Research } from "./Research";
import { Portfolio } from "./Portfolio";
import Contact from "./Contact";

export const Router = () => {
  return (
    <Routes>
      {/* exactをつけると完全一致になります。Homeはexactをつけてあげます */}
      <Route exact path="/" element={<Home />}>
      </Route>
      <Route path="/Research" element={<Research />}>
      </Route>
      <Route path="/Portfolio" element={<Portfolio />}>
      </Route>
      <Route path="/Contact" element={<Contact />}>
      </Route>
    </Routes>
  );
};

