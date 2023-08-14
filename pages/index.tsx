//import Image from 'next/image'
//import { Inter } from 'next/font/google'
import { NextPageContext } from 'next';
import { getSession,  signOut } from 'next-auth/react'
import useCurrentUser from '@/hooks/useCurrentUser';

//protect home rout 
//Lo que hacemos aca es chequear si hay una sesion habilitada, si no la pag te redirecciona a auth. 
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect:{
        destination : '/auth',
        permanent: false,
      }
    }
  }
 
 
return {
  props: {}
}
}

 
//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //how we can fetch our user using useCurrent.ts hook, for the frontend. 
  const { data: user} = useCurrentUser(); 

  return (
   <>
   <h1 className='text-4x1 text-green-500'> netflix</h1>
   <p className='text-white'>Logged in as : {user?.email} </p>
   <button className='h-10 w-full bg-white'  onClick={() => signOut()}>LogOut!</button>
   </>
  )
}
 