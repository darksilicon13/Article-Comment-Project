import {Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainPage from './pages/Main';
import AddPost from './pages/AddPost';
import PostPage from './pages/Post';
import NotFound from './pages/NotFound';
import EditPost from './pages/EditPost';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/posts/:id" element={<PostPage/>}/>
        <Route path="/addpost/" element={<AddPost/>}/>
        <Route path="/editpost/:id" element={<EditPost/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
