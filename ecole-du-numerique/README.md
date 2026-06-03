# École du Numérique — Site Web

Site vitrine de l'École du Numérique, construit en React + Vite. SPA (Single Page Application) avec routing côté client, sans backend.

---

## Stack technique

| Outil | Rôle |
|-------|------|
| [React 19](https://react.dev/) | UI par composants |
| [Vite](https://vitejs.dev/) | Bundler et serveur de dev |
| [React Router v7](https://reactrouter.com/) | Navigation entre pages |
| [Formspree](https://formspree.io/) | Envoi des formulaires (sans backend) |
| CSS custom properties | Design system (couleurs, espacements) |
| Google Fonts | Police Space Grotesk + Material Symbols |

---

## Installation

```bash
# Cloner le projet
git clone <url-du-repo>
cd ecole-du-numerique

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
# → http://localhost:5173
```

### Autres commandes

```bash
npm run build    # Build de production → dossier dist/
npm run preview  # Tester le build de production en local (port 4173)
npm run lint     # Vérifier le code avec ESLint
```

---

## Structure du projet

```
src/
├── components/               # Composants réutilisables sur toutes les pages
│   ├── Navbar/               # Barre de navigation (sticky, responsive, menu burger)
│   ├── Footer/               # Pied de page (liens, logo, LinkedIn)
│   ├── ScrollToTop/          # Scroll en haut + mémorise la position au retour arrière
│   └── Dividers/Wave/        # Vague de transition entre deux sections
│
├── data/                     # Données du site (formations, articles, événements...)
│   ├── formationsParticuliers.js   # Formations pour les particuliers
│   ├── formationsEntreprises.js    # Catalogue complet (234 formations) avec terminologie belge
│   ├── articles.js                 # Articles de blog (avec contenu complet)
│   ├── evenements.js               # Événements publics (masterclasses, conférences)
│   ├── workshops.js                # Ateliers pratiques publics
│   └── testimonials.js             # Témoignages (evenementsTestimonials + workshopsTestimonials)
│
├── pages/                    # Une page = un dossier, chaque section dans son sous-dossier
│   ├── Home/
│   ├── About/
│   ├── FormationsParticuliers/
│   ├── FormationsEntreprises/
│   ├── FormationParticulierDetail/  # Page dynamique /formations/:slug
│   ├── FormationEntrepriseDetail/   # Page dynamique /formations-entreprises/:slug
│   ├── NosEvenements/               # Événements publics + ateliers (toggle filtre)
│   │   ├── EvenementsHero/
│   │   ├── EvenementsWhy/
│   │   ├── NEGrid/                  # Grille avec filtre Événements / Ateliers
│   │   ├── EvenementsTestimonials/
│   │   ├── EvenementsFAQ/
│   │   └── EvenementsCTA/
│   ├── EvenementDetail/             # Page dynamique /evenements/:slug
│   ├── VosWorkshops/                # Page demande d'atelier en entreprise
│   │   ├── VWHero/
│   │   ├── VWAvantages/
│   │   ├── VWThemes/
│   │   ├── VWForm/                  # Formulaire de demande (id="demande-atelier")
│   │   └── VWTestimonials/
│   ├── WorkshopDetail/              # Page dynamique /workshops/:slug
│   ├── Blog/
│   ├── BlogDetail/                  # Page dynamique /blog/:slug
│   ├── Contact/
│   ├── Partenaires/
│   ├── Pricing/
│   ├── Remboursements/
│   ├── PolitiqueConfidentialite/
│   └── NotFound/                    # Page 404
│
├── App.jsx              # Routes et layout global
├── index.css            # Variables CSS globales (design tokens)
└── main.jsx             # Point d'entrée React

public/
├── assets/
│   ├── images/          # Photos, logos (format .webp)
│   └── icons/           # favicon.svg
├── robots.txt           # Instructions pour les moteurs de recherche
└── sitemap.xml          # Carte du site pour Google
```

---

## Système de filtres

### Filtres formations particuliers et entreprises (onglets par catégorie)

Les onglets sont définis **dans le composant** dans un tableau `categoryMeta`. Quand on clique sur un onglet, React filtre le tableau de données par le champ `category`.

```js
// src/pages/FormationsParticuliers/FPCategories/FPCategories.jsx

const categoryMeta = [
  { id: 'Intelligence Artificielle & Data', label: '...', icon: 'smart_toy' },
  { id: 'Développement Web & No-Code',      label: '...', icon: 'code' },
  // ...
]

// Filtre : garde uniquement les formations dont category === onglet actif
const current = formations.filter(f => f.category === active)
```

> **Important :** la valeur `id` dans `categoryMeta` doit correspondre exactement au champ `category` dans `formationsParticuliers.js`. Si les deux ne correspondent pas, la catégorie apparaît vide.

Pour ajouter une nouvelle catégorie de formations :
1. Ajouter l'entrée dans `categoryMeta` (dans le composant)
2. Utiliser exactement la même chaîne de caractères dans le champ `category` des formations concernées dans `formationsParticuliers.js`

---

### Filtre blog (par catégorie d'article)

Le filtre du blog se génère **automatiquement** à partir des données — pas besoin de le déclarer manuellement.

```js
// src/pages/Blog/BlogGrid/BlogGrid.jsx

// Extrait toutes les catégories uniques présentes dans les articles + "Tous"
const categories = ['Tous', ...new Set(articles.map(a => a.category))]

// Filtre selon l'onglet actif
const filtered = active === 'Tous'
  ? articles
  : articles.filter(a => a.category === active)
```

> Quand on ajoute un article avec une nouvelle `category`, le bouton de filtre correspondant apparaît automatiquement sans toucher au composant.

---

### Filtre Nos Événements (toggle Événements / Ateliers)

La page `/evenements` utilise un toggle pill pour basculer entre événements publics et ateliers. Le composant `NEGrid` gère les deux sources de données.

```js
// src/pages/NosEvenements/NEGrid/NEGrid.jsx

const [filter, setFilter] = useState('evenements')
const items = filter === 'evenements' ? evenements : workshops
```

Les données viennent de deux fichiers distincts : `src/data/evenements.js` pour les événements, `src/data/workshops.js` pour les ateliers.

---

### Filtrage des événements passés

Les événements et ateliers ont un champ `dateISO` (format `YYYY-MM-DD`). À l'affichage, chaque carte est comparée à la date du jour :

```js
const today = new Date()
const isPast = new Date(evt.dateISO) < today
// → si vrai : carte grisée, bouton "S'inscrire" masqué, "Voir plus" reste cliquable
```

> Les événements passés restent visibles dans la liste (pour l'historique) mais sont clairement marqués comme terminés.

---

## Design system (variables CSS)

Définies dans `src/index.css`, utilisées dans tous les composants :

```css
--purple        /* Violet principal #7B2FFF — formations particuliers, CTA */
--purple-light  /* Violet clair #A78BFA */
--purple-glow   /* Fond violet très léger */
--dark          /* Fond sombre #0F0F1A */
--white         /* Blanc #FFFFFF */
--text          /* Texte principal */
--text-muted    /* Texte secondaire */
--border        /* Couleur des bordures */
--gray-light    /* Fond gris clair (sections alternées) */
--container     /* Largeur max du contenu 1200px */
--radius        /* Border radius standard */
--shadow        /* Box shadow standard */
```

**Convention couleurs par audience :**
- Violet `#7B2FFF` → formations particuliers, éléments généraux
- Bleu `#3b1fa3` → formations entreprises (différenciation visuelle)

> Aucun dégradé CSS dans le projet — toutes les couleurs de fond sont unies.

---

## Ajouter du contenu

### Ajouter une formation (particuliers)

Ouvrir `src/data/formationsParticuliers.js` et ajouter un objet dans le tableau :

```js
{
  slug: 'mon-slug-unique',          // URL : /formations/mon-slug-unique
  category: 'Intelligence Artificielle & Data',  // doit correspondre à une catégorie existante
  title: 'Titre de la formation',
  level: 'Débutant',                // Débutant / Intermédiaire / Avancé
  desc: 'Description courte (affichée sur la carte)',
  about: 'Description longue (affichée sur la page de détail)',
  outcomes: [
    'Ce que l\'apprenant saura faire 1',
    'Ce que l\'apprenant saura faire 2',
  ],
  prerequisites: 'Ce qu\'il faut savoir avant de commencer.',
}
```

> La formation apparaît automatiquement dans la bonne catégorie sur `/formations-particuliers` et a sa propre page sur `/formations/mon-slug-unique`.

**Catégories disponibles :**
- `Intelligence Artificielle & Data`
- `Développement Web & No-Code`
- `Marketing Digital & SEO`
- `Réseaux Sociaux & Communication`
- `Design & Expérience Utilisateur`

---

### Ajouter une formation (entreprises)

#### Structure à 3 niveaux

Les formations entreprises sont organisées en **4 onglets → groupes → sous-groupes → formations**.

```
Onglet (category)
└── Groupe (group)
    └── Sous-groupe (subgroup)
        └── Formation (objet JS dans formationsEntreprises.js)
```

**Exemple concret :**
```
Intelligence Artificielle & Data          ← onglet (category)
└── Machine Learning, Deep Learning & Big Data    ← groupe (group)
    └── Vue d'ensemble du Machine Learning         ← sous-groupe (subgroup)
        └── Maîtriser la Data Science et l'IA      ← formation
```

#### Où est défini quoi ?

| Ce qu'on modifie | Fichier |
|---|---|
| Les formations (contenu, titre, desc…) | `src/data/formationsEntreprises.js` |
| Les groupes et sous-groupes (structure) | `src/pages/FormationsEntreprises/FECategories/FECategories.jsx` → constante `tabGroups` |
| Les onglets (icône, image, label) | `src/pages/FormationsEntreprises/FECategories/FECategories.jsx` → constante `categoryMeta` |

> La structure (groupes/sous-groupes) est définie indépendamment des formations. Un sous-groupe peut exister dans `tabGroups` sans avoir encore de formations — il affichera "Formations bientôt disponibles".

#### Champs d'une formation entreprise

Ouvrir `src/data/formationsEntreprises.js` et ajouter un objet :

```js
{
  slug: 'mon-slug-unique',               // URL : /formations-entreprises/mon-slug-unique
  category: 'Intelligence Artificielle & Data',  // doit correspondre à un id dans categoryMeta
  group: 'Machine Learning, Deep Learning & Big Data',  // doit correspondre à un name dans tabGroups
  subgroup: 'Vue d\'ensemble du Machine Learning',      // doit correspondre à un item dans subgroups[]
  title: 'Titre complet de la formation',
  level: 'Débutant',                     // Débutant / Intermédiaire / Avancé
  duration: '2 jours',                   // optionnel — affiché sur la carte
  desc: 'Description courte (carte).',
  about: 'Description longue (page de détail).',
  outcomes: [
    'Ce que le participant saura faire 1',
    'Ce que le participant saura faire 2',
  ],
  prerequisites: 'Ce qu\'il faut savoir avant.',
  price: 'Tarif sur demande à partir de 1 500 €',
  options: ['En entreprise', 'En ligne', 'Sur mesure'],
}
```

> **Important :** les valeurs `category`, `group` et `subgroup` doivent correspondre **exactement** (même casse, même ponctuation) aux chaînes déclarées dans `FECategories.jsx`. Si elles ne correspondent pas, la formation n'apparaît pas.

#### Ajouter un nouveau groupe ou sous-groupe

Ouvrir `src/pages/FormationsEntreprises/FECategories/FECategories.jsx` et modifier la constante `tabGroups` :

```js
const tabGroups = {
  'Intelligence Artificielle & Data': [
    {
      name: 'Mon nouveau groupe',   // correspond au champ group des formations
      icon: 'hub',                  // icône Material Symbols
      totalCount: null,             // null = calculé automatiquement depuis les données
      subgroups: [
        'Mon sous-groupe A',        // correspond au champ subgroup des formations
        'Mon sous-groupe B',
      ],
    },
    // ...autres groupes existants
  ],
}
```



---

### Ajouter un article de blog

Ouvrir `src/data/articles.js` :

```js
{
  slug: 'mon-article',
  title: 'Titre de l\'article',
  category: 'Intelligence Artificielle',
  date: '1 janvier 2026',
  readTime: '5 min',
  image: '/assets/images/blog/news/mon-image.webp',
  excerpt: 'Résumé affiché sur la carte.',
  intro: 'Introduction affichée en haut de la page de détail.',
  sections: [
    { heading: 'Titre de section', body: 'Contenu...' },
  ],
  conclusion: 'Texte de conclusion.',
  tags: ['Tag1', 'Tag2'],
}
```

> La catégorie de filtre se génère automatiquement — pas besoin de la déclarer ailleurs.

---

### Ajouter un événement

Ouvrir `src/data/evenements.js` :

```js
{
  slug: 'nom-evenement-2026',
  title: 'Titre de l\'événement',
  date: '10 mars 2026',
  dateISO: '2026-03-10',     // format YYYY-MM-DD — détecte automatiquement les événements passés
  heure: '10h00 - 13h00',
  lieu: 'Bruxelles',
  type: 'Masterclass',       // affiché comme tag sur la carte
  desc: 'Description courte.',
  content: 'Description longue affichée sur la page de détail.',
  programme: ['Étape 1', 'Étape 2'],
  intervenants: [
    { name: 'Prénom Nom', role: 'Rôle' },
  ],
}
```

> Si `dateISO` est dans le passé, l'événement s'affiche automatiquement avec un style "passé" (grisé, bouton d'inscription désactivé).

---

### Ajouter un atelier (onglet Ateliers de Nos Événements)

Ouvrir `src/data/workshops.js` — même logique que les événements, avec en plus :

```js
{
  slug: 'mon-atelier-2026',
  title: 'Titre de l\'atelier',
  date: '15 avril 2026',
  dateISO: '2026-04-15',
  heure: '14h00 - 17h00',
  lieu: 'Bruxelles',
  places: '12 places max',
  desc: 'Description courte.',
  content: 'Description longue.',
  programme: ['Étape 1', 'Étape 2'],
}
```

> Le tag "Sur mesure" s'affiche automatiquement à la place du prix — pas de champ `prix` à renseigner.

---

### Modifier les témoignages

Les témoignages sont centralisés dans `src/data/testimonials.js` :

```js
export const evenementsTestimonials = [ ... ]  // page Nos Événements
export const workshopsTestimonials  = [ ... ]  // page Vos Workshops
```

Chaque témoignage a la structure suivante :

```js
{
  quote: 'Citation du participant.',
  name: 'Prénom N.',
  role: 'Rôle / Entreprise',
  initials: 'PN',
}
```

---

## Formulaires (Formspree)

Les formulaires Contact et Partenaires utilisent [Formspree](https://formspree.io/) — aucun backend nécessaire. Les soumissions arrivent par email à l'adresse configurée sur le compte Formspree.

Les selects des formulaires ont `appearance: none` avec une flèche chevron custom en SVG (CSS `background-image`) pour une apparence cohérente sur tous les navigateurs.

Pour changer l'email de réception : se connecter sur [formspree.io](https://formspree.io) → Settings du formulaire.

---

## Routes du site

| URL | Page |
|-----|------|
| `/` | Accueil |
| `/a-propos` | À propos |
| `/formations-particuliers` | Catalogue formations particuliers |
| `/formations/:slug` | Détail d'une formation particulier |
| `/formations-entreprises` | Formations pour entreprises |
| `/formations-entreprises/:slug` | Détail d'une formation entreprise |
| `/evenements` | Nos Événements (toggle événements / ateliers) |
| `/evenements/:slug` | Détail d'un événement |
| `/workshops` | Vos Workshops (demande d'atelier en entreprise) |
| `/workshops/:slug` | Détail d'un atelier |
| `/blog` | Blog |
| `/blog/:slug` | Détail d'un article |
| `/partenaires` | Devenir partenaire |
| `/pricing` | Tarifs (3 packs : Particulier / Entreprise / Sur Mesure) |
| `/contact` | Contact |
| `/remboursements` | Politique de remboursements |
| `/confidentialite` | Politique de confidentialité |

---

## Déploiement

Le build produit un dossier `dist/` de fichiers statiques — pas de serveur Node.js nécessaire.

```bash
npm run build
# → génère dist/
```

### Sur Netlify (recommandé)

1. Connecter le repo GitHub sur [netlify.com](https://netlify.com)
2. Build command : `npm run build`
3. Publish directory : `dist`
4. Créer le fichier `public/_redirects` pour le routing React :

```
/*  /index.html  200
```

### Sur Vercel

1. Importer le repo sur [vercel.com](https://vercel.com)
2. Framework preset : **Vite**
3. Vercel détecte automatiquement la configuration — aucun fichier supplémentaire nécessaire.

---

## SEO

- `index.html` contient les balises `<title>` et `<meta name="description">` globales
- `public/robots.txt` autorise l'indexation complète et référence le sitemap
- `public/sitemap.xml` liste les URLs du site
- Soumettre le sitemap sur [Google Search Console](https://search.google.com/search-console) après mise en production
- Les polices Google Fonts sont chargées en mode non-bloquant (`preload`) pour ne pas pénaliser le FCP
