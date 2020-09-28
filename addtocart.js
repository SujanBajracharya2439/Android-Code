const config = require("./knexfile");
const multer = require("multer");
const path = require("path");
const knex = require("knex");
const dbClient = knex(config);


async function furnitureUpdate(req, res) {
    try {
        const title = req.body.title;
        const price = req.body.price;
        const image = req.body.image;
        const Description = req.body.Description;
  
        const data = await dbClient.table("furnitureAdd").where({ id: req.params.id }).update({ title, price, image, Description})
        res.json({
            status: true,
            success: true,
            message: "Furniture Updated."
        })
    } catch (error) {
        res.json({
            status: false,
            success: false,
            message: error.message
        });
    }
}
async function furnitureDelete(req,res){
    try{
      const data = await dbClient.table('furnitureAdd').where({id: req.params.id}).delete();
   
    res.json({
      status: 'success',
      success: true,
      message: 'Delete success'
  })
  } catch (error) {
  console.log(error)
  res.json({
      success: false,
      status: 'fail',
      message: 'failed to Delete'
  });
  }
}
async function Addtocart(req, res) {
    try {
        const title = req.body.title;
        const price = req.body.price;
        const image = req.body.image;
        const email = "buzzer2439@gmail.com";
        const remarks = req.body.remarks;
  
        const data = await dbClient.table("Addtocart").insert({ title, price, image, email,remarks})
        res.json({
            status: true,
            success: true,
            message: "Add to cart."
        })
    } catch (error) {
        res.json({
            status: true,
            success: true,
            message: "Add to cart."
        });
    }
  };
  async function getAddtocarts(request, response){
    const email = request.params.email;
    const data = await dbClient("Addtocart").select().where({email:email,'remarks':'pending'});
    response.json(data);
  }
  async function BuyFurnuture(request, response){
    const email = request.params.email;
    const id = request.params.id;
    const data = await dbClient("Addtocart").update({'remarks':'Buy'}).where({email,id});
    response.json(data);
  }


  module.exports=
{
   furnitureUpdate,furnitureDelete,Addtocart,getAddtocarts,BuyFurnuture

}

