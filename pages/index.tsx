//import Image from 'next/image'
//import { Inter } from 'next/font/google'
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react'
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import useMovieList from '@/hooks/useMovieList';




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
  const { data: movies = []} = useMovieList();

  return (
   <>
   <Navbar />
   <Billboard />
   <div className='pb-40'>
    <MovieList title='Trending Now' data={movies} />
    </div> 
   </>
  )
}
  
