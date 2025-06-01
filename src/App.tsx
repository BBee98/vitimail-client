import {EmailTemplate} from "@templates/Email";
import {Menu} from "@ui-components/Menu";
import {RouterComponentsProvider} from "@context/RouterProvider";

import styles from './styles.module.css';

function App() {
    return (
        <RouterComponentsProvider>
            <h1 className={styles.header}> Email Builder </h1>
            <section className={styles.template}>
                <EmailTemplate className={styles.emailTemplate}/>
                <Menu/>
          </section>
        </RouterComponentsProvider>

      )
}

export default App
