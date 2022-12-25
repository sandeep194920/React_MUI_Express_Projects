import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// components
import Navbar from './components/Navbar'

function App() {
  /*REACT ROUTER 5*/

  // return (
  //   <Router>
  //     <Navbar />
  //     <Switch>
  //       <Route exact path="/">
  //         <Home />
  //       </Route>
  //       <Route path="/about">
  //         <About />
  //       </Route>
  //       <Route path="/cocktail/:id">
  //         <SingleCocktail />
  //       </Route>
  //       <Route path="*">
  //         <Error />
  //       </Route>
  //     </Switch>
  //   </Router>
  // )

  /*REACT ROUTER 6*/
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
