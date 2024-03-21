const InvoiceService=require('../services/InvoiceService')

exports.CreateInvoice=async(req,res)=>{
    let result=await InvoiceService.CreateInvoiceService(req)
    return res.status(200).json(result)
}

exports.PaymentSuccess=async (req, res) => {
    let result=await InvoiceService.PaymentSuccessService(req)
    return res.status(200).json(result)
}

exports.PaymentFail=async (req, res) => {
    let result=await InvoiceService.PaymentFailService(req)
    return res.status(200).json(result)
}


exports.PaymentCancel=async (req, res) => {
    let result=await InvoiceService.PaymentCancelService(req)
    return res.status(200).json(result)
}

exports.PaymentIPN=async (req, res) => {
    let result=await InvoiceService.PaymentIPNService(req)
    return res.status(200).json(result)
}

exports.InvoiceList=async (req, res) => {
    let result=await InvoiceService.InvoiceListService(req);
    return res.status(200).json(result)
}

exports.InvoiceProductList=async (req, res) => {
    let result=await InvoiceService.InvoiceProductListService(req);
    return res.status(200).json(result)
}