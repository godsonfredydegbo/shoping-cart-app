// App.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Deux responsabilités :
//   1. Envelopper l'app dans CartProvider (état global du panier)
//   2. Définir les routes avec React Router v6
// ─────────────────────────────────────────────────────────────────────────────

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";

export default function App() {
  return (
    // BrowserRouter active le système de routing (gère l'URL du navigateur)
    <BrowserRouter>
      {/*
        CartProvider enveloppe tout → chaque composant peut lire le panier.
        Si on le mettait DANS une route, seuls ses enfants y auraient accès.
      */}
      <CartProvider>
        {/* min-h-screen : la page occupe au moins toute la hauteur de l'écran */}
        <div className="min-h-screen bg-gray-50">
          {/* Navbar est HORS des Routes → elle s'affiche sur toutes les pages */}
          <Navbar />

          {/* Zone de contenu principal */}
          <main className="max-w-7xl mx-auto px-4 py-8">
            <Routes>
              {/* Route "/" → HomePage */}
              <Route path="/" element={<HomePage />} />

              {/* Route "/shop" → ShopPage */}
              <Route path="/shop" element={<ShopPage />} />

              {/* Route "/cart" → CartPage */}
              <Route path="/cart" element={<CartPage />} />

              {/* TODO: Ajouter une route 404 (page non trouvée) */}
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
          </main>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
