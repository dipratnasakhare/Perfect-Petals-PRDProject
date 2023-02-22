

const Email_Validation = (req, res, next) => {

    const UserDetails = req.body;
    const { email, password, first_name, mobile_no } = UserDetails


    if (email === undefined || password === undefined || first_name === undefined || mobile_no === undefined) {

        return res.status(200).send("Please enter all require fields")
        

    } else {

        let Gmail_ID_Valid = email.includes("@gmail.com")
        let Email_ID_Valid = email.includes("@email.com")
        let Apple_ID_Valid = email.includes("@icloud.com")

        if (Gmail_ID_Valid || Email_ID_Valid || Apple_ID_Valid) {

            next()

        } else {

            return res.status(200).send({msg:"Invalid email", status:"error"});

        }


    }


}