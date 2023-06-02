import { useState } from 'react';
import '../../../../../globalColors.module.css';
import './FormInserirItem.css';
import axios from 'axios'

function FormInserirItem () {
    const [imagem, setImagem] = useState()
    const [formValues, setFormValues] = useState({
        item: '',
        descricao: '',
        id_usuario: 1,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevData) => ({
            ...prevData,
            [name]: value 
        }));
    };

    const handleImageChange = (event) => {
        setImagem(event.target.files[0]);
    };

    const handleSubmit = async event => {
        const { item, descricao, id_usuario } = formValues
        const formData = new FormData();
        formData.append('item', item);
        formData.append('descricao', descricao);
        formData.append('id_usuario', id_usuario);
        formData.append('imagem', imagem);

        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/produto/registrar_produto', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="formContainer">
            <form className="form">
                <label className="label" htmlFor="item">Item:</label>
                <input className="input" type="text" id="item" name="item" value={formValues.item} onChange={handleInputChange}/>
                <label className="label" htmlFor="descricao">Descrição:</label>
                <textarea className="textarea" id="descricao" name="descricao" value={formValues.descricao} onChange={handleInputChange}/>
                <label className="label" htmlFor="imagem">Imagem: </label>
                <input className="buttonImg" type="file" id="imagem" name="imagem" accept=".jpeg, .jpg, .png" onChange={handleImageChange}/>
                <button className='buttonSubmit' type="submit" onClick={handleSubmit}>Cadastrar</button>
            </form>
        </div>
    )
};

export default FormInserirItem;