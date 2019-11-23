import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Dropdown, Button, Message } from 'semantic-ui-react';

import { Container } from '../assets/styles/Conversations';
import { Buttonm } from '../assets/styles/GlobalStyles';
import Modal from '../components/Modal';
import { createChat } from '../actions/conversations';

const Conversations = (props) => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [createChatForm, setCreateChatForm] = useState({
    title: '',
    members: [],
    type: [],
    messages: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
  const { createChat, isSaving, hasSavingError, userId, conversations } = props;

  const handleUpdateFormState = (e) => {
    setCreateChatForm({
      ...createChatForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateDropdownFormState = (_, { name, value }) => {
    setCreateChatForm({
      ...createChatForm,
      [name]: value,
    });
  };

  const handleToggleModal = () => setModalIsActive(!modalIsActive);

  const handleSaveChat = () => {
    createChat({
      ...createChatForm,
      members: [...createChatForm.members, userId],
    }, handleToggleModal);
  };

  const members = [
    {
      value: '5dc33f3be540f30b8e8685e2', text: 'Tonalli',
    },
  ];

  const types = [
    { value: 'Web Development', text: 'Web Development' },
    { value: 'Graphic Designer', text: 'Graphic Designer' },
    { value: 'Project Manager', text: 'Project Manager' },
    { value: 'Environmental Tech', text: 'Environmental Tech' },
    { value: 'General Manager', text: 'General Manager' },
    { value: 'Cost Accountant', text: 'Cost Accountant' },
    { value: 'Technical Writer', text: 'Technical Writer' },
    { value: 'Editor', text: 'Editor' },
    { value: 'VP Marketing', text: 'VP Marketing' },
  ];

  return (
    <Container>
      <Modal isActive={modalIsActive} title='Iniciar chat' handleClose={handleToggleModal}>
        { hasSavingError && (
          <Message negative>
            Ocurrió un error
          </Message>
        )}
        <Form size='tiny' loading={isSaving}>
          <Form.Field
            label='Título'
            control='input'
            placeholder='Proyecto asombroso'
            name='title'
            onChange={handleUpdateFormState}
          />
          <Form.Field>
            <label>Contactos</label>
            <Dropdown
              placeholder='Selecciona a tus contactos'
              fluid
              multiple
              search
              selection
              options={members}
              name='members'
              onChange={handleUpdateDropdownFormState}
            />
          </Form.Field>
          <Form.Field>
            <label>Tipo</label>
            <Dropdown
              placeholder='Selecciona un tipo'
              fluid
              search
              selection
              multiple
              options={types}
              name='type'
              onChange={handleUpdateDropdownFormState}
            />
          </Form.Field>
          <br />
          <Button.Group>
            <Button basic negative floated='right' onClick={handleToggleModal}>Cancelar</Button>
            <Button.Or text='o' />
            <Button positive floated='right' onClick={() => handleSaveChat()}>Crear chat</Button>
          </Button.Group>
        </Form>
      </Modal>
      {conversations.length === 0 && (
        <h1>
          ¡Bienvenido!
          <br />
          <small>Aún no has iniciado ninguna conversación</small>
        </h1>
      )}
      {conversations.length > 0 && (
        <h1>
          !Bienvenido!
          <br />
          <small>¿Qué conversación impulsará tu carrera?</small>
        </h1>
      )}
      <Buttonm onClick={handleToggleModal}>Iniciar una nueva conversación</Buttonm>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isSaving: state.conversations.isSaving,
  hasSavingError: state.conversations.hasSavingError,
  userId: state.user.data.id,
  conversations: state.conversations.data,
});

const mapDispatchToProps = {
  createChat,
};

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);
