import Image from "next/image"
import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.headerContainer}>
        <Link href={"/"}>
            <Image
            src="/next.svg"
            width={100}
            height={100}
            alt="Logo"
            />
        </Link>
        <nav >
            <ul className={styles.navul}>
                <li> <Link href="/" className={styles.noDecorator}> Home </Link> </li>
                <li> <Link href="/"></Link>temp</li>
                <li> <Link href="/"></Link>temp</li>
                <li> <Link href="/login" className={styles.noDecorator}>Login</Link> </li>
            </ul>
        </nav>
    </div>
    
  )
}