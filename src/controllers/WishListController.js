const WishListService=require('../services/WishListService')

exports.SaveWishList=async(req,res)=>{
    let result=await WishListService.SaveWishListService(req)
    return res.status(200).json(result)

}

exports.ViewWishList=async(req,res)=>{
    let result=await WishListService.ViewWishListService(req)
    return res.status(200).json(result)
}

exports.RemoveWish=async(req,res)=>{
    let result=await WishListService.RemoveWish(req)
    return res.status(200).json(result)
}