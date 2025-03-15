const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/practice',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('connection at databse is successfully')
    }).catch((err)=>{
           console.log(`connection failed at ${err}`)
    });
