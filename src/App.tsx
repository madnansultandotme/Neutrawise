import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import InitialScreen from "./pages/auth/initialScreen";
import EmailInput from "./pages/auth/EmailInput";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import { useState } from "react";

const queryClient = new QueryClient();
const MainLayout = () => (
  <div className="min-h-screen flex flex-col">
    <Navigation />
    <main className="flex-1">
      <Outlet /> {/* Nested pages appear here */}
    </main>
    <Footer />
  </div>
);

// Layout with only Footer (no Header)
const AuthLayout = () => (
  <div className="min-h-screen flex flex-col">
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const App = () => {
  const [Email, setEmail] = useState<string>("");
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <Routes>
        {/* Routes with Header + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Routes with Footer only */}
        <Route element={<AuthLayout />}>
          <Route path="/auth" element={<InitialScreen />} />
          <Route path="/email-input" element={<EmailInput onEmailSubmit={setEmail} />} />
          <Route path="/signup" element={<Signup Email={Email} />} />
          <Route path="/login" element={<Login Email={Email} />} />
        </Route>

      </Routes>
    </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
};

export default App;
