export interface SeoContentSection {
  title: string;
  html: string;
}

export interface SeoContentFaq {
  question: string;
  answer: string;
}

export interface SeoContentLink {
  label: string;
  slug: string;
  href: string;
}

export interface SeoContent {
  guideTitle: string;
  sections: SeoContentSection[];
  faq?: SeoContentFaq[];
  relatedLinks?: SeoContentLink[];
}

// Helper to generate related links mixing categories and SEO pages
function makeLinks(items: { label: string; type: 'category' | 'seo'; slug: string }[]): SeoContentLink[] {
  return items.map((i) => ({
    label: i.label,
    slug: i.slug,
    href: i.type === 'category' ? `/category/${i.slug}` : `/s/${i.slug}`,
  }));
}

/**
 * SEO content for bottom-of-page sections.
 * Key = category slug or SEO page slug.
 * Add new entries to enrich any page.
 */
export const seoContent: Record<string, SeoContent> = {
  // ============================================================
  // MAIN CATEGORIES
  // ============================================================
  'abayas': {
    guideTitle: 'Guide complet de l\'abaya : histoire, styles et conseils',
    sections: [
      {
        title: 'Origines et histoire de l\'abaya',
        html: `<p>L'<strong>abaya</strong> (en arabe : عباءة) est un vêtement féminin traditionnel originaire de la <strong>péninsule arabique</strong>. Son histoire remonte à l'<strong>époque préislamique</strong>, où les peuples nomades du désert portaient déjà des vêtements longs et amples pour se protéger du climat aride, des tempêtes de sable et du soleil brûlant.</p>
<p>Avec l'avènement de l'<strong>Islam au VIIe siècle</strong>, l'abaya est devenue un symbole de <strong>modestie vestimentaire (hijab)</strong> pour les femmes musulmanes. Le Coran encourage les croyantes à porter des vêtements amples et couvrants, ce qui a contribué à la popularisation de l'abaya dans tout le monde musulman.</p>
<p>Longtemps cantonnée à une robe noire unie, l'abaya a connu une véritable <strong>révolution mode</strong> à partir des années 2000, notamment sous l'impulsion des créatrices émiraties et saoudiennes qui ont transformé ce vêtement traditionnel en une pièce de haute couture.</p>`,
      },
      {
        title: 'Les différents types d\'abaya',
        html: `<ul>
<li><strong>Abaya fermée (classique)</strong> : robe longue qui s'enfile par la tête, avec ouverture devant par zip ou boutons-pression. La plus traditionnelle.</li>
<li><strong>Abaya ouverte (kimono)</strong> : s'ouvre entièrement sur le devant comme un manteau. Inspirée du kimono japonais, elle se porte par-dessus une tenue.</li>
<li><strong>Abaya papillon</strong> : manches extra-larges qui se fondent dans le corps du vêtement, créant un effet d'ailes de papillon. Très aérienne et gracieuse.</li>
<li><strong>Abaya robe</strong> : coupe ajustée rappelant une robe occidentale, avec taille marquée. Plus structurée et moderne.</li>
<li><strong>Abaya évasée</strong> : coupe qui s'élargit vers le bas en forme de A. Flatteuse pour toutes les morphologies.</li>
<li><strong>Abaya saoudienne</strong> : coupe droite et épurée, très sobre. Souvent en tissu nidha ou crêpe noir.</li>
<li><strong>Abaya Dubai</strong> : plus ornée avec broderies, perles, strass. Reflète le style luxueux des Émirats.</li>
<li><strong>Abaya marocaine</strong> : inspirée du caftan, avec broderies sfifa et passementeries traditionnelles.</li>
</ul>`,
      },
      {
        title: 'Les matières et tissus de l\'abaya',
        html: `<p>Le choix du tissu est essentiel pour le confort et le rendu de l'abaya. Voici les matières les plus utilisées :</p>
<ul>
<li><strong>Nidha</strong> : tissu synthétique léger et fluide, très populaire au Moyen-Orient. Excellent tombé, résistant aux faux plis. Idéal pour le quotidien.</li>
<li><strong>Crêpe</strong> : tissu légèrement texturé, polyvalent et résistant. Disponible en différentes épaisseurs (crêpe léger pour l'été, crêpe épais pour l'hiver).</li>
<li><strong>Médina Silk (Soie de Médine)</strong> : tissu soyeux au toucher, avec un léger éclat. Plus habillé que le crêpe, parfait pour les occasions.</li>
<li><strong>Satin</strong> : tissu brillant et luxueux, réservé aux abayas de soirée et de cérémonie. Donne un rendu très élégant.</li>
<li><strong>Mousseline (Chiffon)</strong> : tissu ultra-léger et transparent, utilisé pour les superpositions et les manches. Apporte de la légèreté.</li>
<li><strong>Georgette</strong> : similaire à la mousseline mais légèrement plus opaque. Bon compromis entre légèreté et opacité.</li>
<li><strong>Velours</strong> : réservé aux abayas d'hiver et de cérémonie. Apporte chaleur et richesse au vêtement.</li>
<li><strong>Lin</strong> : matière naturelle respirante, idéale pour l'été. Aspect plus casual et décontracté.</li>
</ul>`,
      },
      {
        title: 'Comment choisir et porter son abaya',
        html: `<p><strong>Selon votre morphologie :</strong> les coupes évasées et papillon conviennent à toutes les silhouettes. Les coupes droites sont plus adaptées aux silhouettes fines. Les abaya-robes avec ceinture marquent la taille.</p>
<p><strong>Selon l'occasion :</strong> pour le quotidien, privilégiez le crêpe ou le nidha dans des couleurs sobres. Pour les événements, optez pour le satin ou le velours avec des broderies. Pour la prière, choisissez un modèle simple et confortable.</p>
<p><strong>Comment bien associer son abaya :</strong></p>
<ul>
<li>Avec un <strong>hijab assorti</strong> dans la même matière ou couleur pour un look harmonieux</li>
<li>Avec un <strong>hijab contrasté</strong> pour apporter de la couleur et du caractère</li>
<li>Avec des <strong>sneakers</strong> pour un style casual urbain</li>
<li>Avec des <strong>talons</strong> ou des <strong>mules</strong> pour un look plus habillé</li>
<li>Avec une <strong>ceinture</strong> pour structurer la silhouette</li>
<li>Avec un <strong>sac structuré</strong> pour un style chic</li>
</ul>
<p><strong>Entretien :</strong> la plupart des abayas se lavent en machine à 30°C sur cycle délicat. Évitez le sèche-linge et préférez un séchage à l'air libre. Le repassage se fait à basse température, idéalement à la vapeur.</p>`,
      },
    ],
    faq: [
      { question: 'Qu\'est-ce qu\'une abaya ?', answer: 'L\'abaya est une longue robe ample qui couvre tout le corps à l\'exception de la tête, des pieds et des mains. Traditionnellement portée par les femmes musulmanes, elle symbolise la pudeur et l\'élégance. Originaire de la péninsule arabique, elle se décline aujourd\'hui dans une infinité de styles.' },
      { question: 'Quelle taille choisir pour son abaya ?', answer: 'L\'abaya se choisit en fonction de votre hauteur et de vos mensurations. Consultez notre guide des tailles. En général, l\'abaya doit arriver au niveau des chevilles. Si vous hésitez entre deux tailles, prenez la taille supérieure pour plus de confort.' },
      { question: 'Peut-on porter une abaya en France ?', answer: 'Oui, l\'abaya est un vêtement comme un autre et peut être porté librement en France dans l\'espace public. C\'est un vêtement qui gagne en popularité et qui s\'intègre parfaitement dans la mode contemporaine.' },
      { question: 'Comment laver son abaya ?', answer: 'La plupart des abayas se lavent en machine à 30°C, cycle délicat. Utilisez une lessive douce. Évitez le sèche-linge. Les abayas en satin ou avec des broderies délicates nécessitent un lavage à la main ou un nettoyage à sec.' },
      { question: 'Quelle est la différence entre une abaya et un jilbab ?', answer: 'L\'abaya est une robe longue qui se porte comme un vêtement à part entière. Le jilbab est un ensemble composé d\'une cape (haut) et d\'une jupe, offrant une couverture plus ample. Le jilbab couvre également la tête, contrairement à l\'abaya qui nécessite un hijab séparé.' },
      { question: 'Où acheter une abaya de qualité en ligne ?', answer: 'Chez Yelira, nous sélectionnons les meilleures abayas avec un rapport qualité-prix optimal. Nous proposons une large gamme de styles (Dubai, papillon, kimono, brodée...) dans des matières premium, avec livraison gratuite dès 69€ et retours sous 14 jours.' },
    ],
    relatedLinks: makeLinks([
      { label: 'Abaya Dubai', type: 'category', slug: 'abaya-dubai' },
      { label: 'Abaya Papillon', type: 'category', slug: 'abaya-papillon' },
      { label: 'Abaya Kimono', type: 'category', slug: 'abaya-kimono' },
      { label: 'Abaya Brodée', type: 'category', slug: 'abaya-brodee' },
      { label: 'Abaya Satin', type: 'category', slug: 'abaya-satin' },
      { label: 'Abaya Simple', type: 'category', slug: 'abaya-simple' },
      { label: 'Abaya Noire', type: 'category', slug: 'abaya-noire' },
      { label: 'Abaya Saoudienne', type: 'seo', slug: 'abaya-saoudienne' },
      { label: 'Abaya Marocaine', type: 'seo', slug: 'abaya-marocaine' },
      { label: 'Abaya Pas Cher', type: 'seo', slug: 'abaya-pas-cher' },
      { label: 'Abaya Mariage', type: 'seo', slug: 'abaya-mariage' },
      { label: 'Abaya Grande Taille', type: 'seo', slug: 'abaya-grande-taille' },
      { label: 'Abaya Moderne', type: 'seo', slug: 'abaya-moderne' },
      { label: 'Hijabs', type: 'category', slug: 'hijabs' },
      { label: 'Jilbabs', type: 'category', slug: 'jilbabs' },
    ]),
  },

  'abaya-dubai': {
    guideTitle: 'Guide de l\'abaya Dubai : le style émirati',
    sections: [
      {
        title: 'L\'abaya Dubai : un héritage émirati',
        html: `<p>L'<strong>abaya Dubai</strong> est née dans les Émirats Arabes Unis, où la mode modeste est devenue un véritable secteur de luxe. Dubaï, en tant que capitale mondiale de la mode modeste, a transformé l'abaya traditionnelle en une pièce de haute couture reconnue internationalement.</p>
<p>Les grandes maisons de mode émiraties comme <strong>Hanayen</strong>, <strong>Arabesque</strong> et <strong>Bambah</strong> ont contribué à élever l'abaya au rang d'accessoire de luxe, avec des pièces pouvant atteindre plusieurs milliers d'euros. Cette influence a démocratisé des designs plus ornés et travaillés dans le monde entier.</p>`,
      },
      {
        title: 'Caractéristiques du style Dubai',
        html: `<p>L'abaya Dubai se distingue par :</p>
<ul>
<li><strong>Broderies dorées ou argentées</strong> : motifs floraux, géométriques ou calligraphiques réalisés au fil d'or</li>
<li><strong>Perles et cristaux</strong> : Swarovski, perles de culture ou perles synthétiques cousues à la main</li>
<li><strong>Dentelle</strong> : incrustations de dentelle fine sur les manches, le col ou les bordures</li>
<li><strong>Tissus premium</strong> : crêpe royal, satin duchesse, soie naturelle</li>
<li><strong>Coupes innovantes</strong> : asymétries, superpositions, jeux de transparence avec doublure</li>
</ul>
<p>L'abaya Dubai convient aussi bien au quotidien (dans ses versions plus sobres) qu'aux grandes occasions (versions haute couture avec ornements).</p>`,
      },
    ],
    faq: [
      { question: 'Quel prix pour une abaya Dubai ?', answer: 'Chez Yelira, nos abayas style Dubai commencent à partir de 39€ pour des modèles avec broderies subtiles, et montent jusqu\'à 120€ pour des pièces plus ornées avec perles et cristaux. Un excellent rapport qualité-prix comparé aux abayas directement importées de Dubaï.' },
      { question: 'Comment reconnaître une vraie abaya Dubai ?', answer: 'Une abaya de style Dubai se caractérise par la qualité de ses finitions : broderies nettes et régulières, perles solidement cousues, tissu de qualité avec un bon tombé. Les détails sont généralement positionnés de manière symétrique et harmonieuse.' },
    ],
    relatedLinks: makeLinks([
      { label: 'Abaya Brodée', type: 'category', slug: 'abaya-brodee' },
      { label: 'Abaya Satin', type: 'category', slug: 'abaya-satin' },
      { label: 'Abaya Saoudienne', type: 'seo', slug: 'abaya-saoudienne' },
      { label: 'Abaya Mariage', type: 'seo', slug: 'abaya-mariage' },
      { label: 'Abaya Soirée', type: 'seo', slug: 'abaya-soiree' },
      { label: 'Toutes les Abayas', type: 'category', slug: 'abayas' },
    ]),
  },

  'hijabs': {
    guideTitle: 'Guide complet du hijab : matières, styles et nouage',
    sections: [
      {
        title: 'Les matières de hijab',
        html: `<p>Le choix de la matière est déterminant pour le confort et le rendu de votre <strong>hijab</strong>. Chaque tissu a ses avantages :</p>
<ul>
<li><strong>Jersey</strong> : extensible, facile à nouer, ne glisse pas. Parfait pour le quotidien et le sport. Confort maximal.</li>
<li><strong>Soie de Médine</strong> : légèrement texturé, bonne tenue. Le compromis idéal entre élégance et praticité.</li>
<li><strong>Mousseline</strong> : léger et aérien, idéal pour l'été. Nécessite des épingles pour la tenue. Rendu très élégant.</li>
<li><strong>Satin</strong> : brillant et luxueux. Parfait pour les occasions spéciales. Peut glisser, nécessite un bonnet en dessous.</li>
<li><strong>Coton</strong> : naturel et respirant. Idéal pour les peaux sensibles et les saisons chaudes.</li>
</ul>`,
      },
      {
        title: 'Styles et techniques de nouage',
        html: `<p>Il existe de nombreuses façons de porter le hijab :</p>
<ul>
<li><strong>Style classique</strong> : hijab drapé simplement autour de la tête, maintenu par une épingle sous le menton</li>
<li><strong>Style turban</strong> : hijab enroulé autour de la tête en forme de turban, look moderne et urbain</li>
<li><strong>Hijab à enfiler</strong> : modèle prêt-à-porter qui s'enfile directement, sans besoin d'épingles</li>
<li><strong>Style volumineux</strong> : avec un bonnet volumateur dessous pour créer du volume à l'arrière</li>
</ul>
<p><strong>Astuce :</strong> portez toujours un <strong>sous-hijab</strong> ou <strong>bonnet</strong> en coton en dessous de votre hijab pour éviter les glissements et protéger vos cheveux.</p>`,
      },
    ],
    faq: [
      { question: 'Quel hijab pour débuter ?', answer: 'Pour débuter, nous recommandons le hijab en jersey : il ne glisse pas, ne nécessite pas d\'épingles et est très facile à nouer. Les hijabs à enfiler sont aussi une excellente option pour les débutantes.' },
      { question: 'Comment empêcher son hijab de glisser ?', answer: 'Portez un bonnet ou sous-hijab en coton. Utilisez des épingles à hijab de qualité. Les hijabs en jersey ou en coton tiennent naturellement mieux que le satin ou la mousseline.' },
    ],
    relatedLinks: makeLinks([
      { label: 'Hijab Jersey', type: 'category', slug: 'hijab-jersey' },
      { label: 'Hijab Soie de Médine', type: 'category', slug: 'hijab-soie-medine' },
      { label: 'Hijab Mousseline', type: 'category', slug: 'hijab-mousseline' },
      { label: 'Hijab Satin', type: 'category', slug: 'hijab-satin' },
      { label: 'Sous-hijab', type: 'category', slug: 'sous-hijab' },
      { label: 'Abayas', type: 'category', slug: 'abayas' },
      { label: 'Jilbabs', type: 'category', slug: 'jilbabs' },
    ]),
  },

  'jilbabs': {
    guideTitle: 'Guide du jilbab : 1 pièce, 2 pièces et saoudien',
    sections: [
      {
        title: 'Qu\'est-ce qu\'un jilbab ?',
        html: `<p>Le <strong>jilbab</strong> est un vêtement ample qui offre une couverture intégrale du corps, de la tête aux pieds. Contrairement à l'abaya qui nécessite un hijab séparé, le jilbab intègre la couverture de la tête, offrant une solution tout-en-un.</p>
<p>Le mot "jilbab" est mentionné dans le <strong>Coran (sourate Al-Ahzab, verset 59)</strong>, où il est recommandé aux croyantes de revêtir leurs jilbabs pour être reconnues et ne pas être importunées. C'est un vêtement qui a traversé les siècles tout en s'adaptant aux tendances actuelles.</p>`,
      },
      {
        title: 'Les différents types de jilbab',
        html: `<ul>
<li><strong>Jilbab 1 pièce</strong> : vêtement d'un seul tenant qui couvre de la tête aux pieds. Très pratique pour la prière, il s'enfile rapidement.</li>
<li><strong>Jilbab 2 pièces</strong> : composé d'une cape (khimar) et d'une jupe. Plus modulable, il permet de varier les combinaisons.</li>
<li><strong>Jilbab saoudien</strong> : style épuré et sobre, souvent en nidha noir, inspiré du style d'Arabie Saoudite.</li>
</ul>
<p>Le jilbab se porte principalement en <strong>nidha</strong>, <strong>crêpe</strong> ou <strong>microfibre</strong>, des matières légères qui permettent un port confortable au quotidien.</p>`,
      },
    ],
    relatedLinks: makeLinks([
      { label: 'Jilbab 1 pièce', type: 'category', slug: 'jilbab-1-piece' },
      { label: 'Jilbab 2 pièces', type: 'category', slug: 'jilbab-2-pieces' },
      { label: 'Jilbab Saoudien', type: 'category', slug: 'jilbab-saoudien' },
      { label: 'Khimar', type: 'category', slug: 'khimar' },
      { label: 'Abayas', type: 'category', slug: 'abayas' },
    ]),
  },

  // ============================================================
  // SEO PAGES
  // ============================================================
  'abaya-saoudienne': {
    guideTitle: 'Tout savoir sur l\'abaya saoudienne',
    sections: [
      {
        title: 'L\'abaya en Arabie Saoudite',
        html: `<p>En <strong>Arabie Saoudite</strong>, l'abaya est un vêtement culturellement ancré dans le quotidien des femmes. Jusqu'en 2019, le port de l'abaya était obligatoire dans l'espace public pour toutes les femmes résidant dans le royaume, y compris les étrangères.</p>
<p>Le style saoudien se caractérise par sa <strong>sobriété et son élégance épurée</strong>. Traditionnellement noire, l'abaya saoudienne mise sur la qualité du tissu et la perfection de la coupe plutôt que sur les ornements. Les tissus privilégiés sont le <strong>nidha</strong> (léger, infroissable) et le <strong>zoom</strong> (opaque, bonne tenue).</p>
<p>Aujourd'hui, même en Arabie Saoudite, l'abaya connaît une révolution : les jeunes créatrices saoudiennes proposent des modèles colorés, imprimés et plus contemporains, tout en respectant les codes de modestie.</p>`,
      },
      {
        title: 'Comment choisir son abaya saoudienne',
        html: `<p>Pour une <strong>abaya saoudienne authentique</strong>, privilégiez :</p>
<ul>
<li>Un tissu <strong>nidha</strong> ou <strong>zoom</strong> pour le quotidien</li>
<li>Une coupe <strong>droite et ample</strong> qui ne moule pas le corps</li>
<li>Un <strong>col rond ou en V</strong> simple et discret</li>
<li>Des <strong>manches droites</strong> ni trop larges ni trop ajustées</li>
<li>Une fermeture <strong>zip ou boutons-pression</strong> sur le devant</li>
</ul>
<p>L'abaya saoudienne est le choix idéal pour la <strong>Omra</strong> et le <strong>Hajj</strong>, ainsi que pour le quotidien si vous recherchez un style sobre et élégant.</p>`,
      },
    ],
    relatedLinks: makeLinks([
      { label: 'Abaya Dubai', type: 'category', slug: 'abaya-dubai' },
      { label: 'Abaya Simple', type: 'category', slug: 'abaya-simple' },
      { label: 'Abaya Noire', type: 'category', slug: 'abaya-noire' },
      { label: 'Abaya Marocaine', type: 'seo', slug: 'abaya-marocaine' },
      { label: 'Toutes les Abayas', type: 'category', slug: 'abayas' },
    ]),
  },

  'abaya-pas-cher': {
    guideTitle: 'Trouver une abaya pas cher : nos conseils',
    sections: [
      {
        title: 'Abaya à petit prix sans compromis',
        html: `<p>Trouver une <strong>abaya pas cher</strong> de qualité est tout à fait possible. Chez Yelira, nous travaillons en direct avec nos fournisseurs pour éliminer les intermédiaires et vous proposer les meilleurs prix. Nos abayas démarrent à partir de <strong>29,90€</strong>.</p>
<p>Les <strong>abayas en crêpe</strong> et en <strong>nidha</strong> offrent le meilleur rapport qualité-prix : ces matières sont durables, faciles d'entretien et gardent leur aspect neuf longtemps. Évitez les tissus trop fins qui s'abîment rapidement.</p>`,
      },
      {
        title: 'Astuces pour payer moins cher',
        html: `<ul>
<li><strong>Profitez des soldes</strong> : nos soldes saisonnières offrent jusqu'à -50% sur une sélection d'abayas</li>
<li><strong>Newsletter</strong> : inscrivez-vous pour recevoir des codes promo exclusifs</li>
<li><strong>Packs et lots</strong> : certains de nos ensembles offrent des réductions par rapport à l'achat à l'unité</li>
<li><strong>Livraison gratuite</strong> : dès 69€ d'achat, les frais de port sont offerts en point relais</li>
<li><strong>Programme fidélité</strong> : cumulez des points à chaque achat</li>
</ul>`,
      },
    ],
    relatedLinks: makeLinks([
      { label: 'Soldes Abayas', type: 'category', slug: 'soldes' },
      { label: 'Abaya Simple', type: 'category', slug: 'abaya-simple' },
      { label: 'Abaya Noire', type: 'category', slug: 'abaya-noire' },
      { label: 'Abaya Femme', type: 'seo', slug: 'abaya-femme' },
      { label: 'Toutes les Abayas', type: 'category', slug: 'abayas' },
    ]),
  },

  'abaya-mariage': {
    guideTitle: 'L\'abaya de mariage : élégance et pudeur pour le jour J',
    sections: [
      {
        title: 'Choisir son abaya de mariage',
        html: `<p>Le <strong>mariage</strong> est une occasion unique qui mérite un vêtement d'exception. L'abaya de mariage combine la <strong>pudeur islamique</strong> avec l'élégance et le raffinement d'une robe de mariée traditionnelle.</p>
<p>Pour la mariée, les couleurs privilégiées sont le <strong>blanc ivoire</strong>, le <strong>champagne</strong> et le <strong>rose poudré</strong>. Les matières nobles comme le <strong>satin duchesse</strong>, la <strong>soie</strong> et l'<strong>organza</strong> apportent une dimension luxueuse.</p>
<p>Les ornements typiques d'une abaya de mariage incluent : broderies de perles, cristaux Swarovski, dentelle de Calais, fil d'or ou d'argent, sequins discrets.</p>`,
      },
      {
        title: 'Pour les invitées',
        html: `<p>Si vous êtes <strong>invitée à un mariage</strong>, optez pour une abaya habillée qui ne vole pas la vedette à la mariée :</p>
<ul>
<li>Choisissez des <strong>couleurs subtiles</strong> : bordeaux, bleu nuit, vert émeraude, taupe</li>
<li>Évitez le blanc et l'ivoire, réservés à la mariée</li>
<li>Un modèle en <strong>satin</strong> ou avec des <strong>broderies discrètes</strong> est parfait</li>
<li>Complétez avec un <strong>hijab en soie</strong> ou en <strong>satin</strong> coordonné</li>
</ul>`,
      },
    ],
    relatedLinks: makeLinks([
      { label: 'Abaya Soirée', type: 'seo', slug: 'abaya-soiree' },
      { label: 'Abaya Satin', type: 'category', slug: 'abaya-satin' },
      { label: 'Abaya Brodée', type: 'category', slug: 'abaya-brodee' },
      { label: 'Abaya Blanche', type: 'category', slug: 'abaya-blanche' },
      { label: 'Makhawer', type: 'seo', slug: 'makhawer' },
    ]),
  },

  'abaya-grande-taille': {
    guideTitle: 'Abaya grande taille : la mode modeste pour toutes',
    sections: [
      {
        title: 'L\'inclusivité chez Yelira',
        html: `<p>La <strong>mode modeste</strong> doit être accessible à toutes les femmes, quelle que soit leur morphologie. Notre collection d'<strong>abayas grande taille</strong> (du XL au 5XL) est spécialement conçue avec des patrons adaptés qui garantissent confort et élégance.</p>
<p>Nos abayas grande taille ne sont pas de simples versions élargies : les <strong>emmanchures</strong> sont repensées, les <strong>longueurs</strong> ajustées et l'<strong>aisance</strong> calculée pour un tombé impeccable sur les morphologies généreuses.</p>`,
      },
      {
        title: 'Conseils de style pour les grandes tailles',
        html: `<ul>
<li><strong>Coupes évasées</strong> : les abayas évasées (forme A) sont particulièrement flatteuses car elles fluidifient la silhouette</li>
<li><strong>Matières fluides</strong> : préférez le nidha et le crêpe qui tombent bien sans mouler</li>
<li><strong>Couleurs sombres</strong> : le noir, le marine et le bordeaux ont un effet amincissant</li>
<li><strong>Détails verticaux</strong> : les broderies ou coutures verticales allongent visuellement la silhouette</li>
<li><strong>Évitez les gros motifs</strong> : préférez les motifs fins ou les détails discrets</li>
</ul>`,
      },
    ],
    relatedLinks: makeLinks([
      { label: 'Abaya Évasée', type: 'seo', slug: 'abaya-evasee' },
      { label: 'Abaya Simple', type: 'category', slug: 'abaya-simple' },
      { label: 'Abaya Noire', type: 'category', slug: 'abaya-noire' },
      { label: 'Abaya Femme', type: 'seo', slug: 'abaya-femme' },
      { label: 'Toutes les Abayas', type: 'category', slug: 'abayas' },
    ]),
  },
};

