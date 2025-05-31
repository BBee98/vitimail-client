import {EmailTemplate} from "@templates/Email";
import {Menu} from "@ui-components/Menu";
import {RouterComponentsProvider} from "@context/RouterProvider";

import styles from './styles.module.css';

function App() {
    return (
        <RouterComponentsProvider>
          <section className={styles.template}>
            <h1 className={styles.header}> Email Builder </h1>
            <EmailTemplate className={styles.template}/>
            <Menu/>
          </section>
        </RouterComponentsProvider>

      )
}

export default App
