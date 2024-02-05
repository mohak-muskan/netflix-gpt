export const Validation=(email,password)=>{
const emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

if(!emailRegex)return "Invalid Email";
if(!passwordRegex)return "Invalid Password";

return null;



}