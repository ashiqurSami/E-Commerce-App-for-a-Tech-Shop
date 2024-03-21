const express=require('express')
const ProductController=require('../controllers/ProductController')
const UserController=require('../controllers/UserController')
const AuthVerification=require('../middlewares/AuthVerification')
const WishListController=require('../controllers/WishListController')
const CartListController=require('../controllers/CartListController')
const InvoiceController=require('../controllers/InvoiceController')
const router=express.Router()


//Product
router.get('/ProductBrandList',ProductController.ProductBrandList)
router.get('/ProductCategoryList',ProductController.ProductCategoryList)
router.get('/ProductSliderList',ProductController.ProductSliderList)
router.get('/ProductListByBrand/:BrandID',ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID',ProductController.ProductListByCategory)
router.get('/ProductListByRemark/:Remark',ProductController.ProductListByRemark)
router.get('/ProductListBySimilar/:CategoryID',ProductController.ProductListBySimilar)
router.get('/ProductListByKeyword/:keyword',ProductController.ProductListByKeywordService)
router.get('/ProductDetails/:ProductID',ProductController.ProductDetails)
router.get('/ProductReview/:ProductID',ProductController.ProductReviewList)
router.get('/ProductListByFilter',ProductController.ProductListByFilter)


//user
router.post('/UserGetOTP/:email',UserController.UserGetOTP)
router.put('/UserLoginVerify/:email/:OTP',UserController.VerifyLogin)
router.post('/CreateProfile',AuthVerification,UserController.CreateProfile)
router.put('/UpdatePerofile',AuthVerification,UserController.CreateProfile)
router.get('/ReadProfile',AuthVerification,UserController.ReadProfile)
router.get('/UserLogout',AuthVerification,UserController.UserLogout)

//Wish List
router.post('/SaveWishList',AuthVerification,WishListController.SaveWishList)
router.get('/ViewWishList',AuthVerification,WishListController.ViewWishList)
router.delete('/RemoveWish',AuthVerification,WishListController.RemoveWish)

//Cart List
router.post('/SaveCartList',AuthVerification,CartListController.SaveCartList)
router.put('/UpdateCartList/:cartID',AuthVerification,CartListController.UpdateCartList)
router.get('/ViewCartList',AuthVerification,CartListController.ViewCartList)
router.delete('/RemoveCartList/:cartID',AuthVerification,CartListController.RemoveCartList)

//Invoice 
router.post('/CreateInvoice',AuthVerification,InvoiceController.CreateInvoice)
router.post('/PaymentSuccess/:trxID',InvoiceController.PaymentSuccess)
router.post('/PaymentCancel/:trxID',InvoiceController.PaymentCancel)
router.post('/PaymentFail/:trxID',InvoiceController.PaymentFail)
router.post('/PaymentIPN/:trxID',InvoiceController.PaymentIPN)
router.get('/InvoiceList',AuthVerification,InvoiceController.InvoiceList)
router.get('/InvoiceProductList/:invoice_id',AuthVerification,InvoiceController.InvoiceProductList)


module.exports=router