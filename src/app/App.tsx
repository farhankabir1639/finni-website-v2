import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { BlogList } from "./pages/BlogList";
import { BlogPost } from "./pages/BlogPost";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}