'use strict'
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
//import stylesheet from '../..public/material.css'

import { Card, CardTitle, CardActions } from 'react-mdl';

class OtherUserContainer extends React.Component {
  constructor(props){
    super(props)
  }
  render (props) {
    var photoInfo = this.props.state.userPosts.otherUserPhotoInfo
    if (photoInfo.length) {
      photoInfo = photoInfo.sort(function (a, b) {
        return b.id - a.id;
      })
    }
    return (
      <div className="mdl-grid portfolio-max-width">
        {
          photoInfo.length && photoInfo.map(photo => {
            return (
              <Card key={photo.id} shadow={0} className="portfolio-card" style={{width: '300px', height: '320px', margin: 'auto', 'marginBottom':'3%', background: `url(${photo.link}) center / cover`}}>
                <CardTitle expand />
                <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.4)'}}>
                    <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                      {photo.title}
                    </span>
                </CardActions>
              </Card>
            )
          })
        }
      </div>
    )
  }
}

// Container //

const mapState = (state) => {
  console.log(state.userPosts)
  return {
    state: state
  }
};

const mapDispatch = dispatch => ({
  // upload (photo) {
  //   dispatch(storeUploadedPhoto(photo));
  // }
});

export default connect(mapState, null)(OtherUserContainer);
