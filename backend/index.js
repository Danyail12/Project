const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
// const Upload = multer({ dest: 'uploads/' }); // Ensure your configuration matches your form fields.

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

  
const app = express();
app.use('/uploads', express.static(path.join(__dirname,'uploads')));
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/booking-app')
    .then(() => {
        console.log("DB Connected");

        // Define the User model
        const User = mongoose.model('User', {
            name: String,
            email: String,
            password: String
        });
const Products = mongoose.model('Products',{
    pName: String,
    pPrice: String,
    pDesc: String,
    pImage: String,
    pCategory: String
})
        app.post("/Register", (req, res) => {
            const name = req.body.name;
            const email = req.body.email;
            const password = req.body.password;

            // Create a new user and save it to the database
            const user = new User({
                name: name,
                email: email,
                password: password
            });

            user.save()
                .then(() => {
                    console.log("User Created");
                    res.status(200).json({
                        success: true,
                        message: "User Created"
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).json({
                        success: false,
                        message: "User creation failed"
                    });
                });
        });

        app.post("/Login", (req, res) => {
            const email = req.body.email;
            const password = req.body.password;
            const user = User.findOne({ email: email, password: password }).then((result) => {
                if (!result) {
                res.send({message: "Login Failed"});
                
            }
            else {
                if(result.password === password){
                    const token =jwt.sign({
                        data: 'result'
                    }, 'MYKEY', { expiresIn: '1h' });
                    res.send({message: "Login Successful", token: token});
                    
                }
            }
        
                if(result.password !== password){
                    res.send({message: "Login Failed"});
                }
            }).catch((err) => {
                console.log(err);
                res.status(500).json({
                    success: false,
                    message: "server error"
                });
            })
        })
        app.get("/getProducts", (req, res) => {
            Products.find().then((result) => {
                res.send(result);
            }).catch((err) => {
                console.log(err);
                res.status(500).json({
                    success: false,
                    message: "server error"
                });
            })
        })

        app.post("/addProduct", upload.single('pImage'), (req, res) => {
            const pName = req.body.pName;
            const pPrice = req.body.pPrice;
            const pDesc = req.body.pDesc;
            const pImage = req.file.path;
            const pCategory = req.body.pCategory;
            // const user = jwt.decode(req.headers.authorization);
            // const user_id = user.data._id;
            const product = new Products ({ pName, pPrice, pDesc, pImage, pCategory });
           product.save().then(() => {
            console.log("Product Created");
            res.status(200).json({
                success: true,
                message: "Product Created"
            });
           }).catch((err) => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "Product creation failed"
            });
           });
           
           
            // res.send(product);
            // console.log(req.body);
            // console.log(req.file);
            // return;
        })
    
        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });
