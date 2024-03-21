const CartListService=require('../services/CartListService')


exports.SaveCartList=async(req,res)=>{
    let result=await CartListService.SaveCartListService(req)
    return res.status(200).json(result)
}

exports.UpdateCartList=async(req,res)=>{
    let result=await CartListService.UpdateCartListService(req)
    return res.status(200).json(result)
}

exports.ViewCartList=async(req,res)=>{
    let result=await CartListService.ViewCartListService(req)
    return res.status(200).json(result)
}

exports.RemoveCartList=async(req,res)=>{
    let result=await CartListService.RemoveCartList(req)
    return res.status(200).json(result)
}