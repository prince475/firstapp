
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  function ListItems() {

    const list = [1, 2, 3, 4]
    return (
      <>
        { 
          list.map(id =>{
            return(
              <li key={id}>{id}</li>
            )
          }) 
         }
      </>
    )
  }
  

  return (
    <ul>
      <ListItems />
    </ul>
  )
}
