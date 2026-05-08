import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'sonner';

// Layout
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import Grade8To10 from './pages/Grade8To10';
import Grade11To12 from './pages/Grade11To12';
import CompetitiveExams from './pages/CompetitiveExams';
import HomeSchooling from './pages/HomeSchooling';
import Contact from './pages/Contact';
import DemoBooking from './pages/DemoBooking';
import OnlineSubscription from './pages/OnlineSubscription';
import LegalPrivacy from './pages/LegalPrivacy';
import TermsAndConditions from './pages/TermsAndConditions';

// Missing Pages
import About from './pages/About';
import CareerGuidance from './pages/CareerGuidance';
import EngineeringAllBranches from './pages/EngineeringAllBranches';

function App() {
  return (
    <Router>
      {/* Customized Toaster to match the Tactile Notebook / Brutalist theme */}
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          className: 'font-mono font-bold uppercase tracking-wider border-2 border-[#1C1C1C] shadow-[6px_6px_0px_rgba(28,28,28,1)] rounded-none',
          style: {
            backgroundColor: '#FDFBF7',
            color: '#1C1C1C',
            borderRadius: '0px',
          },
          success: {
            style: {
              backgroundColor: '#A7F3D0', // Mint highlighter tape for success
              border: '2px solid #1C1C1C',
              color: '#1C1C1C',
            },
          },
          error: {
            style: {
              backgroundColor: '#FBCFE8', // Pink highlighter tape for error
              border: '2px solid #1C1C1C',
              color: '#1C1C1C',
            },
          },
        }}
      />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/grade-8th-to-10th-all-boards" element={<Grade8To10 />} />
          <Route path="/grade-11th-to-12th-all-boards" element={<Grade11To12 />} />
          <Route path="/classes-11th-to-12th-all-boards" element={<Grade11To12 />} />
          <Route path="/competitive-exams" element={<CompetitiveExams />} />
          <Route path="/home-schooling" element={<HomeSchooling />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking-a-demo-class" element={<DemoBooking />} />
          <Route path="/online-subscription" element={<OnlineSubscription />} />
          <Route path="/privacy-policy" element={<LegalPrivacy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/career-guidance" element={<CareerGuidance />} />
          <Route path="/engineering-all-branches" element={<EngineeringAllBranches />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;