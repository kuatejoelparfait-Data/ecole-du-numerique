import './Remboursements.css'

export default function Remboursements() {
  return (
    <section className="remboursements">
      <div className="remboursements__container">
        <h1 className="remboursements__title">Politique de remboursement</h1>
        <p className="remboursements__updated">Dernière mise à jour : avril 2026</p>

        <div className="remboursements__block">
          <h2 className="remboursements__heading">1. Annulation avant le début de la formation</h2>
          <p>Toute demande d'annulation doit être effectuée par email à <a href="mailto:info@ecoledunumerique.be">info@ecoledunumerique.be</a>.</p>
          <ul className="remboursements__list">
            <li><strong>Plus de 14 jours avant</strong> le début : remboursement intégral.</li>
            <li><strong>Entre 7 et 14 jours avant</strong> le début : remboursement de 50% du montant payé.</li>
            <li><strong>Moins de 7 jours avant</strong> le début : aucun remboursement.</li>
          </ul>
        </div>

        <div className="remboursements__block">
          <h2 className="remboursements__heading">2. Annulation après le début de la formation</h2>
          <p>
            Aucun remboursement ne sera accordé une fois que la formation a débuté, sauf en cas de circonstances exceptionnelles dûment justifiées (maladie grave, hospitalisation...) sur présentation d'un justificatif.
          </p>
        </div>

        <div className="remboursements__block">
          <h2 className="remboursements__heading">3. Workshops et masterclass</h2>
          <ul className="remboursements__list">
            <li><strong>Plus de 7 jours avant</strong> l'événement : remboursement intégral.</li>
            <li><strong>Moins de 7 jours avant</strong> l'événement : aucun remboursement, mais le transfert de votre inscription à une autre personne est possible.</li>
          </ul>
        </div>

        <div className="remboursements__block">
          <h2 className="remboursements__heading">4. Annulation par Ecole du Numérique</h2>
          <p>
            En cas d'annulation d'une formation ou d'un événement de notre part, vous serez remboursé intégralement dans un délai de <strong>14 jours ouvrables</strong>. Vous pouvez également opter pour un report à une date ultérieure.
          </p>
        </div>

        <div className="remboursements__block">
          <h2 className="remboursements__heading">5. Procédure de remboursement</h2>
          <p>Pour toute demande de remboursement :</p>
          <ul className="remboursements__list">
            <li>Envoyez un email à <a href="mailto:info@ecoledunumerique.be">info@ecoledunumerique.be</a></li>
            <li>Indiquez votre nom, la formation concernée et la date d'inscription</li>
            <li>Le remboursement sera effectué via le même moyen de paiement utilisé lors de l'inscription</li>
          </ul>
        </div>

        <div className="remboursements__block">
          <h2 className="remboursements__heading">6. Contact</h2>
          <p>
            Pour toute question relative à notre politique de remboursement :<br />
            <a href="mailto:info@ecoledunumerique.be">info@ecoledunumerique.be</a><br />
            +32 465 55 71 09
          </p>
        </div>
      </div>
    </section>
  )
}