/**
 * Generates a fallback SEO content for pages without specific content.
 */
export function getDefaultSeoContent(name: string, type: 'category' | 'seo'): SeoContent {
  return {
    guideTitle: `En savoir plus sur ${name}`,
    sections: [
      {
        title: `${name} chez Yelira`,
        html: `<p>Découvrez notre sélection de <strong>${name.toLowerCase()}</strong> chez Yelira. Nous avons rassemblé les plus beaux modèles avec un souci constant de qualité et d'élégance. Chaque pièce est sélectionnée pour offrir le meilleur de la <strong>mode modeste</strong>.</p>
<p>La mode modeste est bien plus qu'une tendance : c'est un art de vivre qui allie <strong>pudeur</strong>, <strong>élégance</strong> et <strong>modernité</strong>. Chez Yelira, nous proposons des vêtements qui respectent ces valeurs tout en suivant les dernières tendances de la mode.</p>`,
      },
      {
        title: 'Pourquoi choisir Yelira ?',
        html: `<ul>
<li><strong>Qualité premium</strong> : des matières sélectionnées avec soin pour un confort optimal</li>
<li><strong>Prix accessibles</strong> : nous travaillons en direct avec nos fournisseurs</li>
<li><strong>Livraison gratuite</strong> : dès 69€ d'achat en point relais</li>
<li><strong>Retours gratuits</strong> : 14 jours pour changer d'avis</li>
<li><strong>Service client réactif</strong> : une équipe à votre écoute du lundi au vendredi</li>
</ul>`,
      },
    ],
    relatedLinks: makeLinks([
      { label: 'Abayas', type: 'category', slug: 'abayas' },
      { label: 'Hijabs', type: 'category', slug: 'hijabs' },
      { label: 'Jilbabs', type: 'category', slug: 'jilbabs' },
      { label: 'Abaya Pas Cher', type: 'seo', slug: 'abaya-pas-cher' },
    ]),
  };
}

export function getSeoContent(slug: string, fallbackName?: string, type: 'category' | 'seo' = 'category'): SeoContent {
  return seoContent[slug] || getDefaultSeoContent(fallbackName || slug, type);
}
