import { BrowserRouter, Routes, Route } from 'react-router';

import { DashboardPage } from './pages/dashboard';
import { MyCollection } from './pages/mycollection';
import { Details } from './pages/details';
import { Layout } from './pages/Layout';

import './App.css';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL ?? '/'}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="my-collection" element={<MyCollection />} />
          <Route
            path="about"
            element={
              <section
                style={{
                  maxWidth: '1024px',
                  margin: '2rem auto',
                  padding: '1.5rem',
                  backgroundColor: '#f3f4f6',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  borderRadius: '1.5rem',
                }}
              >
                <h1
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '1.5rem',
                    color: '#2563eb',
                  }}
                >
                  About Page
                </h1>
                <p
                  style={{
                    fontSize: '1.25rem',
                    color: '#374151',
                    textAlign: 'center',
                  }}
                >
                  Miguel Francisco Reyes Roca, estudiante de la Universidad
                  Católica de Honduras en la carrera de Ingeniería en Ciencias
                  de la Computación. Apasionado por el desarrollo web y el diseño de
                  aplicaciones móviles, siempre en busca de nuevos retos y
                  aprendizajes.
                </p>
              </section>
            }
          />
          <Route path="details/:pokeid" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/**
  Functional Component
  Statefull Components
 */

export default App;