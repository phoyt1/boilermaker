import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { storeUploadedPhoto } from '../reducer/userPosts'
var ReactS3Uploader = require('react-s3-uploader');
import { Card, CardTitle, CardActions, CardText, Textfield, Button } from 'react-mdl';
const HOST = window.location.protocol.concat("//").concat(window.location.host);

class UserHomeContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        uploadTitle: '',

    }

  this.onUploadFinish = this.onUploadFinish.bind(this);
  this.onUploadError = this.onUploadError.bind(this);
  this.onTitleChange = this.onTitleChange.bind(this);
  }
  render(props){
  var photos = this.props.photos;
  photos = photos.sort(function (a, b) {
  return b.id - a.id;
  })
  const userId = this.props.userId;
  const userName = this.props.userName;
  return (
        <div className="mdl-grid portfolio-max-width">
            <Card shadow={0} className="portfolio-card" style={{width: '300px', height: '320px', margin: 'auto', 'margin-bottom':'3%'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Hi!</CardTitle>
                <CardText>
                    <Textfield
                        onChange={this.onTitleChange}
                        label="Provide an image title here!"
                        value = {this.state.uploadTitle || 'my image'}
                        floatingLabel
                        style={{width: '200px'}}
                    />
                </CardText>
                <CardActions border>
                    <ReactS3Uploader
                      signingUrl="/s3/sign"
                      signingUrlMethod="GET"
                      accept="image/*"
                      onError={this.onUploadError}
                      onFinish={this.onUploadFinish}
                      // signingUrlHeaders={{ headers: {
                      // 'Access-Control-Allow-Origin': '*' }}}
                      signingUrlWithCredentials={ true }      // in case when need to pass authentication credentials via CORS
                      uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }}  // this is the default
                      contentDisposition="auto"
                      scrubFilename={(filename) => filename.replace(/[^\w\d_\-\.]+/ig, '')}
                      server = {HOST} />
                </CardActions>
            </Card>
            {
                photos.map(photo => {
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
  );
}

onTitleChange(event){
    this.setState({
        uploadTitle: event.target.value
    })
}


onUploadError(err){
  console.error('UPLOAD ERROR:',err)
}


onUploadFinish(photo){
  const newPhoto = {
    title: this.state.uploadTitle || 'my image',
    link: HOST.concat(photo.publicUrl),
    userId: this.props.userId
    };
    console.log('STATE',this.state)
    console.log('NEW PHOTO', newPhoto)
    this.props.upload(newPhoto);

    this.setState({
        uploadTitle: ''
    })
}
}

// Container //

const mapState = ({ userPosts, user }) => ({
    photos: userPosts.photoInfo,
    userId: user.id,
    userName: user.email
});

const mapDispatch = dispatch => ({
  upload (photo) {
    dispatch(storeUploadedPhoto(photo));
  }
});

export default connect(mapState, mapDispatch)(UserHomeContainer);
      // preprocess={this.onUploadStart}
      // onProgress={this.onUploadProgress}
      // onError={this.onUploadError}
    //
    // signingUrlQueryParams={{ additional: query-params }}
