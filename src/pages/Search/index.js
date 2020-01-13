import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';

// Componentes utilizados
import Modal from '../../components/Modal/Modal.js';
import RemoveModal from '../../components/RemoveModal/RemoveModal';

export default function Search({ history, match }) {
    const [tools, setTools] = useState([]);
    const [show, setShow] = useState(false);

    const [removeShow, setRemoveShow] = useState(false);
    const [removeId, setRemoveId] = useState('');

    const [searchText, setSearchText] = useState('')
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {

        // Ao abrir a pagina verifica se a opção de tags esta ativada e faz a requisição para a api.
        async function loadTools() {
            const response = await api.get(`/tools?q=${match.params.item}`)
            setTools(response.data)

        }

        async function loadToolsTag() {
            const response = await api.get(`/tools?tags_like=${match.params.item}`)
            setTools(response.data)
        }

        { match.params.tags === 'true' ? loadToolsTag() : loadTools() }
    }, [])

    // Confere o texto da barra de pesquisa e o salva na variavel SearchText
    function handleSearchText(event) {
        setSearchText(event.target.value)
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

    // Cuida de uma nova pesquisa
    function handleSearchSubmit(event) {
        event.preventDefault();

        history.push(`/search/${searchText}/${checkbox}`)
        window.location.reload();
    }

    // Volta para a pagina inicial (sem pesquisa).
    function handleBack() {
        history.push('/');
    }

    // O mesmo que o handleSearchText porém com a checkbox
    function handleCheckbox(event) {
        setCheckbox(event.target.checked);
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
                            <p> Search in tags only </p>
                        </div>
                        {/* Botões para Adicionar Item a lista ou voltar para pagina de Home. */}
                        <button onClick={toggleModal} type="button" className="addButton"> Add + </button>
                        <button onClick={handleBack} type="button" className="backButton"> Voltar </button>
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