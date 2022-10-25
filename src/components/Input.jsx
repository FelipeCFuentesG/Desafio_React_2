import React from "react";

function Input(props) {
    const ingresarUsuario = (e) => { props.setUser(e.target.value) }
    const ingresarPassword = (e) => { props.setPassword(e.target.value) }
    return (
        <div className="bg-secondary p-4 mb-5 rounded-pill" >
            <h1 className="text-warning- text-center">Desafío Estado de los Componentes y Eventos.-</h1>
            <div className="mb-4">
                <label className="bg-warning text-black p-2 w-50 rounded-circle">Usuario</label>
                <input type="text" className="p-2 w-50 text-center rounded-circle" name="Nombre" onChange={ingresarUsuario} />
            </div>
            <div className="mb-4">
                <label className="bg-warning text-black p-2 w-50 rounded-circle">Contraseña</label>
                <input type="text" className="p-2 w-50 text-center rounded-circle" name="Nombre" onChange={ingresarPassword} />
            </div>
        </div>


    )
}

export default Input;
