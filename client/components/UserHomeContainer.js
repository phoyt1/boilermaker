import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { sendUploadedPhoto } from '../reducer/userPosts'
var ReactS3Uploader = require('react-s3-uploader');
import { Card, CardTitle, CardActions, CardText, Button } from 'react-mdl';

class UserHomeContainer extends React.Component {
  constructor(props){
    super(props)
  this.onUploadFinish = this.onUploadFinish.bind(this)
  }
  render(props){
  const photos = this.props.photos;
  return (
        <div className="mdl-grid portfolio-max-width">
            <Card shadow={0} className="portfolio-card" style={{width: '300px', height: '320px', margin: 'auto', 'margin-bottom':'3%'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Hi!</CardTitle>
                <CardText>
                    Choose an image to upload
                </CardText>
                <CardActions border>
                    <ReactS3Uploader
                      signingUrl="/s3/sign"
                      signingUrlMethod="GET"
                      accept="image/*"
                      onFinish={this.onUploadFinish}
                      // signingUrlHeaders={{ headers: {
                      // 'Access-Control-Allow-Origin': '*' }}}
                      signingUrlWithCredentials={ true }      // in case when need to pass authentication credentials via CORS
                      uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }}  // this is the default
                      contentDisposition="auto"
                      scrubFilename={(filename) => filename.replace(/[^\w\d_\-\.]+/ig, '')}
                      server="http://localhost:8080" />
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

onUploadFinish(photo){
  console.log('PHOTO',photo)
  //this.props.upload(photo);
}
}

// Container //

const mapState = ({ userPosts }) => ({
    photos: userPosts.photoInfo
});

const mapDispatch = dispatch => ({
//   upload () {
//     dispatch(sendUploadedPhoto());
//   }
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
