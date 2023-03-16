import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {Button} from './components/Button/Button'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'this is the home page',
}


export default function Home() {
 
  
  return (
    <main className={styles.main}>
      
      <Button/>
    </main>
  )
}
