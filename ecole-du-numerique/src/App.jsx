import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import Home                  from './pages/Home/Home'
import About                 from './pages/About/About'
import FormationsParticuliers from './pages/FormationsParticuliers/FormationsParticuliers'
import FormationsEntreprises  from './pages/FormationsEntreprises/FormationsEntreprises'
import Evenements             from './pages/Evenements/Evenements'
import Workshops              from './pages/Workshops/Workshops'
import Partenaires            from './pages/Partenaires/Partenaires'
import Blog                   from './pages/Blog/Blog'
import Contact                from './pages/Contact/Contact'
import FormationParticulierDetail from './pages/FormationParticulierDetail/FormationParticulierDetail'
import FormationEntrepriseDetail  from './pages/FormationEntrepriseDetail/FormationEntrepriseDetail'
import EvenementDetail        from './pages/EvenementDetail/EvenementDetail'
import WorkshopDetail         from './pages/WorkshopDetail/WorkshopDetail'
import Pricing                from './pages/Pricing/Pricing'
import BlogDetail             from './pages/BlogDetail/BlogDetail'
import NotFound               from './pages/NotFound/NotFound'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite/PolitiqueConfidentialite'
import Remboursements           from './pages/Remboursements/Remboursements'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                        element={<Home />} />
          <Route path="/a-propos"                element={<About />} />
          <Route path="/formations-particuliers" element={<FormationsParticuliers />} />
          <Route path="/formations-entreprises"  element={<FormationsEntreprises />} />
          <Route path="/evenements"              element={<Evenements />} />
          <Route path="/workshops"               element={<Workshops />} />
          <Route path="/partenaires"             element={<Partenaires />} />
          <Route path="/blog"                    element={<Blog />} />
          <Route path="/blog/:slug"              element={<BlogDetail />} />
          <Route path="/contact"                 element={<Contact />} />
          <Route path="/pricing"                 element={<Pricing />} />
          <Route path="/formations/:slug"             element={<FormationParticulierDetail />} />
          <Route path="/formations-entreprises/:slug" element={<FormationEntrepriseDetail />} />
          <Route path="/evenements/:slug"        element={<EvenementDetail />} />
          <Route path="/workshops/:slug"         element={<WorkshopDetail />} />
          <Route path="/confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/remboursements"  element={<Remboursements />} />
          <Route path="*"                        element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
