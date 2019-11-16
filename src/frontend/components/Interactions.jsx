import React from 'react';
import {
  MdCall,
  MdVideocam,
  MdFavoriteBorder,
  MdPersonOutline,
} from 'react-icons/md';

import {
  Container,
  Contact,
  Wraper,
  Actions,
  MoreActions,
  Attachments,
} from '../assets/styles/Interactions';
import { Imgl } from '../assets/styles/GlobalStyles';

import Searcher from './Searcher';

import user from '../assets/static/user.jpg';

const Interactions = (props) => (
  <Container>
    <Searcher />
    <Contact>
      <Imgl src={user} alt="user" />
      <h2>Usuario destinatario</h2>
      <p>subtitulo</p>
    </Contact>
    <Wraper>
      <Actions>
        <div>
          <button type="button">
            <MdCall size={36} color="#4D7EFB" />
          </button>
          <p>Call</p>
        </div>
        <div>
          <button type="button">
            <MdVideocam size={36} color="#4D7EFB" />
          </button>
          <p>Video Call</p>
        </div>
      </Actions>
      <MoreActions>
        <p>
          <MdPersonOutline size={28} color="#BBBBBB" />
          View Friends
        </p>
        <p>
          <MdFavoriteBorder size={28} color="#BBBBBB" />
          Add to Favorite
        </p>
      </MoreActions>
      <Attachments>
        <h4>Attachments</h4>
        <div>
          <p>png</p>
          <p>gif</p>
          <p>mp3</p>
          <p>mp4</p>
          <p>png</p>
          <p>gif</p>
          <p>mp3</p>
          <p>mp4</p>
          <p>mp3</p>
          <p>mp4</p>
        </div>
        <button type="button">View all</button>
      </Attachments>
    </Wraper>
  </Container>
);

export default Interactions;
