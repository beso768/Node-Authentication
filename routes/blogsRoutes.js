const { Router } = require('express');
const blogsController = require('../controllers/blogsController');
const multer = require("multer")

const router = Router();
const storage = multer.diskStorage({
    destination : (req,file,callback) => {
      callback(null,"./public/uploads/")
    },
    filename: (req,file,callback) => {
      callback(null,file.originalname)
    }
  })
  
const upload = multer({storage:storage});


router.post('/', upload.single("articleImage"), async (request, response) => {
    const body = request.body;
    console.log(request.file);
    const newArticle = {
        title: body.title,
        body : body.body,
        date: body.date,
        user: body.user,
        comments:[],
        image: request.file.originalname
    }
    try{
        const article = await Article.create(newArticle);
        response.status(201).json(article);
    }catch(err){
        console.log(err);
    }
});
router.get('/', blogsController.article_get);
router.get('/:id', blogsController.article_getId);
router.put('/:id', blogsController.article_update);
router.patch('/:id', blogsController.component_update);
router.delete('/:id', blogsController.article_delete);

module.exports = router;