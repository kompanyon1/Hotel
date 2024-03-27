const textRouter = require('express').Router();
const { Text } = require('../../db/models')

textRouter.get('/text', async (req,res)=>{
try {
    const data = await Text.findAll();
    const resData = data.map(el=>el.get({plain: true}))
    res.json(resData)
} catch (error) {
    console.error(err)
}
})

textRouter.post('/setText', async (req,res)=>{
    try {
        const obj = req.body
        for (let key in obj){
            if (obj[key] !== ''){
                await Text.update({mainText: obj[key]}, {where: { id: Number(key) }})
            }  
        }
        res.end();
        
    } catch (error) {
        console.log(err)
    }
})

textRouter.post('/setText/corp2', async (req,res)=>{
    try {
        const obj = req.body
        for (let key in obj){
            if (obj[key] !== ''){
                await Text.update({mainText: obj[key]}, {where: { id: Number(key) }})
            }  
        }
        res.end();
    } catch (error) {
        console.log(error)
    }
})

textRouter.post('/setText/corp1', async (req,res)=>{
    try {
        const obj = req.body
        for (let key in obj){
            if (obj[key] !== ''){
                await Text.update({mainText: obj[key]}, {where: { id: Number(key) }})
            }  
        }
        res.end();
    } catch (error) {
        console.log(error)
    }
})

module.exports = textRouter;