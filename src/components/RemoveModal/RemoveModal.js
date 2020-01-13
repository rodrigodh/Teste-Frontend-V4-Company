import React from 'react';
import PropTypes from 'prop-types';
import { PoseGroup } from 'react-pose';

import api from '../../services/api';

import { Backdrop, Content, Form, Title, Button, Bottom, DarkButton } from './styles';

export default function RemoveModal({ name, show, toggle, id }) {

  async function handleRemove(id) {
    api.delete(`/tools/${id}`)
    window.location.reload();
  }

  return (
    <PoseGroup preEnterPose="init">
      {show && (
        <Backdrop key={name}>
          <Content>
            <Form>
              <Title> Você realmente deseja remover? </Title>
              <Bottom>
                <DarkButton onClick={toggle}> Cancelar </DarkButton> <Button onClick={() => handleRemove(id)} type="submit"> Remover </Button>
              </Bottom>
            </Form>
          </Content>
        </Backdrop>
      )}
    </PoseGroup>
  );
}

RemoveModal.propTypes = {
  name: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.any.isRequired,
  id: PropTypes.any.isRequired
};
