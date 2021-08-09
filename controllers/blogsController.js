const Article = require("../models/Article");
const User = require("../models/User");




module.exports.article_get = async (req, res) => {
  try {
    Article.find({}).then(article => {
        console.log(article);
        res.json(article)
    })
  }
  catch(err) {
    res.status(404).json(err);
  }
}

module.exports.article_getId = async (request, response) => {
  const article = await Article.findById(request.params.id)
  if (article) {
    response.json(article.toJSON())
  } else {
    response.status(404).end()
  }
}


// module.exports.article_create = async (request, response) => {
//     const body = request.body;
//     console.log(request.files);
//     const newArticle = {
//         title: body.title,
//         body : body.body,
//         date: body.date,
//         user: body.user,
//         comments:[],
//         image: request.file.originalname
//     }
//     try{
//         const article = await Article.create(newArticle);
//         response.status(201).json(article);
//     }catch(err){
//         console.log(err);
//     }
// }

module.exports.article_delete = async (req, res) => {
    Article.findByIdAndRemove(req.params.id)
        .then(res.status(204).end())
        .catch(err => console.log(err));
    
}

module.exports.article_update = async (req, res) => {
    const body = req.body
    try{
        const article = await Article.findByIdAndUpdate(req.params.id, body, { new: true })
        res.json(article.toJSON())
    }catch(err){
        console.log(err);
    }
}
module.exports.component_update = async (req, res) => {
  const body = req.body;
  try{
      const article = await Article.findByIdAndUpdate(req.params.id, body, { new: true })
      res.json(article.toJSON())
  }catch(err){
      console.log(err);
  }
}



