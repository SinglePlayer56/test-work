import styles from './page.module.scss'
import {Header, MainSection, SecondSection} from "@/components";

export default function Home() {


    return (
        <>
            <Header/>
            <main className={styles.wrapper}>
                <MainSection/>
                <SecondSection/>
            </main>
        </>
    )
}
