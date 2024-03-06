
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='feature' element={<Features/>}/>
      </Routes>
     <Footer/>
    </Router>
  )
}

export default App