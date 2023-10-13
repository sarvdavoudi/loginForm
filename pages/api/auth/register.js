const handler=async(req,res)=>{
    setTimeout(() => {
        res.status(200).json({
            status:true,
            message:"registerd successfully",
    
        })
        
    }, 1000);
}
export default handler;