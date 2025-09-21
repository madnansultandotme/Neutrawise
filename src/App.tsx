import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import InitialScreen from "./pages/auth/initialAuthScreen";
import EmailInput from "./pages/auth/EmailInput";
import CodeVerification from "./pages/auth/codeVerification";
import Onboarding from "./pages/onboarding/main";
import Dashboard2 from "./pages/Dashboard/Dashboard";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [Email, setEmail] = useState<string>("");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
            <Routes>
            <Route path="/onboarding" element={<Onboarding />} />
            <Route
              path="/dashboard2"
              element={
              <>
                <Dashboard2 />
                <Footer />
              </>
              }
            />
            <Route
              path="*"
              element={
              <div className="min-h-screen flex flex-col">
                <Navigation />
                <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/auth" element={<InitialScreen />} />
                  <Route path="/getStarted" element={<EmailInput onEmailSubmit={setEmail} />} />
                  <Route path="/codeVerification" element={<CodeVerification Email={Email} />} />
                </Routes>
                </main>
              </div>
              }
            />
            </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;