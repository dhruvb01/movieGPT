export const Validate=(email,password)=> {
    const valpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    
    const valemail=/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email)
    if(!valemail) return "invalid email"
    if(!valpass) return "invalid password"
    
}
