import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PoseGroup } from 'react-pose';

import api from '../../services/api';

import { Backdrop, Content, Form, Title, Label, Input, Button, Inputs, Bottom, DarkButton } from './styles';

export default function Modal({ name, show, toggle }) {
  const [iname, setIname] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);

  function handleIname(event) {
    //lugar onde fica o texto do input e sempre event.target.value
    setIname(event.target.value)
  }

  function handleLink(event) {
    setLink(event.target.value)
  }

  function handleDescription(event) {
    setDescription(event.target.value)
  }

  function handleTags(event) {
    setTags(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    var hashtags = tags.split(",")

    console.log(tags)

    const response = await api.post('/tools', { title: iname, link, description, tags: hashtags })

    if (response) {
      window.location.reload();
    }

    console.log(response)
  }

  return (
    <PoseGroup preEnterPose="init">
      {show && (
        <Backdrop key={name}>
          <Content>
            <Form>
              <Title> Adicionar nova Ferramenta </Title>
              <Inputs>
                <Label>Nome da Ferramenta</Label>
                <Input type="iname" id="name" onChange={handleIname} />
                <Label>Link da Ferramenta</Label>
                <Input id="link" onChange={handleLink} />
                <Label>Descrição da Ferramenta</Label>
                <Input id="description" onChange={handleDescription} />
                <Label>Tags (Separar por vírgulas)</Label>
                <Input id="tags" onChange={handleTags} />
              </Inputs>
              <Bottom>
                <DarkButton onClick={toggle}> Cancelar </DarkButton> <Button onClick={handleSubmit} type="submit"> Adicionar </Button>
              </Bottom>
            </Form>
          </Content>
        </Backdrop>
      )}
    </PoseGroup>
  );
}

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.any.isRequired,
};
