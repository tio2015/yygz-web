import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { FloatingBackButton } from "./components/Layout";
import Home from "./pages/Home";
import EfficacyPage from "./pages/EfficacyPage";
import LabsPage from "./pages/LabsPage";
import SupplyChainPage from "./pages/SupplyChainPage";
import ProductPage from "./pages/ProductPage";
import ReferencesPage from "./pages/ReferencesPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/efficacy/:id"} component={EfficacyPage} />
      <Route path={"/labs"} component={LabsPage} />
      <Route path={"/supply-chain"} component={SupplyChainPage} />
      <Route path={"/product"} component={ProductPage} />
      <Route path={"/references"} component={ReferencesPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <FloatingBackButton />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
