/*
 * 一叶归真 · 植养萃 招商站
 * Design: 暗室光影 (Dark Luxury Spotlight)
 * 4-page structure: Home / Tracks / Research / Partner
 */
import { Switch, Route, Router } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import ErrorBoundary from "@/components/ErrorBoundary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import TracksPage from "@/pages/TracksPage";
import ResearchPage from "@/pages/ResearchPage";
import PartnerPage from "@/pages/PartnerPage";
import NotFound from "@/pages/not-found";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tracks" component={TracksPage} />
      <Route path="/research" component={ResearchPage} />
      <Route path="/partner" component={PartnerPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <Router base="/health">
      <ThemeProvider defaultTheme="dark" storageKey="yygz-theme">
        <TooltipProvider>
          <ErrorBoundary>
            <div className="min-h-screen bg-background text-foreground flex flex-col">
              <Navbar />
              <main className="flex-1">
                <AppRouter />
              </main>
              <Footer />
            </div>
          </ErrorBoundary>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
