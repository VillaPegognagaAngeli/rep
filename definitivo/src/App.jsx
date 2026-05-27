import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

import Layout from './components/Layout';
import Home from './pages/Home';
import LaVilla from './pages/LaVilla';
import Storia from './pages/Storia';
import Eventi from './pages/Eventi';
import Contatti from './pages/Contatti';
import Spazi from './pages/Spazi';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/la-villa" element={<LaVilla />} />
            <Route path="/storia" element={<Storia />} />
            <Route path="/eventi" element={<Eventi />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/spazi" element={<Spazi />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
