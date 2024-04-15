const express=require('express');
const app = express();
const mongoose=require('mongoose');
const port=3000;
const cors=require('cors');
 const bodyParser=require('body-parser');

 app.use(cors());
 app.use(bodyParser.json());

main().catch(err=>console.log(err))
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/cmart')
    console.log("db connected")
}

const userschema = new mongoose.Schema({
    name:String,
    phone:Number,
    email: String,
    adress:Array,
    password: String,
    cart:Array,
    booking:Array
  });

const productachema=new mongoose.Schema({
    details:Array,
    review:Array
})
const Product =mongoose.model('Product',productachema)

const User= mongoose.model('User', userschema);

async function updatereview(_id,x){
    await Product.updateOne({_id},{
        $set:{
            review:x
        }})}


app.post('/prod',async(req,res)=>{
const allitem=await Product.find({})
res.json(allitem)

})

app.post('/review',async(req,res)=>{
    const oneitem=await Product.find({name:req.body.name})
    res.json(oneitem)
    const singprodid =oneitem.at(0)._id;
    var updated = [...oneitem.at(0).review,{by:req.body.personname,personalreview:req.body.value}]
    updatereview(singprodid,updated)
    })

    app.post('/showreview',async(req,res)=>{
        const oneitem=await Product.find({name:req.body.name})
        res.json(oneitem)
      
        })

        app.post('/userdetail',async(req,res)=>{
            const ud=await User.find({name:req.body.name})
            res.json(ud.at(0))
          
            })


app.post("/sign",async (req,res)=>{
   let user=new User();
   user.name=req.body.name
   user.phone=req.body.phone
   user.email=req.body.email;
   user.password=req.body.password;
  
   const doc=await user.save();
   res.json(doc);

})

async function updatebuy(_id,x){
    await User.updateMany({_id},{
        $set:{
    adress:x
        }})}

app.post("/buy",async (req,res)=>{

    const bd=await User.find({name:req.body.name})
    
    const buyid=bd.at(0)._id.toString()
    console.log(buyid)
    var newbuyingdata=[...bd.at(0).adress,req.body]
    updatebuy(buyid,newbuyingdata)
    res.json(bd)
})

app.post("/buy2",async (req,res)=>{

    const bd=await User.find({name:req.body.name})
    res.json(bd)
})

app.post("/log",async (req,res)=>{
    const dat=await User.find({email:req.body.email});
    res.json(dat);
})

async function updatedata(_id,x){
    await User.updateMany({_id},{
        $set:{
    cart:x
        }})}


async function updatebuying(_id,b){
    await User.updateOne({_id},{
        $set:{
        booking:b
        }
    })
}

app.post("/book",async (req,res)=>{
    const dat=await User.find({name:req.body.name});
    var prevarrid=dat.at(0)._id
    res.json(dat);
    updatebuying(prevarrid,[...dat.at(0).booking,req.body.buy])
})

app.post("/buyfind",async (req,res)=>{
    const dat=await User.find({name:req.body.name});
    res.json(dat);
    
})



app.post("/cart",async (req,res)=>{
    var gfd=await User.find({name:req.body.name});
    res.json(gfd.at(0).cart);   
})

app.post("/delcart",async (req,res)=>{
    var gfd=await User.find({name:req.body.name});
    var prevarrid=gfd.at(0)._id
    var prevc=gfd.at(0).cart
    
    let x;
    for(let i=0;i<prevc.length;i++){
         if(prevc.at(i).name==req.body.nameofprod){
            x=i;
            break;
         }
    }
    prevc.splice(x, 1);

updatedata(prevarrid,prevc)

   
})


app.post("/view",async (req,res)=>{
const userid=await User.find({name:req.body.name})
res.json(userid)
viewid=userid.at(0)._id.toString()
 var prevarr=userid.at(0).cart
 var newarr=[...prevarr,req.body.cartitem]
 updatedata(viewid,newarr)

})






app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});