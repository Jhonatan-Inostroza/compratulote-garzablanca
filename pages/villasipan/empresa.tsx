"use client"
import CFooter from '../components/estructura/footer'
import CFormulario from './componentes/formulario'
import CTop from './componentes/top'
import CAdorno from './componentes/adorno'
import VSanuncio from './componentes/anuncio'
import { useEffect, useState } from 'react'
import { Card, Row } from 'react-bootstrap'
export default function EstructuraInicio() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const verificador = window.location.pathname.split('/');
    const rptAPI = verificador[verificador.length - 1];
    fetch('http://localhost:3001/pgempresa')
      .then(response => response.json())
      .then(data => setDatos(data))
      .catch(error => console.error('Tenemos un error', error));
  }, []);

  return (
    <>
      <Row className='bg-white m-0'>
        <Card className='p-0'>
          <CTop selMenu="empresa" pagenav="./../" />
          <div className="x_content" >
            <CAdorno />
            <div className="container">
              <div className="row g-5 mb-3">
                <div className="col-md-7 col-lg-8">
                  <VSanuncio />
                  <div className="container mt-4 gx-5">
                    {datos.map((fila, index) => (
                      <div className="row" key={fila.id}>
                        <div className="col-md-12 py-3 text-justify">
                          <h2 className="fw-bold cProyect2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
                            </svg> {fila.title}</h2>
                          {fila.content && (
                            <p dangerouslySetInnerHTML={{ __html: fila.content }} />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <CFormulario />
              </div>
            </div>
          </div>
          <CFooter rutatmp='./../../' />
        </Card>
      </Row>
    </>
  )
}
