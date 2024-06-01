
//get users page
function getUsers(req,res,next)
{
    res.render("users",{
        title:"users chat-application",
    });
};

module.exports={
    getUsers,
};