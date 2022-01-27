import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header'
import BlogDetails from './components/pages/blogDetails/BlogDetails'
import AuthProvider from './authentication/AuthProvider';
import LogIn from './components/pages/LogIn/LogIn';
import PrivateRoute from './authentication/PrivateRoute';
import AddExperience from './components/pages/Home/AddExperience/AddExperience';
import DashBoard from './components/pages/Dashboard/Dashboard';
import MakeAdmin from './components/pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageBlogs from './components/pages/Dashboard/ManageBlogs/ManageBlogs';
import WriteArticle from './components/pages/Dashboard/WriteArticle/WriteArticle';
import NotFound from './components/pages/NotFound/NotFound';
import Register from './components/pages/Register/Register';
import EditArticle from './components/pages/Home/Article/EditArticle';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='details/:id' element={<PrivateRoute><BlogDetails /></PrivateRoute>} />
            <Route path='writeblog' element={<PrivateRoute><AddExperience /></PrivateRoute>} />
            <Route path='dashboard' element={<PrivateRoute><DashBoard /></PrivateRoute>} >
              <Route path='' element={<ManageBlogs />} />
              <Route path='editarticle/:id' element={<EditArticle />} />
              <Route path='allblogs' element={<ManageBlogs />} />
              <Route path='makeadmin' element={<MakeAdmin />} />
              <Route path='writearticle' element={<WriteArticle />} />
            </Route>
            <Route path='login' element={<LogIn />} />
            <Route path='register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
