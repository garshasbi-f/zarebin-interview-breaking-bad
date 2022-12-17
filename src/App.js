import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import QuotesPage from "./pages/QuotesPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quote" element={<QuotesPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
