import { expect } from 'chai'
import { getUser, removeUser } from '../client/reducer/user'
import { fetchAllUsers } from '../client/reducer/users'
import { fetchUserPhotoInfo, fetchOtherUserPhotoInfo, addPhoto, storeUploadedPhoto } from '../client/reducer/userPosts'
import store from '../client/store';
// import sinon from 'sinon'

const users = [
  {
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
  }
]

const photoInfo = [
  {
    createdAt: '2017-06-19T13:41:38.813Z',
    description: null,
    id: 8,
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
  }
]

const user = {
  createdAt: "2017-06-19T13:44:08.182Z",
  email: "Fullstack",
  googleId: null,
  id: 2,
  password: "e429f49c8382328fb7c7387b3386049e9099e177",
  salt: "8xLYg/0xyuRiav+jTVu5/A==",
  updatedAt: "2017-06-19T13:44:08.182Z"
}

const photo = {
  createdAt: '2017-06-19T13:35:45.796Z',
  description: null,
  id: 7,
  link: 'http://fsphotographer.herokuapp.com/s3/uploads/75fb9fea-8c7f-4e51-8c6f-1ea584501ab8_20170617_093840.jpg',
  title: 'Test rotate',
  updatedAt: '2017-06-19T13:35:45.796Z',
  userId: 1
}

// ACTION CREATORS //
describe('users action creators',() => {
  it('fetchAllUsers returns properly formatted action', () => {
    expect(fetchAllUsers(users)).to.be.deep.equal({
        type: 'FETCH_ALL_USERS',
        users: users
      })
  })
})

describe('userPosts action creators', () => {
  it('fetchUserPhotoInfo returns properly formatted action', () => {
    expect(fetchUserPhotoInfo(photoInfo)).to.be.deep.equal({
        type: 'FETCH_USER_PHOTO_INFO',
        photoInfo: photoInfo
      })
  })

  it('fetchOtherUserPhotoInfo returns properly formatted action', () => {
    expect(fetchOtherUserPhotoInfo(photoInfo)).to.be.deep.equal({
        type: 'FETCH_OTHER_USER_PHOTO_INFO',
        photoInfo: photoInfo
      })
  })

  it('addPhoto returns properly formatted action', () => {
    expect(addPhoto(photo)).to.be.deep.equal({
        type: 'ADD_USER_PHOTO',
        photo: photo
      })
  })
})

// DISPATCHERS //
describe('Dispatched actions',() => {
  let testStore;
  describe('STORE', () => {
    testStore = store;

  it('has expected initial state', () => {
        expect(testStore.getState()).to.be.deep.equal({
            user: {},
            userPosts:{
              otherUserPhotoInfo: [],
              photoInfo: []
            },
            users: {
              allUsers: []
            }

        });
  });
});

describe('GET_USER',() => {
  it('adds logged in user to state',() => {
    testStore.dispatch({ type: 'GET_USER', user: user });
    const newState = testStore.getState();
    expect(newState.user).to.be.deep.equal(user);
    expect(newState.userPosts).to.be.deep
      .equal({
        otherUserPhotoInfo: [],
        photoInfo: []
      });
    expect(newState.users).to.be.deep.equal({allUsers: []});

  })
})

describe('REMOVE_USER',() => {
  it('removes user from state',() => {
    testStore.dispatch({ type: 'REMOVE_USER' });
    const newState = testStore.getState();
    expect(newState.user).to.be.deep.equal({});
    expect(newState.userPosts).to.be.deep
      .equal({
        otherUserPhotoInfo: [],
        photoInfo: []
      });
    expect(newState.users).to.be.deep.equal({allUsers: []});

  })
})

describe('FETCH_ALL_USERS',() => {
  it('adds all users to state',() => {
    testStore.dispatch({ type: 'FETCH_ALL_USERS', users: users });
    const newState = testStore.getState();
    expect(newState.user).to.be.deep.equal({});
    expect(newState.userPosts).to.be.deep
      .equal({
        otherUserPhotoInfo: [],
        photoInfo: []
      });
    expect(newState.users).to.be.deep.equal({allUsers: users});

  })
})

describe('FETCH_USER_PHOTO_INFO',() => {
  it('adds user photos to state',() => {
    testStore.dispatch({ type: 'FETCH_USER_PHOTO_INFO', photoInfo: photoInfo });
    const newState = testStore.getState();
    expect(newState.user).to.be.deep.equal({});
    expect(newState.userPosts).to.be.deep
      .equal({
        otherUserPhotoInfo: [],
        photoInfo: photoInfo
      });
    expect(newState.users).to.be.deep.equal({allUsers: users});

  })
})

describe('FETCH_OTHER_USER_PHOTO_INFO',() => {
  it('adds other user photos to state',() => {
    testStore.dispatch({ type: 'FETCH_OTHER_USER_PHOTO_INFO', photoInfo: photoInfo });
    const newState = testStore.getState();
    expect(newState.user).to.be.deep.equal({});
    expect(newState.userPosts).to.be.deep
      .equal({
        otherUserPhotoInfo: photoInfo,
        photoInfo: photoInfo
      });
    expect(newState.users).to.be.deep.equal({allUsers: users});

  })
})

describe('ADD_USER_PHOTO',() => {
  it('adds one photo to photoInfo',() => {
    testStore.dispatch({ type: 'ADD_USER_PHOTO', photo: photo });
    const newState = testStore.getState();
    expect(newState.user).to.be.deep.equal({});
    expect(newState.userPosts).to.be.deep
      .equal({
        otherUserPhotoInfo: photoInfo,
        photoInfo: photoInfo.concat(photo)
      });
    expect(newState.users).to.be.deep.equal({allUsers: users});

  })
})

})


