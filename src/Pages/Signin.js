import {  useEffect, useState } from 'react'
import { auth,db,provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { addDoc, collection, getDocs } from 'firebase/firestore'

const SignIn = () => {
    
    const [users,setUsers]=useState([])
    const UsersRef=collection(db,"Users");

    useEffect(()=>{
        const getUsers = async() =>{
           const data= await getDocs(UsersRef)
            setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        }   
        getUsers();
        
    })
    const handleSignIn = async () => {
        try
        {
            await signInWithPopup(auth, provider)

            const checkId = auth.currentUser.uid;
            const userExists = users.some((user) => user.ID === checkId);

            if (userExists) {
            return;
            }
            else
            {
                await addDoc(UsersRef,{
                    Name: auth.currentUser.displayName,
                    Photo: auth.currentUser.photoURL,
                    ID:auth.currentUser.uid
                })
            }
        }
        catch(err)
        {
            console.error(err)
        }
    }
    return (
        <section className='mt-5 width-container'>
            <div className=' w-100 bg-primary rounded' >
                <div className=' d-flex justify-content-center cursor-pointer align-items-center p-4 border-dark border rounded ' onClick={handleSignIn}>
                    <h3><i className='bi bi-google'></i></h3>
                    <h5 className='text-center'>SignIn With Google</h5>
                </div>
            </div>  
        </section> 
     );
}
 
export default SignIn;