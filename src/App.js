import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ShoppingListProvider } from "./context/ShoppingListContext";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import ShoppingListOverview from "./components/ShoppingListOverview";
import ShoppingListDetail from "./components/ShoppingListDetail";
import NewListModal from "./components/NewListModal";

export default function App() {
  const [isNewListOpen, setNewListOpen] = useState(false);

  return (
    <ShoppingListProvider>
      <div className="app">
        <Header onCreateNew={() => setNewListOpen(true)} />
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

        <NewListModal
          isOpen={isNewListOpen}
          onClose={() => setNewListOpen(false)}
        />
      </div>
    </ShoppingListProvider>
  );
}