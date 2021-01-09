import { motion } from "framer-motion";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyle />
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
      }}>
        <Component {...pageProps} />
      </motion.div>
    </>
  )
}

export default MyApp
