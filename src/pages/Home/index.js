import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';

// Componentes criados e utilizados
import Modal from '../../components/Modal/Modal.js';
import RemoveModal from '../../components/RemoveModal/RemoveModal';

export default function Home({ history, match }) {
    const [tools, setTools] = useState([]);
    const [show, setShow] = useState(false);

    const [removeShow, setRemoveShow] = useState(false);
    const [removeId, setRemoveId] = useState('');

    const [searchText, setSearchText] = useState('')
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        // Faz a requisição das informações da API através do axios assim que a pagina é iniciada.
        async function loadTools() {
            const response = await api.get('/tools')
            setTools(response.data)
        }

        loadTools()
    }, [])

    // Confere o texto da barra de pesquisa e o salva na variavel SearchText
    function handleSearchText(event) {
        setSearchText(event.target.value)
        console.log(searchText)
    }

    // O mesmo que o handleSearchText porém com a checkbox
    function handleCheckbox(event) {
        setCheckbox(event.target.checked);
        console.log(checkbox);
    }

    // Função encarregada de desativar e ativar o Modal (Formulario)
    function toggleModal() {
        setShow(!show);
    }

    // Função encarregada de desativar e ativar o modal para remover o item, passando o id do item.
    function toggleRemoveModal(id) {
        setRemoveId(id);
        setRemoveShow(!removeShow);
    }

    // Função de redirecionamento para o resultado da pesquisa, passando o valor da pesquisa e checkbox.
    function handleSearchSubmit(event) {
        event.preventDefault();

        history.push(`/search/${searchText}/${checkbox}`)
    }

    return (
        <>
            {/* Pop up para remover item, e modal para adicionar item */}
            <RemoveModal name="example" toggle={toggleRemoveModal} show={removeShow} id={removeId} />
            <Modal name="example" toggle={toggleModal} show={show} />
            <div className="pageContainer">
                <form onSubmit={handleSearchSubmit}>
                    <div className="row">
                        <input
                            className="searchBar"
                            id="search"
                            type="text"
                            placeholder="Pesquisar"
                            onChange={handleSearchText}
                        />
                        <div className="checkboxContainer">
                            <input
                                className="checkbox"
                                type="checkbox"
                                onChange={handleCheckbox}
                            />
                            <p> Procurar apenas nas tags </p>
                        </div>
                        <button onClick={toggleModal} type="button" className="addButton"> Add + </button>
                    </div>
                    {/* Botão invisivel, reponsavel para dar submit pela tecla Enter. */}
                    <button className='invisibleButton' type="submit">submit</button>
                </form>
                <div className='cards'>
                    {/* Passa pelos dados fornecidos pela api e os mostra conforme o html. */}
                    {tools.map(tool => (
                        <div className='card' key={tool.id}>
                            <div className="delete-row">
                                <a href={tool.link} className='title'>{tool.title}</a>
                                <button className='remove' onClick={() => toggleRemoveModal(tool.id)}> Remove </button>
                            </div>
                            <p className='description'>{tool.description}</p>
                            {/* Trata as tags para ficar com '#', ',' e espaços depois das virgulas. */}
                            <p className='tags'>{tool.tags ? tool.tags.map(i => '#' + i).toString().split(',').map(i => ' ' + i).toString() : ''}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}