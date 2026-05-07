import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
