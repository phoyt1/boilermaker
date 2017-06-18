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
        uploadTitle: ''
    }
  this.onUploadFinish = this.onUploadFinish.bind(this);
  this.onUploadError = this.onUploadError.bind(this);
  }
  render(props){
  // console.log('PROPS', this.props)
  const photos = this.props.photos;
  const userId = this.props.userId;
  const userName = this.props.userName;
  return (
        <div className="mdl-grid portfolio-max-width">
            <Card shadow={0} className="portfolio-card" style={{width: '300px', height: '320px', margin: 'auto', 'margin-bottom':'3%'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Hi!</CardTitle>
                <CardText>
                    <Textfield
                        onChange={(event) => {
                            console.log('VAL', event.target.value)
                            this.setState({
                             uploadTitle: event.target.value
                            })
                        }}
                        label="Provide an image title here!"
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
                            <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
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

onUploadError(err){
  console.error('UPLOAD ERROR:',err)
}


onUploadFinish(photo){


  const newPhoto = {
    title: this.state.uploadTitle,
    link: HOST.concat(photo.publicUrl),
    userId: this.props.userId
    };
    console.log('STATE',this.state)
    console.log('NEW PHOTO', newPhoto)
    this.props.upload(newPhoto);

    this.setState({
        uploadTitle: ''
    })
    // event.target.email.value = '';
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


            // <Card shadow={0} className="portfolio-card" style={{width: '300px', height: '320px', margin: 'auto', 'margin-bottom':'3%', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover'}}>
            //     <CardTitle expand />
            //     <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
            //         <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
            //             Image.jpg
            //         </span>
            //     </CardActions>
            // </Card>
            // <Card shadow={0} className="portfolio-card" style={{width: '300px', height: '320px', margin: 'auto', 'margin-bottom':'3%', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover'}}>
            //     <CardTitle expand />
            //     <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
            //         <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
            //             Image.jpg
            //         </span>
            //     </CardActions>
            // </Card>


// <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
//               <div className="mdl-card__media">
//                   <img className="article-image" src=" images/example-work01.jpg"  alt="" />
//               </div>
//               <div className="mdl-card__title">
//                   <h2 className="mdl-card__title-text">Blog template</h2>
//               </div>
//               <div className="mdl-card__supporting-text">
//                   Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
//               </div>
//               <div className="mdl-card__actions mdl-card--border">
//                   <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="portfolio-example01.html">
//                     text
//                   </a>
//               </div>
//           </div>
//           <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
//               <div className="mdl-card__media">
//                   <img className="article-image" src=" images/example-work01.jpg"  alt="" />
//               </div>
//               <div className="mdl-card__title">
//                   <h2 className="mdl-card__title-text">Blog template</h2>
//               </div>
//               <div className="mdl-card__supporting-text">
//                   Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
//               </div>
//               <div className="mdl-card__actions mdl-card--border">
//                   <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="portfolio-example01.html">Read more</a>
//               </div>
//           </div>
//           <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
//               <div className="mdl-card__media">
//                   <img className="article-image" src=" images/example-work01.jpg"  alt="" />
//               </div>
//               <div className="mdl-card__title">
//                   <h2 className="mdl-card__title-text">Blog template</h2>
//               </div>
//               <div className="mdl-card__supporting-text">
//                   Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
//               </div>
//               <div className="mdl-card__actions mdl-card--border">
//                   <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="portfolio-example01.html">Read more</a>
//               </div>
//           </div>
//           <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
//               <div className="mdl-card__media">
//                   <img className="article-image" src=" images/example-work07.jpg"  alt="" />
//               </div>
//               <div className="mdl-card__title">
//                   <h2 className="mdl-card__title-text">Sunt nulla</h2>
//               </div>
//               <div className="mdl-card__supporting-text">
//                   Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
//               </div>
//               <div className="mdl-card__actions mdl-card--border">
//                   <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="portfolio-example01.html">Read more</a>
//               </div>
//           </div>
//           <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
//               <div className="mdl-card__media">
//                   <img className="article-image" src=" images/example-work02.jpg"  alt="" />
//               </div>
//               <div className="mdl-card__title">
//                   <h2 className="mdl-card__title-text">Android.com website</h2>
//               </div>
//               <div className="mdl-card__supporting-text">
//                   Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
//               </div>
//               <div className="mdl-card__actions mdl-card--border">
//                   <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="portfolio-example01.html">Read more</a>
//               </div>
//             </div>
