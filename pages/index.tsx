//import Image from 'next/image'
//import { Inter } from 'next/font/google'
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react'
import Navbar from '@/components/Navbar';



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

  return (
   <>
   <Navbar />
   
   </>
  )
}
 