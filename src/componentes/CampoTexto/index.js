import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificaado = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input required={props.obrigatorio} placeholder={placeholderModificaado} />
        </div>
    )
}

export default CampoTexto