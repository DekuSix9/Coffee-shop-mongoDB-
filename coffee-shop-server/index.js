const express=require('express')
const cors=require('cors')
require('dotenv').config();

const port=process.env.PORT||3000;
const app=express()

app.use(express.json())
app.use(cors())


    
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.srmoy20.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    await client.connect();
    const collectionData=client.db('coffee-shop').collection('coffees')

    app.post('/coffee' , async(req , res)=>{
         const newCoffee=req.body;
         console.log(newCoffee);
         const result=await collectionData.insertOne(newCoffee)
         res.send(result)
      
    
    })

    app.get('/coffee',async(req,res)=>{
      const cursor=collectionData.find()
      const result=await cursor.toArray()
      res.send(result)
    })

    app.delete('/coffee/:id',async(req,res)=>{
      const id=req.params.id;
      const query={_id:new ObjectId(id)}
      const result= await collectionData.deleteOne(query);
      res.send(result)
      console.log(id,query,result)
    })
    app.put('/coffee/:id',async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)}
      const options={upsert:true}
      const updateCoffee=req.body
      const coffee={
        $set:{
          name:updateCoffee.name,
          chef:updateCoffee.chef,
          supplier:updateCoffee.supplier,
          taste:updateCoffee.taste,
          category:updateCoffee.category,
          details:updateCoffee.details,
          photo:updateCoffee.photo
        }
      }
      const result= await collectionData.updateOne(filter,coffee,options)
      res.send(result)
    })

    app.get('/coffee/:id',async(req,res)=>{
      const id=req.params.id;
      const query={_id:new ObjectId(id)}
      const result=await collectionData.findOne(query);
      res.send(result)
      console.log(id,query,result)
    })
   




    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(error) {
    console.error(error)
  }
}
run().catch(console.dir);

  














app.get('',(req,res)=>{
    res.send("Home server page")
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on ${port}`)
})