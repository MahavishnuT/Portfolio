import "./footer.scss"
import { useTranslation } from "react-i18next"

function Footer() {
  const { t } = useTranslation();

  return(
    <section className="footer">
      <a href="mailto:tom.pujalte@gmail.com?subject=Contact%20for&body=Hello,%20I%20would%20like%20to%20get%20in%20touch.">{t('contact')}</a>
    </section>
  )
} 

export default Footer