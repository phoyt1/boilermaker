import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import store from './redux.spec.js'// '../client/store'
import UserHomeContainer from '../client/components/UserHomeContainer'

describe('SliderGroup component', () => {

  const fakeStore = {
    user: {
      createdAt: "2017-06-19T13:44:08.182Z",
      email: "Fullstack",
      googleId: null,
      id: 2,
      password: "e429f49c8382328fb7c7387b3386049e9099e177",
      salt: "8xLYg/0xyuRiav+jTVu5/A==",
      updatedAt: "2017-06-19T13:44:08.182Z"
    },
    userPosts: {
      otherUserPhotoInfo: [{
        createdAt: '2017-06-19T13:41:38.813Z',
        description: null,
        id: 8,
        link: 'http://fsphotographer.herokuapp.com/s3/uploads/6a52c513-b71d-4640-b4d7-ea8c20273960_20170617_093840.jpg',
        title: 'Test2',
        updatedAt: '2017-06-19T13:41:38.813Z',
        userId: 1
      }],
      photoInfo: [{
        createdAt: '2017-06-19T13:41:38.813Z',
        description: null,
        id: 9,
        link: 'http://fsphotographer.herokuapp.com/s3/uploads/6a52c513-b71d-4640-b4d7-ea8c20273960_20170617_093840.jpg',
        title: 'Test2',
        updatedAt: '2017-06-19T13:41:38.813Z',
        userId: 1
        },
        {
        createdAt: '2017-06-19T13:35:45.796Z',
        description: null,
        id: 7,
        link: 'http://fsphotographer.herokuapp.com/s3/uploads/75fb9fea-8c7f-4e51-8c6f-1ea584501ab8_20170617_093840.jpg',
        title: 'Test rotate',
        updatedAt: '2017-06-19T13:35:45.796Z',
        userId: 1
      }]
    },
    users: {
      allUsers: [{
      createdAt: "2017-06-19T13:44:08.182Z",
      email: "Fullstack",
      googleId: null,
      id: 2,
      password: "e429f49c8382328fb7c7387b3386049e9099e177",
      salt: "8xLYg/0xyuRiav+jTVu5/A==",
      updatedAt: "2017-06-19T13:44:08.182Z"
      },
      {
      createdAt: "2017-07-24T13:44:08.182Z",
      email: "TEST",
      googleId: null,
      id: 3,
      password: "e429f49c8382328fb7c7387b3386049e9099e177",
      salt: "8xLYg/0xyuRiav+jTVu5/A==",
      updatedAt: "2017-07-24T13:44:08.182Z"
      }]
    }
  }

  const userName = 'test'
  let home;
  beforeEach('Create component', () => {
    console.log('STORE',store.getState())
    home = shallow(<UserHomeContainer store={store} />);
  });

  it('uses three <Card />s', () => {
        expect(home.find('.portfolio-card').length).to.be.equal(3);
    });

    it('has an initial local state', () => {
      expect(home.state()).to.be.deep.equal({
        uploadTitle: '',
        progressFlag: false
      });
    });

});
