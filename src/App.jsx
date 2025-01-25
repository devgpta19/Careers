import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update imports
import Careers from './Pages/Careers'; // Import Careers page
import JobDescription from './Components/JobDescription'; // Import Job Description page

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Careers page */}
        <Route path="/" element={<Careers />} />
        {/* Route for Job Description page */}
        <Route path="/job-description/:jobId" element={<JobDescription />} />
      </Routes>
    </Router>
  );
}

export default App;
