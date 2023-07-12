


const landing = (req,res)=>{
    res.render('landing')
}


const login = (req,res)=>{
    res.render('login')
}

const register = (req,res)=>{
    res.render('register')
}

const logout = (req,res)=>{
    res.render('logout')
}



module.exports={
    landing,
    login,
    register,
    logout
}