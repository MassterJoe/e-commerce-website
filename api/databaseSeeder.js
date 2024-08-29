const router = require('express').Router();
const User = require('./models/User');
const users = require('./data/Users');
const Product = require('./models/Product');
const products = require('./data/Products');
const AsyncHandler = require('express-async-handler');



router.post('/users', AsyncHandler(async(req, res)=>{
    await User.deleteMany({}); // delete existing data to avoid multiple records
    const UserSeeder = await User.insertMany(users);
res.send({UserSeeder})
}
) 
);

router.post('/products', AsyncHandler(async(req, res)=>{
    await Product.deleteMany({}); // delete existing data to avoid multiple records
    const ProductSeeder = await Product.insertMany(products);
res.send({ProductSeeder})
}
)
);

module.exports = router;