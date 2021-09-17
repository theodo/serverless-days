import React from "react"
import Modal from "react-modal"
import { FormattedMessage } from "gatsby-plugin-intl"
import classes from "./styles.module.scss"
import theodoLogo from "../../images/sponsorsLogo/Theodo.svg"
import datadogLogo from "../../images/sponsorsLogo/datadog.png"
import unifyLogo from "../../images/sponsorsLogo/unify.jpg"
import mickLogo from "../../images/sponsorsLogo/mick.png"
// import faunadbLogo from "../../images/sponsorsLogo/faunadb.svg"

const ModalStyle = {
  overlay: {
    position: "fixed",
    top: 50,
    left: 50,
    right: 50,
    bottom: 50,
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "200px",
    border: "1px solid #ccc",
    overflow: "auto",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
}

const Sponsors = ({ id }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h2 className={classes.title}>
          <FormattedMessage id="sponsors.title" />
        </h2>
        <a
          className={classes.callToAction}
          href="mailto:paris@serverlessdays.io"
        >
          <FormattedMessage id="sponsors.call-to-action" />
        </a>
      </div>
      <p className={classes.subtitle}>
        <FormattedMessage id="sponsors.content" />
      </p>
      <div className={classes.logosContainer}>
        <div className={classes.logos}>
          <p className={classes.sponsorType}>/Silver</p>
          <img className={classes.logoSilv1} src={datadogLogo} alt="DataDog" />
          {/* <img className={classes.logoSilv2} src={faunadbLogo} alt="FaunaDb" /> */}
        </div>

        <div className={classes.logos}>
          <p className={classes.sponsorType}>/Platinum</p>
          <img className={classes.logoPlat} src={theodoLogo} alt="Theodo" />
        </div>

        <div className={classes.logos}>
          <p className={classes.sponsorType}>/Bronze</p>
          <img className={classes.logoBronze} src={unifyLogo} alt="Unify" />
        </div>
      </div>
      <hr className={classes.inKind} />
      <p className={classes.sponsorType}>/In-Kind</p>
      <div className={classes.logos}>
        <img
          className={classes.logoInKind}
          onClick={openModal}
          src={mickLogo}
          alt="Les cafés de Mick"
        />
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={ModalStyle}
        >
          <a href="https://www.lescafesdemick.fr"> Les cafés de Mike </a>

          <p className={classes.mickText}>
            C'est à Londres en 2010 que Mick découvre la culture café déjà très
            développée dans les coffee-shops de l'Est Londonien. Alors qu'à
            Paris on doit souvent se contenter de café brûlé aux comptoirs des
            brasseries, les Anglais, inspirés par les Australiens ou les
            Néo-Zélandais, nombreux dans la City, se démènent pour faire
            découvrir aux amateurs, les différentes origines et les modes de
            préparation adaptés. Des baristas passionnés et des
            micro-torréfacteurs composent une communauté convaincue que l'on
            peut déguster les cafés pour leurs notes et leurs arômes comme on le
            fait pour le vin en France. Mais c'est un voyage d'un an en Amérique
            Latine qui finira par convaincre Mick de se lancer dans l'aventure
            café. La rencontre avec des producteurs investis et la visite de
            plusieurs plantations au Guatemala, en Colombie, au Pérou ou encore
            au Brésil lui permettent de découvrir la richesse du travail
            accompli en amont. La variété des processus de culture, de récolte,
            de séchage et de dépulpage du grain font la richesse de production
            du café. Chaque étape a son incidence sur le goût final en tasse. En
            2018, les Cafés de Mick voient le jour, grâce au soutien du
            collectif Beans On Fire et de l'atelier collaboratif qui porte le
            même nom à Paris dans le 20e. Une torréfaction artisanale et
            respectueuse de chaque origine : le but étant de révéler tous les
            arômes et les subtilités de chaque grain en fonction de sa
            provenance mais aussi du process de dépulpage (Lavé, Nature,
            Honey...) Mick choisit ses cafés en travaillant main dans la main
            avec des importateurs eux aussi passionnés et qui lui garantissent
            la traçabilité des grains ainsi que l'équité en terme de revenu pour
            les petits producteurs. À vous désormais de découvrir la palette
            arômatique de cafés inspirés par les bons moments de la vie, ils
            sont livrés gratuitement en vélo dans Paris !
          </p>
        </Modal>
      </div>
    </div>
  )
}

export default Sponsors
