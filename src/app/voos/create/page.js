'use client'

import Pagina from "@/app/components/Pagina"
import { Field, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap"
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


export default function Page() {

  const route = useRouter()

  const aeroportos = JSON.parse(localStorage.getItem('aeroportos')) || []
  const empresas = JSON.parse(localStorage.getItem('empresas')) || []

  function salvar(dados) {
    const voos = JSON.parse(localStorage.getItem('voos')) || []
    voos.push(dados)
    localStorage.setItem('voos', JSON.stringify(voos))
    return route.push("/voos")
  }

  return (
    <Pagina titulo="Criar Empresa">
      <Formik
        initialValues={{ internacional: '', identificador: '', data_checkin: '', data_embarque: '', id_origem: '', id_destino: '', empresa_id: '', preco: '' }}
        onSubmit={values => salvar(values)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
        }) => (
          <Form className="my-3">
            <Form.Group className="mb-3" controlId="internacional">
              <Form.Label>Internacional</Form.Label>
              <Form.Control
                type="text"
                name="internacional"
                value={values.internacional}
                onChange={handleChange('internacional')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="identificador">
              <Form.Label>Identificador</Form.Label>
              <Form.Control type="text"
                name="identificador"
                value={values.identificador}
                onChange={handleChange('identificador')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="data_checkin">
              <Form.Label>Data Checkin</Form.Label>
              <Form.Control type="text"
                name="data_checkin"
                value={values.data_checkin}
                onChange={handleChange('data_checkin')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="data_embarque">
              <Form.Label>Data Embarque</Form.Label>
              <Form.Control type="text"
                name="data_embarque"
                value={values.data_embarque}
                onChange={handleChange('data_embarque')} />
            </Form.Group>

            <Form.Select aria-label="Default select example"
              name="id_origem"
              value={values.id_origem}
              onChange={handleChange('id_origem')}
              className="mb-3"
            >
              <option>Selecionar Origem</option>
              {aeroportos.map(item => (
                <>
                  <option>{item.nome}</option>
                </>
              ))}
            </Form.Select>

            <Form.Select aria-label="Default select example"
              name="id_destino"
              value={values.id_destino}
              onChange={handleChange('id_destino')}
              className="mb-3"
            >
              <option>Selecionar Destino</option>
              {aeroportos.map(item => (
                <>
                  <option>{item.nome}</option>
                </>
              ))}
            </Form.Select>

            <Form.Select aria-label="Default select example"
              name="empresa_id"
              value={values.empresa_id}
              onChange={handleChange('empresa_id')}
              className="mb-3"
            >
              <option>Selecionar Empresa</option>
              {empresas.map(item => (
                <>
                  <option>{item.nome}</option>
                </>
              ))}
            </Form.Select>

            <Form.Group className="mb-3" controlId="preco">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type="text"
                name="preco"
                value={values.preco}
                onChange={handleChange('preco')} />
            </Form.Group>

            <div className="text-center">
              <Button variant="success" onClick={handleSubmit}><FaCheck /> Salvar</Button>
              <Link href="/empresas" className="btn btn-danger mx-3"><FaTimes /> Cancelar</Link>
            </div>
          </Form>
        )}
      </Formik>
    </Pagina>
  )
}
