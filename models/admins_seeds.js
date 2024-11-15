const mongoose = require('mongoose');
const uri = `mongodb://localhost:27017/fix`

mongoose
  .connect(uri, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Admin is saying DataBase Connected Successfully");
  })
  .catch(err => console.log(err));


const admins= require('./admins');

const admin0= new admins({
    name: 'admin',
    email: 'admin@gmail.com',
    password: 'admin',
    phone: '1234567890',
    bio: 'admin here'
});
admin0.save()
    .then(admin0 =>{
        console.log(admin0);
    })
    .catch(err=> {
        console.log(err);
    });
    console.log('qwerty');
    