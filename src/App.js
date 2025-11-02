import { Routes, Route, Navigate } from "react-router-dom";
import { ShoppingListProvider } from "./context/ShoppingListContext";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import ShoppingListOverview from "./components/ShoppingListOverview";
import ShoppingListDetail from "./components/ShoppingListDetail";

export default function App() {
  return (
    <ShoppingListProvider>
      <div className="app">
        <Header />
        <div className="content">
          <SidePanel />
          <main className="main">
            <Routes>
              <Route path="/" element={<Navigate to="/overview" replace />} />
              <Route path="/overview" element={<ShoppingListOverview />} />
              <Route path="/list/:id" element={<ShoppingListDetail />} />
              <Route path="*" element={<p>Not found</p>} />
            </Routes>
          </main>
        </div>
      </div>
    </ShoppingListProvider>
  );
}