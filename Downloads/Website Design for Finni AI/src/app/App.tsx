import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Home } from "@/app/pages/Home";
import { BlogList } from "@/app/pages/BlogList";
import { BlogPost } from "@/app/pages/BlogPost";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}