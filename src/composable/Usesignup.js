import {ref} from 'vue'
import { projectAuth } from '../firebase/config'
const error = ref(null)
const signup = async(email, password, displayName) => {
    error.value = null
    try{
        const res = await projectAuth.createUserWithEmailAndPassword(email, password, displayName)
        if(!res){
            throw new Error('Could not complete Sign up form')
        }
        await res.user.updateProfile({displayName})
        error.value = null
        console.log(res)
        return res
    }catch(err){
        console.log(err.message)
        error.value = err.message
    }
}
const Usesignup = () => {
    return {error , signup}
}
export default Usesignup