const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body:{
    type:String,
    required:true,
    minlength:5
  },
  date: String,
  user: {
    type: String,
  },
  image:{
    type:String,
    required: true
  },
  comments:[]
})

articleSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
const Article = mongoose.model('Article', articleSchema);
module.exports = Article;