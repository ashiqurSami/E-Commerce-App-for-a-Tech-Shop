const BrandModel=require('../models/BrandModel')
const CategoryModel=require('../models/CategoryModel')
const ProductSliderModel=require('../models/ProductSliderModel')
const ProductModel=require('../models/ProductModel')
const ReviewModel=require('../models/ReviewModel')

const mongoose =require('mongoose');
const ObjectId=mongoose.Types.ObjectId;



exports.BrandListService=async()=>{
    try{
        let data=await BrandModel.find()
        return {status:"success",data:data}
    }catch(e){
        console.log(e)
        return {status:"fail",data:e.toString()}
    }
}

exports.CategoryListService=async()=>{
    try{
        let data=await CategoryModel.find()
        return {status:"success",data:data}
    }catch(e){
        return {status:'fail',data:e.toString()}
    }
}

exports.SliderListService=async()=>{
    try{
        let data=await ProductSliderModel.find()
        return {status:"success",data:data}
    }catch(e){
        return {status:"success",data:data}
    }
}

exports.ListByBrandService=async(req)=>{
    try {
        let BrandID=new ObjectId(req.params.BrandID);
        let MatchStage={$match:{brandID:BrandID}}
        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data= await  ProductModel.aggregate([
            MatchStage, JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage, ProjectionStage
        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}

exports.ListByCategoryService=async(req)=>{
    try {
        let CategoryID=new ObjectId(req.params.CategoryID);
        let MatchStage={$match:{categoryID:CategoryID}}
        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data= await  ProductModel.aggregate([
            MatchStage, JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage, ProjectionStage
        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}

exports.ListByRemarkService=async(req)=>{
    try {
        let Remark=req.params.Remark;
        let MatchStage={$match:{remark:Remark}}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data= await  ProductModel.aggregate([
            MatchStage, JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage, ProjectionStage
        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}

exports.ListBySimilarService=async(req)=>{
    try{
        let categoryID=new ObjectId(req.params.CategoryID)
        let MatchStage={$match:{categoryID:categoryID}}
        let limitStage={$limit:20}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}
        
        let data =await ProductModel.aggregate([
            MatchStage,limitStage,JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage,ProjectionStage
        ])

        return {status:"success",data:data}
    }catch(e){
        return {status:"fail",data:e}.toString()
    }
}

exports.ListByKeyWordService=async(req)=>{
    try{
        let SearchRegex={"$regex":req.params.keyword,"$options":"i"}
        let SearchParams=[{title:SearchRegex},{shortDes:SearchRegex}]
        let SearchQuery={$or:SearchParams}
        let MatchStage={$match:SearchQuery}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}
        
        let data=await ProductModel.aggregate([
            MatchStage,JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage,ProjectionStage
        ])

        return {status:"success",data:data}

    }catch(e){
        return {status:"fail",data:e}.toString()
    }
}

exports.ProductDetailsService=async(req)=>{
    try{
        let ProductID=new ObjectId(req.params.ProductID)
        let MatchStage={$match:{_id:ProductID}}
        
        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let JoinWithDetailsStage={$lookup:{from:"productdetails",localField:"_id",foreignField:"productID",as:"details"}}

        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let UnwindDetailsStage={$unwind:"$details"}

        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data=await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            JoinWithDetailsStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            UnwindDetailsStage,
            ProjectionStage
        ])
        return {status:"success",data:data}

    }catch(e){
        return {status:"fail",data:e}.toString()
    }
}

exports.ReviewListService=async(req)=>{
    try{
        let ProductID=new ObjectId(req.params.ProductID)
        let MatchStage={$match:{productID:ProductID}}

        let JoinWithProfileStage={$lookup:{from:"profiles",localField:"userID",foreignField:"userID",as:"profile"}}
        let UnwindProfileStage={$unwind:"$profile"}
        let ProjectionStage= {$project: {'des': 1, 'rating': 1, 'profile.cus_name': 1}}
        
        let data=await ReviewModel.aggregate([
            MatchStage,
            JoinWithProfileStage,
            UnwindProfileStage,
            ProjectionStage
        ])
        return {status:"success",data:data} 
    }catch(e){
        return {status:"fail",data:e}.toString()
    }
}

exports.ListByFilterService = async (req) => {
    try {
        let matchConditions = {};

        if (req.body['categoryID']) {
            matchConditions.categoryID = new ObjectId(req.body['categoryID']);
        }

        if (req.body['brandID']) {
            matchConditions.brandID = new ObjectId(req.body['brandID']);
        }

        let MatchStage = { $match: matchConditions };

        let JoinWithBrandStage = {
            $lookup: { from: "brands", localField: "brandID", foreignField: "_id", as: "brand" }
        };

        let JoinWithCategoryStage = {
            $lookup: { from: "categories", localField: "categoryID", foreignField: "_id", as: "category" }
        };

        let UnwindBrandStage = { $unwind: "$brand" };
        let UnwindCategoryStage = { $unwind: "$category" };

        let AddFieldsStage = {
            $addFields: { numericPrice: { $toInt: "$price" } }
        };

        let priceMin = parseInt(req.body['priceMin']);
        let priceMax = parseInt(req.body['priceMax']);
        let PriceMatchConditions = {};

        if (!isNaN(priceMin) || !isNaN(priceMax)) {
            PriceMatchConditions['numericPrice'] = {
                ...(PriceMatchConditions['numericPrice'] || {}),
                ...(priceMin ? { $gte: priceMin } : {}),
                ...(priceMax ? { $lte: priceMax } : {})
            };
        }

        let PriceMatchStage = { $match: PriceMatchConditions };

        let ProjectionStage = { $project: { 'brand._id': 0, 'category._id': 0, 'categoryID': 0, 'brandID': 0 } };

        console.log(
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            AddFieldsStage,
            PriceMatchStage,
            ProjectionStage
        );

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            AddFieldsStage,
            PriceMatchStage,
            ProjectionStage
        ]);

        return { status: "success", data: data };
    } catch (e) {
        return { status: "fail", data: e.toString() };
    }
};
