const User = require('./user');
const Photo = require('./photo');
const Comment = require('./comment');

Photo.belongsTo(User);
User.hasMany(Photo);

Comment.belongsTo(Photo);
Photo.hasMany(Comment);

Comment.belongsTo(User);
User.hasMany(Comment);
