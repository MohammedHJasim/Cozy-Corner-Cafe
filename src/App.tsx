import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MenuBreakfast from "./pages/menu/Breakfast";
import MenuLunch from "./pages/menu/Lunch";
import MenuBeverages from "./pages/menu/Beverages";
import MenuDesserts from "./pages/menu/Desserts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />}>
            <Route index element={<Navigate to="breakfast" replace />} />
            <Route path="breakfast" element={<MenuBreakfast />} />
            <Route path="lunch" element={<MenuLunch />} />
            <Route path="beverages" element={<MenuBeverages />} />
            <Route path="desserts" element={<MenuDesserts />} />
          </Route>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
