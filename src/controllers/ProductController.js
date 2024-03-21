const ProductServices=require('../services/ProductServices')

exports.ProductBrandList=async(req,res)=>{
    let result=await ProductServices.BrandListService()
    return res.status(200).json(result)
}

exports.ProductCategoryList=async(req,res)=>{
    let result=await ProductServices.CategoryListService()
    return res.status(200).json(result)
}

exports.ProductSliderList=async(req,res)=>{
    let result=await ProductServices.SliderListService()
    return res.status(200).json(result)
}

exports.ProductListByBrand=async(req,res)=>{
    let result=await ProductServices.ListByBrandService(req)
    return res.status(200).json(result)
}

exports.ProductListByCategory=async(req,res)=>{
    let result=await ProductServices.ListByCategoryService(req)
    return res.status(200).json(result)
}

exports.ProductListByRemark=async(req,res)=>{
    let result=await ProductServices.ListByRemarkService(req)
    return res.status(200).json(result)
}

exports.ProductListBySimilar=async(req,res)=>{
    let result=await ProductServices.ListBySimilarService(req)
    return res.status(200).json(result) 
}

exports.ProductListByKeywordService=async(req,res)=>{
    let result=await ProductServices.ListByKeyWordService(req)
    return res.status(200).json(result)
}

exports.ProductDetails=async(req,res)=>{
    let result=await ProductServices.ProductDetailsService(req)
    return res.status(200).json(result) 
}

exports.ProductReviewList=async(req,res)=>{
    let result=await ProductServices.ReviewListService(req)
    return res.status(200).json(result)   
}

exports.ProductListByFilter=async(req,res)=>{
    let result=await ProductServices.ListByFilterService(req)
    return res.status(200).json(result)
}