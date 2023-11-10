export default () => (
  <div>
    <style jsx>{`
      div {
        background: #0077b6; // Couleur bleu océan
        margin: 0 auto;
        padding: 4px 20px;
        max-width: 800px;
        border-radius: 4px;
        color: white; // Texte en blanc pour contraster avec le fond bleu
      }
      a {
        color: #ade8f4; // Une nuance plus claire de bleu pour les liens
        text-decoration: underline;
      }
    `}</style>
    <h2>👋 Bienvenue à tous les utilisateurs!</h2>
    <p>
      <a href="https://medium.engineering/engineering-growth-at-medium-4935b3234d25">En savoir plus sur notre approche actuelle de la croissance des ingénieurs</a>.
    </p>
  </div>
)
