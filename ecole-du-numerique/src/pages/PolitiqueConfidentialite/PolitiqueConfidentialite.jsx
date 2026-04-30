import './PolitiqueConfidentialite.css'

export default function PolitiqueConfidentialite() {
  return (
    <section className="politique">
      <div className="politique__container">
        <h1 className="politique__title">Politique de confidentialité</h1>
        <p className="politique__updated">Dernière mise à jour : avril 2026</p>

        <div className="politique__block">
          <h2 className="politique__heading">1. Responsable du traitement</h2>
          <p>
            Ecole du Numérique (Digital House Company), Région de Bruxelles-Capitale, Belgique.<br />
            Contact : <a href="mailto:info@ecoledunumerique.be">info@ecoledunumerique.be</a>
          </p>
        </div>

        <div className="politique__block">
          <h2 className="politique__heading">2. Données collectées</h2>
          <p>Nous collectons les données suivantes via nos formulaires :</p>
          <ul className="politique__list">
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone (optionnel)</li>
            <li>Message libre</li>
          </ul>
          <p>Ces données sont transmises via le service <strong>Formspree</strong> (formspree.io), soumis au RGPD.</p>
        </div>

        <div className="politique__block">
          <h2 className="politique__heading">3. Finalités du traitement</h2>
          <p>Vos données sont utilisées uniquement pour :</p>
          <ul className="politique__list">
            <li>Répondre à vos demandes de contact ou de partenariat</li>
            <li>Vous envoyer notre newsletter si vous y avez souscrit</li>
            <li>Traiter vos inscriptions aux formations</li>
          </ul>
        </div>

        <div className="politique__block">
          <h2 className="politique__heading">4. Durée de conservation</h2>
          <p>
            Vos données sont conservées pour une durée maximale de <strong>3 ans</strong> à compter de votre dernière interaction avec nous.
          </p>
        </div>

        <div className="politique__block">
          <h2 className="politique__heading">5. Vos droits (RGPD)</h2>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
          <ul className="politique__list">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement ("droit à l'oubli")</li>
            <li>Droit d'opposition au traitement</li>
            <li>Droit à la portabilité des données</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à <a href="mailto:info@ecoledunumerique.be">info@ecoledunumerique.be</a>.
          </p>
        </div>

        <div className="politique__block">
          <h2 className="politique__heading">6. Cookies</h2>
          <p>
            Ce site n'utilise pas de cookies de tracking ou publicitaires. Seuls des cookies techniques indispensables au bon fonctionnement du site peuvent être utilisés.
          </p>
        </div>

        <div className="politique__block">
          <h2 className="politique__heading">7. Contact</h2>
          <p>
            Pour toute question relative à vos données personnelles :<br />
            <a href="mailto:info@ecoledunumerique.be">info@ecoledunumerique.be</a><br />
            +32 465 55 71 09
          </p>
        </div>
      </div>
    </section>
  )
}
