import {
  BrowserRouter, 
  Route, 
  Routes, 
  Link, 
  Outlet,
  useNavigate,
  useParams,
  useLocation
} from 'react-router-dom';
import { 
  Provider
} from 'react-redux';
import React from 'react';
import { store } from './store';
import SignIn from './users/SignIn';


const NotImplemented = () => {
  console.log("Hola");
  return (
    <>
      <Link to="/videos">Ir a videos</Link>
      <h1>Esta página aún no está lista </h1>
    </>
  );
}

const VideoShow = () => {
  // Extraemos la información que viene como parametro en la URL
  let {id} = useParams();
  let location = useLocation();
  console.log(location.search);
  let queryParams = new URLSearchParams(location.search);
  for (const iterator of queryParams) {
    console.log(iterator);
  }
  return (
    <p>{id}</p>
  );
};


const UsuariosOutlet = () => {
  let navigate = useNavigate();
  let redirect = () => {
    navigate('/');
  };
  
  return (
    <>
      <button onClick={redirect}>Ir al home</button>
      <Outlet/>
    </>
  );
}

const Error404 = () => {
  console.log('ERROR');
  return (
    <>
      <Link to="/">Regresar al Inicio</Link>
      <h1>Esta página no existe - 404</h1>
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Provider store={ store }>

        <Routes>
            <Route path="/" element={ <NotImplemented /> } />
            
            <Route path="/usuario" element={ <UsuariosOutlet/> }>  
              <Route path="/registro" element={ <NotImplemented /> } />
              <Route path="/login" element={ <SignIn /> } />
              <Route path="/:id" element={ <NotImplemented /> } />
              <Route path="/:id/videos" element={ <NotImplemented /> } />
            </Route>
            
            <Route path="/videos">
              <Route path="/" element={ <NotImplemented /> } />
              <Route path="/nuevo" element={ <NotImplemented /> } />
              <Route path="/:id" element={ <VideoShow /> } />
            </Route>

            {/* El * significa cualqueir cosa */}
            <Route path="*" element={ <Error404 /> }></Route>
        </Routes>   

      </Provider>
    </BrowserRouter>
  );
}

export default App;
