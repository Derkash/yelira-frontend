export interface CategoryDescription {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  introTitle: string;
  introText: string;
}

export const categoryDescriptions: Record<string, CategoryDescription> = {
  // ============================================================
  // MEGA CATEGORIES
  // ============================================================
  'femme': {
    slug: 'femme',
    seoTitle: 'Mode Femme Musulmane | Abayas, Hijabs, Jilbabs - Yelira',
    metaDescription: 'Découvrez toute la collection femme Yelira : abayas, hijabs, jilbabs, khimars, burkinis et prêt-à-porter modeste. Livraison gratuite dès 69€.',
    introTitle: 'La mode modeste pour femme chez Yelira',
    introText: `<p>Chez <strong>Yelira</strong>, nous proposons une collection complète de <strong>vêtements modestes pour femme</strong> alliant pudeur, élégance et modernité. De l'abaya classique au prêt-à-porter contemporain, chaque pièce est sélectionnée pour son style et sa qualité.</p>
<p>Explorez nos abayas dans tous les styles, nos hijabs dans toutes les matières, nos jilbabs pratiques et nos khimars couvrants. Retrouvez également nos collections mariage, burkini et grande taille pour répondre à toutes vos envies.</p>`,
  },
  'enfant': {
    slug: 'enfant',
    seoTitle: 'Vêtements Enfant Musulman | Collection Fille & Garçon - Yelira',
    metaDescription: 'Collection enfant Yelira : abayas fille, qamis garçon, robes de prière et burkinis enfant. Confort et qualité pour les petits. Livraison gratuite dès 69€.',
    introTitle: 'La mode modeste pour les enfants',
    introText: `<p>Offrez à vos <strong>enfants</strong> des vêtements modestes de qualité avec la collection enfant Yelira. Abayas pour fille, qamis pour garçon, robes de prière et burkinis : tout est pensé pour allier confort, praticité et élégance.</p>
<p>Découvrez aussi nos <strong>combos mère-fille</strong> assortis pour des moments de complicité. Chaque pièce est confectionnée dans des matières douces et résistantes, adaptées aux mouvements des plus jeunes.</p>`,
  },

  // ============================================================
  // MID-LEVEL CATEGORIES — FEMME
  // ============================================================
  'abayas': {
    slug: 'abayas',
    seoTitle: 'Abaya Femme Musulmane | Toute la Collection - Yelira',
    metaDescription: 'Découvrez notre collection d\'abayas pour femme musulmane sur Yelira. Abaya Dubai, papillon, kimono, brodée, satin et plus. Large choix de styles et de couleurs. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya : une pièce essentielle de la mode modeste',
    introText: `<p>L'<strong>abaya</strong> est devenue une pièce essentielle du dressing de la femme musulmane et un incontournable de la mode islamique. Cette longue robe ample, qui se porte par-dessus les vêtements, allie pudeur et élégance avec une infinie variété de styles.</p>
<p>Chez Yelira, nous avons rassemblé les plus belles abayas pour répondre à tous vos besoins : <strong>abaya Dubai</strong> sophistiquée avec ses broderies dorées, <strong>abaya papillon</strong> aérienne et féminine, <strong>abaya kimono</strong> moderne et tendance, <strong>abaya brodée</strong> artisanale, ou encore <strong>abaya satin</strong> luxueuse pour les grandes occasions.</p>
<p>Confectionnées dans des matières premium — nidha, crêpe, médina silk, mousseline et satin — nos abayas offrent un confort optimal et un tombé impeccable. Disponibles du XS au 5XL, dans un large choix de couleurs allant du noir classique aux teintes les plus tendance.</p>`,
  },
  'hijabs': {
    slug: 'hijabs',
    seoTitle: 'Hijab Femme | Toute la Collection Hijabs - Yelira',
    metaDescription: 'Découvrez notre collection de hijabs sur Yelira. Hijab jersey, soie de médine, mousseline, satin. Tous les styles et toutes les couleurs. Livraison gratuite dès 69€.',
    introTitle: 'Le hijab : l\'accessoire essentiel de la femme musulmane',
    introText: `<p>Le <strong>hijab</strong> est bien plus qu'un simple voile : c'est un accessoire de mode qui reflète votre personnalité et votre style. Chez Yelira, nous proposons une large gamme de hijabs dans toutes les matières et toutes les couleurs pour vous permettre de varier vos looks au quotidien.</p>
<p>Notre collection comprend des <strong>hijabs jersey</strong> doux et faciles à nouer, des <strong>hijabs en soie de médine</strong> au tombé élégant, des <strong>hijabs mousseline</strong> légers et aériens, et des <strong>hijabs satin</strong> luxueux pour les occasions spéciales.</p>
<p>Disponibles dans un nuancier de plus de 30 coloris, nos hijabs sont confectionnés dans des matières premium qui résistent au lavage et gardent leur éclat au fil du temps.</p>`,
  },
  'jilbabs': {
    slug: 'jilbabs',
    seoTitle: 'Jilbab Femme | Collection Jilbabs 1 & 2 Pièces - Yelira',
    metaDescription: 'Découvrez notre collection de jilbabs sur Yelira. Jilbab 1 pièce, 2 pièces et jilbab saoudien. Couverture complète et élégance. Livraison gratuite dès 69€.',
    introTitle: 'Le jilbab : la couverture complète et élégante',
    introText: `<p>Le <strong>jilbab</strong> est un vêtement ample qui couvre intégralement le corps, offrant une couverture complète et une grande pudeur. Chez Yelira, nous proposons des jilbabs dans différents styles pour répondre à toutes les préférences.</p>
<p>Notre collection comprend des <strong>jilbabs 1 pièce</strong> pratiques et rapides à enfiler, des <strong>jilbabs 2 pièces</strong> composés d'une cape et d'une jupe, et des <strong>jilbabs saoudiens</strong> au style épuré et traditionnel.</p>
<p>Confectionnés dans des tissus légers et fluides, nos jilbabs offrent un confort optimal pour le quotidien et la prière, sans compromis sur l'élégance.</p>`,
  },
  'khimars': {
    slug: 'khimars',
    seoTitle: 'Khimar Femme | Collection Khimars - Yelira',
    metaDescription: 'Trouvez votre khimar sur Yelira. Khimar court, long, soie de médine et jazz. Voile couvrant tête, épaules et poitrine. Livraison gratuite dès 69€.',
    introTitle: 'Le khimar : le voile long et couvrant',
    introText: `<p>Le <strong>khimar</strong> est un voile long qui couvre la tête, le cou, les épaules et descend sur la poitrine, offrant une couverture plus ample qu'un hijab classique. C'est le choix privilégié des femmes qui souhaitent une couverture généreuse tout en gardant un look soigné.</p>
<p>Notre collection de khimars chez Yelira se décline en plusieurs longueurs : khimar court (au-dessus de la taille), khimar mi-long (jusqu'à la taille) et khimar long (sous la taille). Disponibles dans des matières légères et opaques.</p>
<p>Le khimar se porte avec une jupe, un pantalon large ou une abaya pour créer un ensemble complet et harmonieux.</p>`,
  },
  'tenues-de-priere': {
    slug: 'tenues-de-priere',
    seoTitle: 'Tenue de Prière Femme | Robe & Ensemble de Prière - Yelira',
    metaDescription: 'Découvrez nos tenues de prière pour femme sur Yelira. Robes de prière avec hijab intégré, ensembles de prière, jilbabs et tapis. Livraison gratuite dès 69€.',
    introTitle: 'Tenues de prière : confort et recueillement',
    introText: `<p>La <strong>tenue de prière</strong> est un vêtement essentiel pour la femme musulmane. Chez Yelira, nous proposons des tenues spécialement conçues pour la prière, alliant praticité, confort et couverture complète.</p>
<p>Retrouvez nos <strong>robes de prière avec hijab intégré</strong> qui s'enfilent en quelques secondes, nos <strong>ensembles de prière</strong> 2 pièces, nos <strong>jilbabs de prière</strong> amples et nos <strong>tapis de prière</strong> pour prier en toute sérénité où que vous soyez.</p>`,
  },
  'mariage-occasions': {
    slug: 'mariage-occasions',
    seoTitle: 'Abaya Mariage & Soirée | Tenues Occasions Spéciales - Yelira',
    metaDescription: 'Collection mariage et occasions Yelira : abayas de mariage, tenues de soirée, Aïd et Ramadan, caftans. Élégance et pudeur pour vos événements. Livraison gratuite dès 69€.',
    introTitle: 'Mariages et occasions : l\'élégance pour chaque événement',
    introText: `<p>Les <strong>occasions spéciales</strong> méritent des tenues d'exception. Chez Yelira, découvrez notre collection dédiée aux événements : <strong>abayas de mariage</strong> raffinées, <strong>tenues de soirée</strong> élégantes, <strong>tenues d'Aïd</strong> festives et <strong>caftans</strong> traditionnels.</p>
<p>Chaque pièce est sélectionnée dans des matières nobles — satin, soie, velours — et ornée de détails précieux : broderies, perles, dentelle. Parce que la pudeur n'est jamais un frein à l'élégance.</p>`,
  },
  'pret-a-porter': {
    slug: 'pret-a-porter',
    seoTitle: 'Prêt-à-Porter Modeste Femme | Robes, Jupes, Tuniques - Yelira',
    metaDescription: 'Collection prêt-à-porter modeste Yelira : robes longues, ensembles, tuniques, jupes, pantalons palazzo et manteaux. Mode pudique et tendance. Livraison gratuite dès 69€.',
    introTitle: 'Prêt-à-porter modeste : la mode au quotidien',
    introText: `<p>Notre collection <strong>prêt-à-porter modeste</strong> vous propose des pièces tendance et couvrantes pour le quotidien. Robes longues, ensembles assortis, tuniques, jupes longues, pantalons palazzo et manteaux : tout pour composer des tenues modestes et modernes.</p>
<p>Chez Yelira, chaque pièce est pensée pour s'intégrer facilement dans votre garde-robe et se mixer avec vos abayas et hijabs. Des matières confortables, des coupes flatteuses et des couleurs actuelles.</p>`,
  },
  'burkini': {
    slug: 'burkini',
    seoTitle: 'Burkini Femme | Maillot de Bain Modeste - Yelira',
    metaDescription: 'Découvrez notre collection de burkinis sur Yelira. Maillots de bain modestes, couvrants et tendance pour la plage et la piscine. Livraison gratuite dès 69€.',
    introTitle: 'Le burkini : le maillot de bain modeste',
    introText: `<p>Le <strong>burkini</strong> est le maillot de bain modeste qui vous permet de profiter de la plage et de la piscine en toute sérénité. Couvrant et confortable, il offre une alternative élégante aux maillots de bain traditionnels.</p>
<p>Nos burkinis chez Yelira sont confectionnés dans des tissus techniques à séchage rapide, résistants au chlore et aux UV. Disponibles dans des designs modernes et des couleurs variées, ils allient fonctionnalité et style.</p>`,
  },
  'omra-hajj-femme': {
    slug: 'omra-hajj-femme',
    seoTitle: 'Tenue Omra & Hajj Femme | Collection Pèlerinage - Yelira',
    metaDescription: 'Préparez votre Omra ou Hajj avec Yelira. Abayas blanches, tenues de pèlerinage et ensembles de prière voyage. Livraison gratuite dès 69€.',
    introTitle: 'Omra et Hajj : préparez votre pèlerinage',
    introText: `<p>Préparez votre <strong>Omra</strong> ou votre <strong>Hajj</strong> avec des tenues adaptées et confortables. Notre collection pèlerinage comprend des <strong>abayas blanches</strong> spéciales Omra, des <strong>tenues blanches</strong> pour le Hajj et des <strong>ensembles de prière voyage</strong> pratiques.</p>
<p>Chaque pièce est conçue pour le confort lors de longues heures de dévotion : matières respirantes, coupes amples et faciles à enfiler. Des tenues dignes de ce voyage spirituel unique.</p>`,
  },
  'grande-taille-femme': {
    slug: 'grande-taille-femme',
    seoTitle: 'Mode Modeste Grande Taille | Abayas & Jilbabs XL à 5XL - Yelira',
    metaDescription: 'Collection grande taille Yelira : abayas, jilbabs et vêtements modestes du XL au 5XL. Coupes adaptées et flatteuses. Livraison gratuite dès 69€.',
    introTitle: 'Grande taille : la mode modeste pour toutes',
    introText: `<p>La <strong>mode modeste</strong> est accessible à toutes les femmes. Notre collection <strong>grande taille</strong> (du XL au 5XL) propose des abayas, jilbabs et vêtements aux coupes spécialement adaptées pour un tombé impeccable et un confort optimal.</p>
<p>Emmanchures repensées, longueurs ajustées, aisance calculée : chaque modèle est conçu pour sublimer les morphologies généreuses. Des matières fluides et des coupes évasées pour une silhouette élégante.</p>`,
  },
  'accessoires-femme': {
    slug: 'accessoires-femme',
    seoTitle: 'Accessoires Mode Modeste | Bijoux, Épingles, Ceintures - Yelira',
    metaDescription: 'Complétez vos tenues avec nos accessoires mode modeste : épingles à hijab, bijoux, ceintures et coffrets cadeaux. Livraison gratuite dès 69€.',
    introTitle: 'Accessoires : les touches finales de votre look',
    introText: `<p>Les <strong>accessoires</strong> font toute la différence dans une tenue modeste. Chez Yelira, retrouvez des <strong>épingles à hijab</strong> élégantes, des <strong>broches</strong> décoratives, des <strong>bijoux</strong> raffinés, des <strong>ceintures</strong> tendance et des <strong>coffrets cadeaux</strong> parfaits pour offrir.</p>
<p>Chaque accessoire est sélectionné pour compléter harmonieusement vos abayas et hijabs. Des finitions soignées et des designs qui allient tradition et modernité.</p>`,
  },

  // ============================================================
  // MID-LEVEL CATEGORIES — HOMME
  // ============================================================
  'homme': {
    slug: 'homme',
    seoTitle: 'Vêtements Homme Musulman | Collection Homme - Yelira',
    metaDescription: 'Découvrez notre collection homme sur Yelira. Qamis, abayas homme et tenues de pèlerinage pour l\'homme musulman. Livraison gratuite dès 69€.',
    introTitle: 'La mode modeste au masculin',
    introText: `<p>Yelira propose également une sélection de <strong>vêtements pour homme</strong> musulman. Qamis classiques et modernes, abayas homme élégantes : retrouvez tout ce qu'il faut pour être élégant en toutes occasions.</p>
<p>Nos vêtements homme sont confectionnés dans des matières de qualité, disponibles dans toutes les tailles et dans un choix de couleurs variées. Du style sobre et traditionnel au look plus contemporain.</p>`,
  },
  'qamis': {
    slug: 'qamis',
    seoTitle: 'Qamis Homme | Collection Qamis Blanc & Couleur - Yelira',
    metaDescription: 'Découvrez notre collection de qamis pour homme sur Yelira. Qamis blanc saoudien, qamis moderne couleur. Matières premium et coupes soignées. Livraison gratuite dès 69€.',
    introTitle: 'Le qamis : la tenue traditionnelle de l\'homme musulman',
    introText: `<p>Le <strong>qamis</strong> (ou thobe) est la tenue traditionnelle de l'homme musulman. Cette longue tunique ample offre confort, pudeur et élégance au quotidien comme lors des occasions religieuses.</p>
<p>Chez Yelira, retrouvez des <strong>qamis blancs saoudiens</strong> classiques et des <strong>qamis modernes</strong> dans des couleurs variées. Confectionnés dans des matières nobles, nos qamis offrent un tombé impeccable et un confort toute la journée.</p>`,
  },
  'abaya-homme': {
    slug: 'abaya-homme',
    seoTitle: 'Abaya Homme | Collection Abayas Masculines - Yelira',
    metaDescription: 'Découvrez nos abayas homme sur Yelira. Abayas masculines noires et blanches, coupes sobres et élégantes. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya homme : sobriété et distinction',
    introText: `<p>L'<strong>abaya homme</strong> est une longue tunique ample portée par-dessus les vêtements, offrant une allure distinguée et une couverture respectueuse. Plus ample et drapée que le qamis, elle est prisée pour le quotidien et les occasions religieuses.</p>
<p>Notre collection d'abayas homme chez Yelira se décline en noir et blanc, dans des matières premium pour un tombé élégant. Un vêtement intemporel qui allie tradition et modernité.</p>`,
  },
  'omra-hajj-homme': {
    slug: 'omra-hajj-homme',
    seoTitle: 'Tenue Omra & Hajj Homme | Ihram & Pèlerinage - Yelira',
    metaDescription: 'Préparez votre Omra ou Hajj avec Yelira. Ihram et tenues de pèlerinage homme de qualité. Livraison gratuite dès 69€.',
    introTitle: 'Omra et Hajj homme : préparez votre pèlerinage',
    introText: `<p>Préparez votre <strong>pèlerinage</strong> avec des tenues conformes et de qualité. Notre collection homme pour l'<strong>Omra</strong> et le <strong>Hajj</strong> comprend l'indispensable <strong>ihram</strong> (ensemble deux pièces blanc) et des accessoires de pèlerinage.</p>
<p>Chaque pièce est confectionnée dans des matières confortables et résistantes, adaptées aux conditions du pèlerinage. Confort et conformité pour ce voyage spirituel essentiel.</p>`,
  },

  // ============================================================
  // MID-LEVEL CATEGORIES — ENFANT
  // ============================================================
  'fille': {
    slug: 'fille',
    seoTitle: 'Vêtements Fille Musulmane | Abaya, Prière, Burkini - Yelira',
    metaDescription: 'Collection fille Yelira : abayas fille, robes de prière, burkinis. Vêtements modestes et confortables pour les petites. Livraison gratuite dès 69€.',
    introTitle: 'Collection fille : la mode modeste pour les petites',
    introText: `<p>Offrez à votre <strong>fille</strong> des vêtements modestes adorables et confortables. Abayas fille dans des couleurs douces, robes de prière pratiques et burkinis pour la piscine et la plage : tout est pensé pour les plus jeunes.</p>
<p>Nos vêtements fille sont confectionnés dans des matières douces et résistantes, avec des coupes adaptées à la morphologie des enfants. Des modèles à l'image de leurs mamans pour des moments de complicité.</p>`,
  },
  'garcon': {
    slug: 'garcon',
    seoTitle: 'Vêtements Garçon Musulman | Qamis Enfant - Yelira',
    metaDescription: 'Collection garçon Yelira : qamis enfant dans toutes les tailles et couleurs. Vêtements modestes et confortables pour les petits. Livraison gratuite dès 69€.',
    introTitle: 'Collection garçon : la mode modeste pour les petits',
    introText: `<p>Habillez votre <strong>garçon</strong> avec élégance grâce à notre collection de vêtements modestes. Nos <strong>qamis enfant</strong> sont disponibles dans toutes les tailles et dans un choix de couleurs variées.</p>
<p>Confectionnés dans des matières confortables et faciles d'entretien, nos qamis garçon sont parfaits pour le quotidien, la prière du vendredi et les fêtes religieuses. Des coupes pensées pour la liberté de mouvement des enfants.</p>`,
  },
  'combo-mere-fille': {
    slug: 'combo-mere-fille',
    seoTitle: 'Combo Mère-Fille | Tenues Assorties - Yelira',
    metaDescription: 'Découvrez nos combos mère-fille Yelira. Abayas et tenues de prière assorties pour des moments de complicité. Livraison gratuite dès 69€.',
    introTitle: 'Combos mère-fille : la complicité en duo',
    introText: `<p>Partagez des moments de <strong>complicité</strong> avec votre fille grâce à nos ensembles assortis. Nos <strong>combos mère-fille</strong> proposent des abayas et tenues de prière dans les mêmes coloris et designs, en version adulte et enfant.</p>
<p>Un cadeau idéal ou un plaisir à s'offrir : créez des souvenirs précieux avec des tenues coordonnées qui feront craquer petites et grandes.</p>`,
  },

  // ============================================================
  // LEAF CATEGORIES — ABAYAS
  // ============================================================
  'abaya-dubai': {
    slug: 'abaya-dubai',
    seoTitle: 'Abaya Dubai | Collection Style Dubaïote - Yelira',
    metaDescription: 'Découvrez notre collection d\'abayas Dubai sur Yelira. Style émirati raffiné avec broderies, perles et détails luxueux. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya Dubai : l\'élégance émiratie',
    introText: `<p>L'<strong>abaya Dubai</strong> incarne le luxe et la sophistication de la mode émiratie. Connue pour ses finitions soignées, ses broderies délicates et ses détails précieux, elle est le reflet du style glamour des Émirats Arabes Unis.</p>
<p>Notre collection d'abayas Dubai chez Yelira propose des modèles ornés de <strong>broderies dorées</strong>, de perles, de strass et de dentelle. Chaque pièce est un savant mélange de tradition et de modernité, parfaite pour les femmes qui aiment se distinguer avec élégance.</p>
<p>Disponibles dans des matières nobles comme le crêpe, le satin et la mousseline, nos abayas Dubai conviennent aussi bien pour le quotidien que pour les occasions spéciales.</p>`,
  },
  'abaya-kimono': {
    slug: 'abaya-kimono',
    seoTitle: 'Abaya Kimono | Collection Style Kimono - Yelira',
    metaDescription: 'Découvrez nos abayas kimono sur Yelira. Style inspiré du kimono japonais, ouvert sur le devant. Look moderne et tendance. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya kimono : la fusion des cultures',
    introText: `<p>L'<strong>abaya kimono</strong> est une création moderne qui fusionne l'esthétique du kimono japonais avec la pudeur de l'abaya traditionnelle. Ouverte sur le devant et retenue par une ceinture, elle offre un look contemporain et sophistiqué.</p>
<p>Nos abayas kimono chez Yelira se portent comme une veste longue par-dessus vos tenues. Disponibles dans des imprimés variés et des couleurs tendance, elles apportent une touche de modernité à n'importe quelle tenue.</p>
<p>Facile à enfiler et à retirer, l'abaya kimono est le choix idéal pour les femmes actives qui veulent un vêtement pratique et stylé.</p>`,
  },
  'abaya-voile-integre': {
    slug: 'abaya-voile-integre',
    seoTitle: 'Abaya Voile Intégré | Abaya avec Hijab Intégré - Yelira',
    metaDescription: 'Découvrez nos abayas à voile intégré sur Yelira. Pratiques et élégantes, elles combinent abaya et hijab en une seule pièce. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya à voile intégré : la praticité au service de l\'élégance',
    introText: `<p>L'<strong>abaya à voile intégré</strong> est la solution idéale pour les femmes qui recherchent une tenue complète en une seule pièce. Le hijab est directement intégré à l'abaya, créant un ensemble harmonieux sans effort.</p>
<p>Chez Yelira, nos abayas à voile intégré sont confectionnées dans des matières fluides et confortables. Parfaites pour les sorties rapides, la prière ou le quotidien, elles éliminent le besoin d'épingles et de réglages.</p>`,
  },
  'abaya-papillon': {
    slug: 'abaya-papillon',
    seoTitle: 'Abaya Papillon | Collection Coupe Papillon - Yelira',
    metaDescription: 'Craquez pour nos abayas papillon sur Yelira. Coupe aérienne et fluide avec manches larges façon ailes de papillon. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya papillon : légèreté et grâce',
    introText: `<p>L'<strong>abaya papillon</strong> doit son nom à sa coupe distinctive qui rappelle les ailes d'un papillon. Avec ses manches extra-larges qui se fondent dans le corps de l'abaya, elle crée un mouvement aérien et gracieux à chaque pas.</p>
<p>Ce style d'abaya est particulièrement apprécié pour son allure unique et sa féminité. Chez Yelira, nos abayas papillon sont disponibles dans des tissus légers et fluides qui amplifient l'effet de mouvement : mousseline, médina silk et crêpe léger.</p>
<p>L'abaya papillon est idéale pour les occasions où vous souhaitez vous distinguer avec élégance, tout en bénéficiant d'une grande liberté de mouvement.</p>`,
  },
  'abaya-simple': {
    slug: 'abaya-simple',
    seoTitle: 'Abaya Simple | Abayas Classiques & Épurées - Yelira',
    metaDescription: 'Trouvez votre abaya simple et épurée sur Yelira. Coupes classiques, matières de qualité, confort quotidien. Idéale pour tous les jours. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya simple : l\'élégance de la sobriété',
    introText: `<p>L'<strong>abaya simple</strong> est le basique indispensable de toute garde-robe modeste. Sans fioritures ni ornements, elle mise sur la qualité du tissu, la perfection de la coupe et la justesse du tombé pour créer un vêtement intemporel.</p>
<p>Chez Yelira, nos abayas simples sont confectionnées dans des matières premium : nidha légère, crêpe fluide ou médina silk soyeuse. La simplicité du design met en valeur la qualité de la confection et la beauté naturelle du tissu.</p>
<p>Parfaite pour le quotidien, le travail ou la prière, l'abaya simple est la pièce que vous porterez le plus. Facile à assortir et à accessoiriser, elle se transforme selon vos envies.</p>`,
  },
  'abaya-luxe-soiree': {
    slug: 'abaya-luxe-soiree',
    seoTitle: 'Abaya Luxe & Soirée | Collection Prestige - Yelira',
    metaDescription: 'Découvrez nos abayas luxe et soirée sur Yelira. Matières nobles, broderies raffinées et finitions prestige pour vos événements. Livraison gratuite dès 69€.',
    introTitle: 'Abayas luxe et soirée : l\'exception au quotidien',
    introText: `<p>Nos <strong>abayas luxe et soirée</strong> sont des pièces d'exception conçues pour les événements marquants. Confectionnées dans des matières nobles — satin, soie, velours — et ornées de broderies, perles et cristaux, elles subliment chaque occasion.</p>
<p>Chez Yelira, chaque abaya de cette collection est une œuvre à part entière, alliant savoir-faire artisanal et design contemporain. Pour un mariage, une soirée ou une fête de l'Aïd inoubliable.</p>`,
  },
  'abaya-ouverte-zippee': {
    slug: 'abaya-ouverte-zippee',
    seoTitle: 'Abaya Ouverte & Zippée | Abayas Pratiques - Yelira',
    metaDescription: 'Découvrez nos abayas ouvertes et zippées sur Yelira. Fermeture éclair ou boutons pour un enfilage facile. Pratiques et élégantes. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya ouverte et zippée : praticité et style',
    introText: `<p>L'<strong>abaya ouverte et zippée</strong> allie praticité et élégance. Grâce à sa fermeture éclair ou ses boutons-pression, elle s'enfile et se retire en un instant, sans passer par la tête. Idéale pour les femmes actives.</p>
<p>Nos abayas ouvertes chez Yelira se déclinent dans des coupes modernes : style manteau, cape ou wrap. Un choix malin qui ne sacrifie ni le style ni la couverture.</p>`,
  },
  'abaya-allaitement': {
    slug: 'abaya-allaitement',
    seoTitle: 'Abaya Allaitement | Abayas Pratiques pour Mamans - Yelira',
    metaDescription: 'Découvrez nos abayas d\'allaitement sur Yelira. Ouvertures discrètes pour allaiter facilement. Confort et élégance pour les mamans. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya d\'allaitement : pensée pour les mamans',
    introText: `<p>L'<strong>abaya d'allaitement</strong> est spécialement conçue pour les mamans qui allaitent. Avec ses ouvertures discrètes sur le devant (zip caché, boutons-pression ou pans croisés), elle permet d'allaiter facilement et en toute pudeur.</p>
<p>Chez Yelira, nos abayas d'allaitement ne font aucun compromis sur le style. Des modèles élégants qui accompagnent les mamans au quotidien avec praticité et confort.</p>`,
  },
  'sous-abaya': {
    slug: 'sous-abaya',
    seoTitle: 'Sous-Abaya | Robes Intérieures - Yelira',
    metaDescription: 'Découvrez nos sous-abayas sur Yelira. Robes intérieures légères et confortables à porter sous votre abaya. Livraison gratuite dès 69€.',
    introTitle: 'La sous-abaya : le confort invisible',
    introText: `<p>La <strong>sous-abaya</strong> est une robe intérieure légère qui se porte sous l'abaya pour un confort optimal. Elle évite les frottements, absorbe la transpiration et assure une couverture supplémentaire sous les abayas légères.</p>
<p>Nos sous-abayas chez Yelira sont en coton ou en jersey extensible, sans coutures irritantes. Un basique invisible mais indispensable de la garde-robe modeste.</p>`,
  },
  'abaya-robe': {
    slug: 'abaya-robe',
    seoTitle: 'Abaya Robe | Robe Abaya Femme - Yelira',
    metaDescription: 'Découvrez nos abaya-robes sur Yelira. Coupe robe ajustée et féminine, parfaite pour le quotidien et les occasions. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya robe : la coupe féminine par excellence',
    introText: `<p>L'<strong>abaya robe</strong> est un modèle qui se rapproche de la coupe d'une robe classique tout en offrant la couverture et la pudeur d'une abaya. Avec sa taille légèrement marquée et son tomber fluide, elle dessine une silhouette féminine et élégante.</p>
<p>Nos abaya-robes chez Yelira se déclinent dans une variété de styles : coupe droite, coupe évasée, avec ceinture ou sans, manches longues classiques ou manches travaillées. Chaque modèle est pensé pour sublimer la silhouette tout en assurant un confort maximal.</p>
<p>Polyvalente et facile à porter, l'abaya robe s'adapte à toutes les occasions : quotidien, travail, sorties ou cérémonies.</p>`,
  },
  'abaya-brodee': {
    slug: 'abaya-brodee',
    seoTitle: 'Abaya Brodée | Collection Broderies Artisanales - Yelira',
    metaDescription: 'Explorez notre collection d\'abayas brodées sur Yelira. Broderies artisanales, dorées, florales et géométriques. Élégance et savoir-faire. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya brodée : l\'art du détail',
    introText: `<p>L'<strong>abaya brodée</strong> est le symbole d'un savoir-faire artisanal précieux. Ornée de motifs brodés — floraux, géométriques ou calligraphiques — elle transforme un vêtement simple en une pièce d'art à porter.</p>
<p>Chez Yelira, notre sélection d'abayas brodées comprend des modèles avec broderies dorées, argentées, ton sur ton ou contrastées. Réalisées à la main ou au fil d'or, ces broderies apportent une dimension luxueuse à votre tenue.</p>
<p>L'abaya brodée est parfaite pour les occasions spéciales : mariages, Aïd, soirées et cérémonies. Elle se porte également au quotidien dans des versions plus discrètes avec des broderies subtiles.</p>`,
  },
  'abaya-satin': {
    slug: 'abaya-satin',
    seoTitle: 'Abaya Satin | Collection Satin Luxueux - Yelira',
    metaDescription: 'Découvrez nos abayas en satin sur Yelira. Matière soyeuse et luxueuse, reflets élégants. Parfaites pour les occasions spéciales. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya satin : le luxe au quotidien',
    introText: `<p>L'<strong>abaya satin</strong> est synonyme de luxe et d'élégance. Sa matière soyeuse aux reflets subtils apporte une dimension chic et sophistiquée à votre tenue, que ce soit pour une occasion spéciale ou pour un quotidien raffiné.</p>
<p>Nos abayas en satin chez Yelira sont confectionnées dans des satins de qualité premium qui offrent un tomber fluide et un éclat délicat. Disponibles en noir, champagne, bordeaux, bleu nuit et autres coloris élégants.</p>
<p>Le satin est une matière polyvalente qui se prête autant aux abayas classiques qu'aux modèles plus contemporains. Portée avec un hijab assorti, l'abaya satin crée un ensemble harmonieux et raffiné.</p>`,
  },
  'abaya-noire': {
    slug: 'abaya-noire',
    seoTitle: 'Abaya Noire | Collection Abayas Noires - Yelira',
    metaDescription: 'Découvrez notre collection d\'abayas noires sur Yelira. Le classique indémodable de la mode modeste dans tous les styles et toutes les coupes. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya noire : le classique intemporel',
    introText: `<p>L'<strong>abaya noire</strong> est le pilier de la garde-robe modeste. Couleur classique par excellence, le noir apporte élégance, sophistication et polyvalence. C'est la couleur qui se porte en toutes saisons et pour toutes les occasions.</p>
<p>Notre collection d'abayas noires chez Yelira comprend tous les styles : abaya noire Dubai, papillon, kimono, brodée, simple, satin et plus encore. Chaque modèle est proposé dans des matières premium pour un rendu impeccable.</p>
<p>L'abaya noire est le choix idéal quand on ne sait pas quoi porter : elle va avec tout, s'adapte à toutes les situations et met en valeur n'importe quel hijab coloré.</p>`,
  },
  'abaya-beige': {
    slug: 'abaya-beige',
    seoTitle: 'Abaya Beige | Collection Abayas Beiges & Nude - Yelira',
    metaDescription: 'Craquez pour nos abayas beiges et nude sur Yelira. Teintes douces et chaleureuses pour un look raffiné et lumineux. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya beige : douceur et raffinement',
    introText: `<p>L'<strong>abaya beige</strong> est la tendance forte de la mode modeste actuelle. Cette teinte douce et chaleureuse apporte luminosité et sophistication à votre allure. Alternative élégante au noir, le beige s'adapte à toutes les saisons.</p>
<p>Chez Yelira, notre collection d'abayas beiges se décline dans toutes les nuances : sable, taupe, nude, champagne, camel. Chaque modèle est disponible dans différentes coupes et matières pour s'adapter à vos envies et à vos occasions.</p>
<p>L'abaya beige se marie à merveille avec un hijab blanc, crème ou dans les tons terre pour un look monochrome chic. Elle apporte de la lumière au visage et crée un ensemble doux et harmonieux.</p>`,
  },
  'abaya-blanche': {
    slug: 'abaya-blanche',
    seoTitle: 'Abaya Blanche | Collection Abayas Blanches - Yelira',
    metaDescription: 'Trouvez votre abaya blanche sur Yelira. Pureté et élégance, idéale pour le Hajj, l\'Omra ou les cérémonies. Large choix de modèles. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya blanche : pureté et luminosité',
    introText: `<p>L'<strong>abaya blanche</strong> symbolise la pureté et la lumière. Particulièrement appréciée pour le Hajj, l'Omra et les cérémonies religieuses, elle s'impose également comme un choix de mode estival raffiné et élégant.</p>
<p>Notre collection d'abayas blanches chez Yelira comprend des modèles pour toutes les occasions : abayas blanches simples pour le pèlerinage, modèles en satin pour les mariages, versions brodées pour les cérémonies et abayas en crêpe léger pour l'été.</p>
<p>Le blanc est une couleur qui demande une confection soignée. Nos abayas blanches sont doublées et confectionnées dans des tissus opaques pour garantir zéro transparence.</p>`,
  },

  // ============================================================
  // LEAF CATEGORIES — HIJABS
  // ============================================================
  'hijab-soie-de-medine': {
    slug: 'hijab-soie-de-medine',
    seoTitle: 'Hijab Soie de Médine | Collection Médina Silk - Yelira',
    metaDescription: 'Découvrez nos hijabs en soie de Médine sur Yelira. Tissu soyeux au tombé élégant, facile à draper. Large palette de couleurs. Livraison gratuite dès 69€.',
    introTitle: 'Le hijab soie de Médine : élégance et tenue parfaite',
    introText: `<p>Le <strong>hijab soie de Médine</strong> (ou médina silk) est l'un des hijabs les plus appréciés pour son tombé élégant et sa facilité de mise en place. Ce tissu légèrement texturé accroche naturellement sans glisser, tout en conservant un aspect soyeux.</p>
<p>Chez Yelira, nos hijabs soie de Médine sont disponibles dans plus de 30 coloris. Matière polyvalente par excellence, elle convient aussi bien au quotidien qu'aux occasions spéciales.</p>`,
  },
  'hijab-a-enfiler': {
    slug: 'hijab-a-enfiler',
    seoTitle: 'Hijab à Enfiler | Hijab Pratique Sans Épingles - Yelira',
    metaDescription: 'Découvrez nos hijabs à enfiler sur Yelira. Prêts à porter, sans épingles. Idéal pour les débutantes et les femmes pressées. Livraison gratuite dès 69€.',
    introTitle: 'Le hijab à enfiler : la praticité absolue',
    introText: `<p>Le <strong>hijab à enfiler</strong> est la solution la plus simple et rapide pour se couvrir. Pré-formé et prêt à porter, il s'enfile en quelques secondes sans besoin d'épingles ni de bonnet. Parfait pour les débutantes et les femmes pressées.</p>
<p>Nos hijabs à enfiler chez Yelira sont disponibles en jersey extensible ou en mousseline. Des modèles avec ou sans volant, dans un large choix de couleurs pour varier les plaisirs.</p>`,
  },
  'hijab-mousseline': {
    slug: 'hijab-mousseline',
    seoTitle: 'Hijab Mousseline | Collection Chiffon Léger - Yelira',
    metaDescription: 'Découvrez nos hijabs en mousseline sur Yelira. Tissu léger et aérien au rendu très élégant. Idéal pour les occasions. Livraison gratuite dès 69€.',
    introTitle: 'Le hijab mousseline : légèreté et élégance',
    introText: `<p>Le <strong>hijab mousseline</strong> (chiffon) est un voile ultra-léger qui apporte un rendu aérien et élégant. Légèrement transparent, il se superpose magnifiquement et crée du volume sans lourdeur.</p>
<p>Chez Yelira, nos hijabs mousseline sont proposés dans des couleurs délicates et des imprimés raffinés. Idéal pour les occasions spéciales, il se porte avec un bonnet en dessous pour une opacité parfaite.</p>`,
  },
  'hijab-jersey': {
    slug: 'hijab-jersey',
    seoTitle: 'Hijab Jersey | Hijab Extensible et Confortable - Yelira',
    metaDescription: 'Découvrez nos hijabs jersey sur Yelira. Matière extensible, douce et facile à nouer. Le hijab du quotidien par excellence. Livraison gratuite dès 69€.',
    introTitle: 'Le hijab jersey : le confort au quotidien',
    introText: `<p>Le <strong>hijab jersey</strong> est le chouchou des femmes qui cherchent la facilité au quotidien. Sa matière extensible épouse la forme de la tête sans glisser, ne nécessite aucune épingle et offre un confort inégalé.</p>
<p>Chez Yelira, nos hijabs jersey sont en coton premium doux et respirant. Disponibles dans toute la palette de couleurs, ils sont le basique indispensable de votre collection de hijabs.</p>`,
  },
  'hijab-satin-soiree': {
    slug: 'hijab-satin-soiree',
    seoTitle: 'Hijab Satin & Soirée | Hijab Luxe - Yelira',
    metaDescription: 'Découvrez nos hijabs satin et soirée sur Yelira. Matière brillante et luxueuse pour vos occasions spéciales. Livraison gratuite dès 69€.',
    introTitle: 'Le hijab satin : l\'éclat des grandes occasions',
    introText: `<p>Le <strong>hijab satin</strong> est le choix par excellence pour les occasions spéciales. Son éclat subtil et sa matière soyeuse apportent une dimension luxueuse à votre tenue de soirée, mariage ou fête.</p>
<p>Chez Yelira, nos hijabs satin sont disponibles en satin mat ou brillant, dans des coloris nobles : noir, champagne, bordeaux, bleu nuit, vert émeraude. Se porte avec un bonnet antidérapant pour une tenue parfaite.</p>`,
  },
  'chales-maxi-hijab': {
    slug: 'chales-maxi-hijab',
    seoTitle: 'Châles & Maxi Hijab | Grands Voiles - Yelira',
    metaDescription: 'Découvrez nos châles et maxi hijabs sur Yelira. Grands formats pour un drapage généreux et couvrant. Livraison gratuite dès 69€.',
    introTitle: 'Châles et maxi hijab : la couverture généreuse',
    introText: `<p>Les <strong>châles et maxi hijabs</strong> offrent une couverture plus ample grâce à leur grand format. Parfaits pour les femmes qui souhaitent draper généreusement leur voile et couvrir les épaules et la poitrine.</p>
<p>Nos châles chez Yelira se déclinent en coton, pashmina et mousseline. Des pièces polyvalentes qui se portent aussi bien en hijab classique qu'en accessoire de mode drapé sur les épaules.</p>`,
  },
  'bonnets-sous-hijab': {
    slug: 'bonnets-sous-hijab',
    seoTitle: 'Bonnet Sous-Hijab | Sous-Hijab & Cagoules - Yelira',
    metaDescription: 'Découvrez nos bonnets et sous-hijabs sur Yelira. Bonnets coton, tubes et cagoules pour maintenir votre hijab. Livraison gratuite dès 69€.',
    introTitle: 'Bonnets sous-hijab : la base invisible',
    introText: `<p>Le <strong>bonnet sous-hijab</strong> est l'accessoire invisible mais indispensable de la femme voilée. Il maintient le hijab en place, protège les cheveux et absorbe la transpiration pour un confort optimal toute la journée.</p>
<p>Chez Yelira, retrouvez des bonnets tube, des cagoules et des bonnets classiques en coton doux et respirant. Des basiques à avoir en plusieurs exemplaires dans votre tiroir.</p>`,
  },

  // ============================================================
  // LEAF CATEGORIES — JILBABS
  // ============================================================
  'jilbab-2-pieces': {
    slug: 'jilbab-2-pieces',
    seoTitle: 'Jilbab 2 Pièces | Cape + Jupe - Yelira',
    metaDescription: 'Découvrez nos jilbabs 2 pièces sur Yelira. Ensemble cape et jupe pour une couverture complète et modulable. Livraison gratuite dès 69€.',
    introTitle: 'Le jilbab 2 pièces : modulable et élégant',
    introText: `<p>Le <strong>jilbab 2 pièces</strong> est composé d'une cape (khimar) qui couvre la tête et le haut du corps, et d'une jupe longue. Ce format modulable permet de varier les combinaisons et les couleurs.</p>
<p>Chez Yelira, nos jilbabs 2 pièces sont disponibles en nidha, crêpe et microfibre. Des ensembles assortis ou dépareillés selon vos envies, pour un look cohérent et couvrant.</p>`,
  },
  'jilbab-1-piece': {
    slug: 'jilbab-1-piece',
    seoTitle: 'Jilbab 1 Pièce | Jilbab Intégral - Yelira',
    metaDescription: 'Découvrez nos jilbabs 1 pièce sur Yelira. Tenue intégrale pratique qui s\'enfile en un geste. Couverture complète. Livraison gratuite dès 69€.',
    introTitle: 'Le jilbab 1 pièce : la simplicité absolue',
    introText: `<p>Le <strong>jilbab 1 pièce</strong> est la tenue la plus pratique pour une couverture intégrale. Vêtement d'un seul tenant qui couvre de la tête aux pieds, il s'enfile en un instant et ne nécessite aucun ajustement.</p>
<p>Nos jilbabs 1 pièce chez Yelira sont confectionnés dans des matières légères et fluides. Idéaux pour la prière et le quotidien, ils offrent un confort et une liberté de mouvement optimaux.</p>`,
  },
  'jilbab-sarouel': {
    slug: 'jilbab-sarouel',
    seoTitle: 'Jilbab Sarouel | Jilbab Pantalon Large - Yelira',
    metaDescription: 'Découvrez nos jilbabs sarouel sur Yelira. Ensemble cape et sarouel pour un look décontracté et couvrant. Livraison gratuite dès 69€.',
    introTitle: 'Le jilbab sarouel : confort et liberté de mouvement',
    introText: `<p>Le <strong>jilbab sarouel</strong> remplace la jupe traditionnelle par un sarouel (pantalon large) pour plus de liberté de mouvement. Idéal pour les femmes actives, il allie couverture complète et confort au quotidien.</p>
<p>Chez Yelira, nos jilbabs sarouel se composent d'une cape et d'un sarouel assorti. Parfaits pour marcher, jouer avec les enfants ou voyager en toute aisance.</p>`,
  },

  // ============================================================
  // LEAF CATEGORIES — KHIMARS
  // ============================================================
  'khimar-court': {
    slug: 'khimar-court',
    seoTitle: 'Khimar Court | Voile Court Couvrant - Yelira',
    metaDescription: 'Découvrez nos khimars courts sur Yelira. Voile couvrant tête et épaules, pratique au quotidien. Livraison gratuite dès 69€.',
    introTitle: 'Le khimar court : discret et pratique',
    introText: `<p>Le <strong>khimar court</strong> couvre la tête, le cou et les épaules, s'arrêtant au-dessus de la taille. Plus couvrant qu'un hijab classique mais plus léger qu'un khimar long, il offre un juste milieu idéal pour le quotidien.</p>
<p>Chez Yelira, nos khimars courts sont disponibles dans des matières légères et faciles d'entretien. Pratiques à enfiler, ils se portent par-dessus n'importe quelle tenue modeste.</p>`,
  },
  'khimar-long': {
    slug: 'khimar-long',
    seoTitle: 'Khimar Long | Grand Voile Couvrant - Yelira',
    metaDescription: 'Découvrez nos khimars longs sur Yelira. Voile ample qui descend sous la taille pour une couverture maximale. Livraison gratuite dès 69€.',
    introTitle: 'Le khimar long : la couverture maximale',
    introText: `<p>Le <strong>khimar long</strong> offre une couverture généreuse qui descend sous la taille, couvrant la tête, les épaules, la poitrine et une partie du dos. C'est le choix des femmes qui recherchent une pudeur maximale.</p>
<p>Nos khimars longs chez Yelira sont confectionnés dans des matières fluides qui tombent avec grâce. Associé à une jupe ou un sarouel, il compose un ensemble complet et harmonieux.</p>`,
  },
  'khimar-soie-de-medine': {
    slug: 'khimar-soie-de-medine',
    seoTitle: 'Khimar Soie de Médine | Khimar Médina Silk - Yelira',
    metaDescription: 'Découvrez nos khimars en soie de Médine sur Yelira. Matière soyeuse au tombé impeccable. Livraison gratuite dès 69€.',
    introTitle: 'Le khimar soie de Médine : tombé soyeux',
    introText: `<p>Le <strong>khimar en soie de Médine</strong> combine la couverture ample du khimar avec la matière la plus élégante du voile. Le médina silk offre un tombé fluide, une légère brillance et une excellente tenue tout au long de la journée.</p>
<p>Chez Yelira, nos khimars soie de Médine sont proposés dans un large choix de couleurs. Un choix raffiné pour les femmes qui veulent allier couverture et élégance.</p>`,
  },
  'khimar-jazz-mousseline': {
    slug: 'khimar-jazz-mousseline',
    seoTitle: 'Khimar Jazz & Mousseline | Voile Léger - Yelira',
    metaDescription: 'Découvrez nos khimars jazz et mousseline sur Yelira. Matières ultra-légères et aériennes pour les saisons chaudes. Livraison gratuite dès 69€.',
    introTitle: 'Le khimar jazz et mousseline : légèreté aérienne',
    introText: `<p>Le <strong>khimar en jazz ou mousseline</strong> est parfait pour les saisons chaudes. Ces matières ultra-légères offrent une sensation de fraîcheur tout en maintenant une couverture ample et couvrant la poitrine.</p>
<p>Chez Yelira, nos khimars légers sont disponibles en version simple ou à volants. Une option confortable pour l'été qui ne sacrifie ni la pudeur ni l'élégance.</p>`,
  },

  // ============================================================
  // LEAF CATEGORIES — TENUES DE PRIÈRE
  // ============================================================
  'robe-priere-hijab-integre': {
    slug: 'robe-priere-hijab-integre',
    seoTitle: 'Robe de Prière Hijab Intégré | Prête à Prier - Yelira',
    metaDescription: 'Découvrez nos robes de prière avec hijab intégré sur Yelira. S\'enfilent en secondes, couverture complète. Livraison gratuite dès 69€.',
    introTitle: 'La robe de prière à hijab intégré : prête en un instant',
    introText: `<p>La <strong>robe de prière à hijab intégré</strong> est la tenue la plus pratique pour prier. En un seul geste, vous êtes couverte de la tête aux pieds. Le hijab est directement cousu à la robe, éliminant tout besoin d'épingles ou de réglages.</p>
<p>Chez Yelira, nos robes de prière sont en matières douces et respirantes, disponibles dans des couleurs sobres et apaisantes. Un indispensable à la maison comme en voyage.</p>`,
  },
  'ensemble-de-priere': {
    slug: 'ensemble-de-priere',
    seoTitle: 'Ensemble de Prière | Set 2 Pièces Prière - Yelira',
    metaDescription: 'Découvrez nos ensembles de prière sur Yelira. Sets 2 pièces (voile + jupe) pour la prière quotidienne. Livraison gratuite dès 69€.',
    introTitle: 'L\'ensemble de prière : le set complet',
    introText: `<p>L'<strong>ensemble de prière</strong> est un set 2 pièces composé d'un voile couvrant et d'une jupe longue, offrant une couverture complète pour la salat. Pratique et modulable, il s'adapte à toutes les morphologies.</p>
<p>Nos ensembles de prière chez Yelira sont confectionnés dans des matières légères et confortables. Se plient facilement pour être emportés partout. Disponibles en plusieurs couleurs.</p>`,
  },
  'jilbab-de-priere': {
    slug: 'jilbab-de-priere',
    seoTitle: 'Jilbab de Prière | Jilbab Spécial Salat - Yelira',
    metaDescription: 'Découvrez nos jilbabs de prière sur Yelira. Conçus pour le confort pendant la prière, amples et légers. Livraison gratuite dès 69€.',
    introTitle: 'Le jilbab de prière : le confort de la dévotion',
    introText: `<p>Le <strong>jilbab de prière</strong> est un vêtement d'un seul tenant spécialement conçu pour la salat. Ample et léger, il permet de réaliser tous les mouvements de la prière (ruku, sujud) sans gêne.</p>
<p>Nos jilbabs de prière chez Yelira sont en tissu léger et respirant, faciles à enfiler et à plier. Un compagnon fidèle pour vos cinq prières quotidiennes.</p>`,
  },
  'tapis-de-priere': {
    slug: 'tapis-de-priere',
    seoTitle: 'Tapis de Prière | Sajjada Élégant - Yelira',
    metaDescription: 'Découvrez nos tapis de prière sur Yelira. Designs élégants, matières douces et formats voyage. Livraison gratuite dès 69€.',
    introTitle: 'Le tapis de prière : votre espace de sérénité',
    introText: `<p>Le <strong>tapis de prière</strong> (sajjada) est un accessoire essentiel de la prière. Chez Yelira, nous proposons des tapis de prière alliant esthétique et qualité : designs raffinés, matières douces et moelleuses, formats classiques et voyage.</p>
<p>Nos tapis de prière sont pensés pour le confort des genoux et du front pendant la prosternation. Des modèles qui embellissent votre espace de recueillement.</p>`,
  },

  // ============================================================
  // LEAF CATEGORIES — MARIAGE & OCCASIONS
  // ============================================================
  'abaya-mariage': {
    slug: 'abaya-mariage',
    seoTitle: 'Abaya Mariage | Abaya de Mariée Modeste - Yelira',
    metaDescription: 'Découvrez nos abayas de mariage sur Yelira. Modèles raffinés en satin, avec broderies et perles. Pour la mariée et les invitées. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya de mariage : le jour J en toute pudeur',
    introText: `<p>L'<strong>abaya de mariage</strong> est la pièce maîtresse du plus beau jour de votre vie. Confectionnée dans des matières nobles — satin, soie, organza — et ornée de broderies, perles ou cristaux, elle allie pudeur islamique et raffinement.</p>
<p>Chez Yelira, retrouvez des abayas de mariage pour la mariée (blanc, ivoire, champagne) et pour les invitées (couleurs élégantes). Des pièces d'exception pour un jour inoubliable.</p>`,
  },
  'tenue-aid-ramadan': {
    slug: 'tenue-aid-ramadan',
    seoTitle: 'Tenue Aïd & Ramadan | Collection Fêtes Religieuses - Yelira',
    metaDescription: 'Découvrez nos tenues pour l\'Aïd et le Ramadan sur Yelira. Abayas et ensembles festifs pour célébrer avec élégance. Livraison gratuite dès 69€.',
    introTitle: 'Tenues d\'Aïd et Ramadan : célébrez avec style',
    introText: `<p>L'<strong>Aïd el-Fitr</strong> et l'<strong>Aïd el-Adha</strong> sont des moments de fête qui appellent des tenues spéciales. Chez Yelira, découvrez notre sélection de tenues festives : abayas ornées, ensembles élégants et tenues colorées pour marquer ces jours bénis.</p>
<p>Du Ramadan à l'Aïd, nos collections vous accompagnent avec des pièces qui allient tradition, élégance et esprit festif. Des tenues que vous garderez précieusement d'une fête à l'autre.</p>`,
  },
  'abaya-soiree-fete': {
    slug: 'abaya-soiree-fete',
    seoTitle: 'Abaya Soirée & Fête | Abayas Habillées - Yelira',
    metaDescription: 'Découvrez nos abayas de soirée et fête sur Yelira. Modèles élégants en satin, velours et broderies pour vos événements. Livraison gratuite dès 69€.',
    introTitle: 'Abayas de soirée : brillez avec pudeur',
    introText: `<p>Nos <strong>abayas de soirée</strong> sont conçues pour les femmes qui veulent briller lors des événements tout en respectant leur pudeur. Satin, velours, broderies et détails précieux composent ces pièces d'exception.</p>
<p>Chez Yelira, retrouvez des modèles pour toutes les occasions : mariages, soirées, galas, henna et fêtes de famille. Des tenues qui marquent les esprits par leur élégance.</p>`,
  },
  'caftan-djellaba': {
    slug: 'caftan-djellaba',
    seoTitle: 'Caftan & Djellaba Femme | Collection Traditionnelle - Yelira',
    metaDescription: 'Découvrez nos caftans et djellabas femme sur Yelira. Tenues traditionnelles revisitées avec modernité. Livraison gratuite dès 69€.',
    introTitle: 'Caftans et djellabas : la tradition revisitée',
    introText: `<p>Le <strong>caftan</strong> et la <strong>djellaba</strong> sont des pièces emblématiques de la mode traditionnelle maghrébine. Chez Yelira, nous proposons des versions modernes de ces classiques, alliant savoir-faire artisanal et design contemporain.</p>
<p>Broderies sfifa, passementeries, galons dorés : nos caftans et djellabas sont des pièces d'art à porter pour les occasions spéciales et les fêtes de famille.</p>`,
  },

  // ============================================================
  // LEAF CATEGORIES — PRÊT-À-PORTER
  // ============================================================
  'robes-longues': {
    slug: 'robes-longues',
    seoTitle: 'Robes Longues Modestes | Collection Robes - Yelira',
    metaDescription: 'Découvrez nos robes longues modestes sur Yelira. Coupes couvrantes et élégantes pour le quotidien et les occasions. Livraison gratuite dès 69€.',
    introTitle: 'Robes longues : l\'élégance modeste au quotidien',
    introText: `<p>Nos <strong>robes longues modestes</strong> allient couverture, confort et style pour toutes les occasions. Coupes amples ou légèrement cintrées, manches longues, longueur cheville : chaque robe respecte les codes de la pudeur tout en étant résolument tendance.</p>
<p>Chez Yelira, retrouvez des robes longues pour le quotidien, le travail et les sorties. Des matières fluides et des couleurs actuelles pour un look impeccable.</p>`,
  },
  'ensembles-combinaisons': {
    slug: 'ensembles-combinaisons',
    seoTitle: 'Ensembles & Combinaisons Modestes | Prêt-à-Porter - Yelira',
    metaDescription: 'Découvrez nos ensembles et combinaisons modestes sur Yelira. Looks coordonnés et pratiques. Livraison gratuite dès 69€.',
    introTitle: 'Ensembles et combinaisons : le look coordonné',
    introText: `<p>Nos <strong>ensembles et combinaisons modestes</strong> vous simplifient la vie : haut et bas assortis pour un look coordonné sans effort. Pantalon palazzo et tunique, jupe et blouse, ou combinaison longue tout-en-un.</p>
<p>Chez Yelira, chaque ensemble est pensé pour être porté tel quel ou mixé avec d'autres pièces de votre garde-robe. Des tenues complètes et pratiques pour le quotidien.</p>`,
  },
  'tuniques-chemises': {
    slug: 'tuniques-chemises',
    seoTitle: 'Tuniques & Chemises Longues Modestes - Yelira',
    metaDescription: 'Découvrez nos tuniques et chemises longues modestes sur Yelira. Couvrantes et tendance, à porter avec pantalon ou jupe. Livraison gratuite dès 69€.',
    introTitle: 'Tuniques et chemises : la polyvalence modeste',
    introText: `<p>Nos <strong>tuniques et chemises longues</strong> sont les pièces essentielles du prêt-à-porter modeste. Assez longues pour couvrir les hanches et les fesses, elles se portent avec un pantalon large, un legging ou une jupe longue.</p>
<p>Chez Yelira, retrouvez des tuniques casual, des chemises oversize et des blouses élégantes. Des basiques qui s'intègrent facilement dans votre garde-robe quotidienne.</p>`,
  },
  'jupes-longues': {
    slug: 'jupes-longues',
    seoTitle: 'Jupes Longues Modestes | Collection Jupes - Yelira',
    metaDescription: 'Découvrez nos jupes longues modestes sur Yelira. Jupes plissées, droites et évasées en longueur cheville. Livraison gratuite dès 69€.',
    introTitle: 'Jupes longues : la féminité modeste',
    introText: `<p>La <strong>jupe longue</strong> est une pièce incontournable de la mode modeste. Portée avec une tunique, un khimar ou une blouse longue, elle compose des tenues couvrantes et féminines.</p>
<p>Chez Yelira, nos jupes longues se déclinent en plusieurs coupes : plissée, droite, évasée, portefeuille. Des matières fluides et des couleurs variées pour tous les styles.</p>`,
  },
  'pantalons-palazzo': {
    slug: 'pantalons-palazzo',
    seoTitle: 'Pantalons Palazzo Modestes | Pantalons Larges - Yelira',
    metaDescription: 'Découvrez nos pantalons palazzo sur Yelira. Coupes extra-larges et fluides, confortables et couvrants. Livraison gratuite dès 69€.',
    introTitle: 'Pantalons palazzo : la fluidité moderne',
    introText: `<p>Le <strong>pantalon palazzo</strong> est le pantalon modeste par excellence grâce à sa coupe extra-large et fluide. Ample comme une jupe mais avec la praticité d'un pantalon, il offre une couverture impeccable et un confort absolu.</p>
<p>Chez Yelira, nos pantalons palazzo se portent avec une tunique longue ou sous un khimar pour un look modeste complet. Taille élastique et matières fluides pour un confort toute la journée.</p>`,
  },
  'manteaux-vestes': {
    slug: 'manteaux-vestes',
    seoTitle: 'Manteaux & Vestes Modestes | Collection Hiver - Yelira',
    metaDescription: 'Découvrez nos manteaux et vestes modestes sur Yelira. Coupes longues et couvrantes pour l\'hiver. Livraison gratuite dès 69€.',
    introTitle: 'Manteaux et vestes : la pudeur en hiver',
    introText: `<p>Restez au chaud sans compromettre votre pudeur avec nos <strong>manteaux et vestes longs</strong>. Coupes couvrantes qui descendent sous le genou, cols montants, manches longues : tout est pensé pour la mode modeste hivernale.</p>
<p>Chez Yelira, retrouvez des manteaux élégants, des vestes matelassées et des trenchs longs dans des matières chaudes et de qualité. Des pièces qui complètent parfaitement vos tenues d'hiver.</p>`,
  },

  // ============================================================
  // LEAF CATEGORIES — BURKINI
  // ============================================================
  'burkini-femme': {
    slug: 'burkini-femme',
    seoTitle: 'Burkini Femme | Maillot de Bain Couvrant - Yelira',
    metaDescription: 'Découvrez nos burkinis pour femme sur Yelira. Maillots de bain modestes et couvrants. Séchage rapide et résistant au chlore. Livraison gratuite dès 69€.',
    introTitle: 'Burkini femme : profitez de l\'eau en toute sérénité',
    introText: `<p>Le <strong>burkini femme</strong> vous permet de profiter de la plage et de la piscine en respectant votre pudeur. Composé d'un haut à manches longues, d'un pantalon et d'un bonnet intégré, il offre une couverture complète et un confort aquatique.</p>
<p>Nos burkinis chez Yelira sont en tissu technique : séchage ultra-rapide, résistance au chlore, protection UV 50+. Des designs tendance qui n'ont rien à envier aux maillots classiques.</p>`,
  },
  'hijab-de-bain': {
    slug: 'hijab-de-bain',
    seoTitle: 'Hijab de Bain | Bonnet de Bain Modeste - Yelira',
    metaDescription: 'Découvrez nos hijabs de bain sur Yelira. Bonnets et voiles aquatiques à séchage rapide. Livraison gratuite dès 69€.',
    introTitle: 'Le hijab de bain : la couverture aquatique',
    introText: `<p>Le <strong>hijab de bain</strong> est conçu spécialement pour les activités aquatiques. En tissu technique à séchage rapide, il couvre la tête et le cou tout en résistant au chlore et au sel de mer.</p>
<p>Chez Yelira, nos hijabs de bain se portent seuls ou avec un burkini pour une couverture complète. Légers, confortables et disponibles en plusieurs coloris.</p>`,
  },
  'jilbab-de-bain': {
    slug: 'jilbab-de-bain',
    seoTitle: 'Jilbab de Bain | Maillot Intégral Modeste - Yelira',
    metaDescription: 'Découvrez nos jilbabs de bain sur Yelira. Couverture intégrale pour la plage et la piscine. Séchage rapide. Livraison gratuite dès 69€.',
    introTitle: 'Le jilbab de bain : la couverture intégrale aquatique',
    introText: `<p>Le <strong>jilbab de bain</strong> offre la couverture la plus complète pour les activités aquatiques. Similaire au burkini mais avec une coupe plus ample inspirée du jilbab, il couvre intégralement le corps de la tête aux pieds.</p>
<p>Chez Yelira, nos jilbabs de bain sont en tissu technique léger et à séchage rapide. Idéal pour les femmes qui souhaitent une pudeur maximale à la plage et à la piscine.</p>`,
  },

  // ============================================================
  // LEAF CATEGORIES — OMRA & HAJJ FEMME
  // ============================================================
  'abaya-omra': {
    slug: 'abaya-omra',
    seoTitle: 'Abaya Omra | Abaya Blanche Pèlerinage - Yelira',
    metaDescription: 'Découvrez nos abayas pour l\'Omra sur Yelira. Abayas blanches et sobres pour le pèlerinage. Matières respirantes. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya Omra : sobre et spirituelle',
    introText: `<p>L'<strong>abaya Omra</strong> est spécialement conçue pour le pèlerinage à La Mecque. Sobre, ample et en matière respirante, elle permet de prier et de se déplacer confortablement pendant les longues heures de dévotion.</p>
<p>Chez Yelira, nos abayas Omra sont disponibles en blanc et en couleurs neutres, dans des tissus légers qui conviennent au climat de l'Arabie Saoudite. Des pièces dignes de ce voyage spirituel.</p>`,
  },
  'tenue-blanche-hajj': {
    slug: 'tenue-blanche-hajj',
    seoTitle: 'Tenue Blanche Hajj Femme | Vêtements Pèlerinage - Yelira',
    metaDescription: 'Préparez votre Hajj avec nos tenues blanches pour femme sur Yelira. Matières confortables et respirantes. Livraison gratuite dès 69€.',
    introTitle: 'Tenues blanches pour le Hajj : pureté et dévotion',
    introText: `<p>La <strong>tenue blanche du Hajj</strong> symbolise la pureté et l'égalité devant Allah. Chez Yelira, nous proposons des tenues blanches spécialement pensées pour le pèlerinage : abayas, ensembles et jilbabs en blanc immaculé.</p>
<p>Matières respirantes, coupes amples et confortables : chaque pièce est conçue pour accompagner les pèlerines dans les meilleures conditions pendant ce voyage sacré.</p>`,
  },
  'ensemble-priere-voyage': {
    slug: 'ensemble-priere-voyage',
    seoTitle: 'Ensemble Prière Voyage | Set Compact Prière - Yelira',
    metaDescription: 'Découvrez nos ensembles de prière voyage sur Yelira. Sets compacts et légers à emporter partout. Livraison gratuite dès 69€.',
    introTitle: 'Ensemble prière voyage : priez partout',
    introText: `<p>L'<strong>ensemble prière voyage</strong> est un set compact qui vous permet de prier en toute pudeur où que vous soyez. Léger et facile à plier, il se glisse dans un sac à main ou une valise.</p>
<p>Chez Yelira, nos ensembles voyage comprennent une tenue de prière et parfois un tapis de prière pliable. L'indispensable de la femme musulmane en déplacement.</p>`,
  },

  // ============================================================
  // LEAF CATEGORIES — GRANDE TAILLE
  // ============================================================
  'abaya-grande-taille': {
    slug: 'abaya-grande-taille',
    seoTitle: 'Abaya Grande Taille | Abayas XL à 5XL - Yelira',
    metaDescription: 'Découvrez nos abayas grande taille sur Yelira. Du XL au 5XL, coupes adaptées pour un tombé impeccable. Livraison gratuite dès 69€.',
    introTitle: 'Abayas grande taille : l\'élégance pour toutes',
    introText: `<p>Nos <strong>abayas grande taille</strong> sont conçues avec des patrons spécifiques pour les morphologies généreuses. Du XL au 5XL, chaque modèle offre un tombé impeccable grâce à des emmanchures repensées et une aisance calculée.</p>
<p>Chez Yelira, la mode modeste est inclusive. Retrouvez tous les styles d'abayas en grande taille : Dubai, papillon, kimono, simple et plus encore.</p>`,
  },
  'abaya-1m80': {
    slug: 'abaya-1m80',
    seoTitle: 'Abaya 1m80+ | Abayas Longues pour Grandes - Yelira',
    metaDescription: 'Découvrez nos abayas spéciales 1m80 et plus sur Yelira. Longueurs adaptées pour les femmes grandes. Livraison gratuite dès 69€.',
    introTitle: 'Abayas 1m80+ : des longueurs à votre mesure',
    introText: `<p>Les femmes de <strong>grande taille (1m80 et plus)</strong> méritent des abayas qui arrivent à la bonne longueur. Nos modèles spéciaux proposent des longueurs adaptées pour que l'abaya tombe au niveau des chevilles, comme il se doit.</p>
<p>Chez Yelira, nos abayas longues sont disponibles dans les mêmes styles et matières que notre collection standard. Plus besoin de faire des retouches, on a pensé à vous.</p>`,
  },
  'jilbab-grande-taille': {
    slug: 'jilbab-grande-taille',
    seoTitle: 'Jilbab Grande Taille | Jilbabs XL à 5XL - Yelira',
    metaDescription: 'Découvrez nos jilbabs grande taille sur Yelira. Coupes amples adaptées aux morphologies généreuses. Livraison gratuite dès 69€.',
    introTitle: 'Jilbabs grande taille : la couverture pour toutes',
    introText: `<p>Nos <strong>jilbabs grande taille</strong> offrent une couverture intégrale avec des coupes adaptées aux morphologies généreuses. Cape plus ample, jupe plus large : chaque détail est pensé pour un port confortable et élégant.</p>
<p>Chez Yelira, retrouvez des jilbabs 1 pièce et 2 pièces en grande taille, dans des matières fluides qui tombent avec grâce. La pudeur et l'élégance sans limite de taille.</p>`,
  },

  // ============================================================
  // LEAF CATEGORIES — ACCESSOIRES
  // ============================================================
  'box-cadeaux': {
    slug: 'box-cadeaux',
    seoTitle: 'Box Cadeaux | Coffrets Mode Modeste - Yelira',
    metaDescription: 'Offrez un coffret cadeau Yelira. Box composées de hijabs, accessoires et produits. Le cadeau idéal. Livraison gratuite dès 69€.',
    introTitle: 'Box cadeaux : le plaisir d\'offrir',
    introText: `<p>Nos <strong>box cadeaux</strong> Yelira sont des coffrets soigneusement composés pour faire plaisir à coup sûr. Hijabs, accessoires, produits de soin : chaque box est un ensemble harmonieux prêt à offrir.</p>
<p>Idéales pour les anniversaires, l'Aïd, le Ramadan ou toute occasion spéciale. Un emballage soigné pour un effet cadeau garanti.</p>`,
  },
  'epingles-broches-hijab': {
    slug: 'epingles-broches-hijab',
    seoTitle: 'Épingles & Broches Hijab | Accessoires Voile - Yelira',
    metaDescription: 'Découvrez nos épingles et broches à hijab sur Yelira. Épingles de sûreté, magnétiques et décoratives. Livraison gratuite dès 69€.',
    introTitle: 'Épingles et broches : maintenez votre hijab avec style',
    introText: `<p>Les <strong>épingles et broches à hijab</strong> sont des accessoires essentiels pour maintenir votre voile en place avec élégance. Chez Yelira, retrouvez des épingles de sûreté classiques, des aimants à hijab discrets et des broches décoratives.</p>
<p>Des accessoires petits mais indispensables qui font toute la différence dans la tenue de votre hijab. Disponibles en lots et en coloris assortis.</p>`,
  },
  'bijoux': {
    slug: 'bijoux',
    seoTitle: 'Bijoux Modestes | Colliers, Bracelets, Bagues - Yelira',
    metaDescription: 'Découvrez nos bijoux sur Yelira. Colliers, bracelets et bagues élégants pour compléter vos tenues modestes. Livraison gratuite dès 69€.',
    introTitle: 'Bijoux : sublimez vos tenues modestes',
    introText: `<p>Nos <strong>bijoux</strong> sont sélectionnés pour compléter harmonieusement vos tenues modestes. Colliers délicats, bracelets fins, bagues élégantes : des pièces raffinées qui ajoutent une touche de lumière à votre look.</p>
<p>Chez Yelira, retrouvez des bijoux en acier inoxydable et plaqué or, résistants et durables. Des designs qui allient modernité et sobriété.</p>`,
  },
  'ceintures': {
    slug: 'ceintures',
    seoTitle: 'Ceintures Femme | Ceintures pour Abaya - Yelira',
    metaDescription: 'Découvrez nos ceintures pour femme sur Yelira. Ceintures élégantes pour structurer vos abayas et tenues modestes. Livraison gratuite dès 69€.',
    introTitle: 'Ceintures : structurez votre silhouette',
    introText: `<p>La <strong>ceinture</strong> est l'accessoire qui transforme une abaya simple en tenue structurée et élégante. Portée à la taille ou aux hanches, elle marque la silhouette et apporte du caractère à vos tenues modestes.</p>
<p>Chez Yelira, retrouvez des ceintures en cuir, en tissu et en chaîne. Des modèles fins et discrets ou larges et statement pour tous les styles.</p>`,
  },

  // ============================================================
  // LEAF CATEGORIES — HOMME
  // ============================================================
  'qamis-blanc-saoudien': {
    slug: 'qamis-blanc-saoudien',
    seoTitle: 'Qamis Blanc Saoudien | Thobe Classique - Yelira',
    metaDescription: 'Découvrez nos qamis blancs saoudiens sur Yelira. Style traditionnel épuré, matières premium. Le classique de l\'homme musulman. Livraison gratuite dès 69€.',
    introTitle: 'Le qamis blanc saoudien : le classique intemporel',
    introText: `<p>Le <strong>qamis blanc saoudien</strong> est la tenue traditionnelle par excellence de l'homme musulman. Blanc immaculé, coupe droite et sobre, col mandarin : un vêtement intemporel pour le quotidien, la prière du vendredi et les occasions religieuses.</p>
<p>Chez Yelira, nos qamis blancs sont confectionnés dans des matières premium pour un tombé impeccable et un confort toute la journée. Disponibles dans toutes les tailles.</p>`,
  },
  'qamis-moderne-couleur': {
    slug: 'qamis-moderne-couleur',
    seoTitle: 'Qamis Moderne Couleur | Qamis Tendance - Yelira',
    metaDescription: 'Découvrez nos qamis modernes en couleur sur Yelira. Coupes contemporaines et coloris variés. Livraison gratuite dès 69€.',
    introTitle: 'Le qamis moderne : la tradition en couleur',
    introText: `<p>Le <strong>qamis moderne en couleur</strong> réinvente la tradition avec des coupes contemporaines et des coloris tendance. Gris, bleu, beige, vert kaki : osez la couleur tout en gardant l'élégance du vêtement traditionnel.</p>
<p>Chez Yelira, nos qamis modernes allient coupe ajustée et matières confortables. Pour les hommes qui veulent un style personnel tout en respectant la tradition.</p>`,
  },
  'abaya-homme-noire': {
    slug: 'abaya-homme-noire',
    seoTitle: 'Abaya Homme Noire | Bisht Noir - Yelira',
    metaDescription: 'Découvrez nos abayas homme noires sur Yelira. Coupes amples et élégantes pour l\'homme musulman. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya homme noire : distinction et sobriété',
    introText: `<p>L'<strong>abaya homme noire</strong> est un vêtement ample et distingué qui se porte par-dessus le qamis ou les vêtements quotidiens. Le noir confère une allure sobre et élégante, adaptée à toutes les occasions.</p>
<p>Chez Yelira, nos abayas homme noires sont confectionnées dans des matières de qualité pour un tombé et une tenue irréprochables. Un indispensable du vestiaire masculin modeste.</p>`,
  },
  'abaya-homme-blanche': {
    slug: 'abaya-homme-blanche',
    seoTitle: 'Abaya Homme Blanche | Bisht Blanc - Yelira',
    metaDescription: 'Découvrez nos abayas homme blanches sur Yelira. Pureté et élégance pour le quotidien et les occasions. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya homme blanche : pureté masculine',
    introText: `<p>L'<strong>abaya homme blanche</strong> allie pureté et élégance. Portée pour la prière du vendredi, les fêtes de l'Aïd ou au quotidien, elle offre une allure lumineuse et distinguée.</p>
<p>Chez Yelira, nos abayas homme blanches sont en tissu opaque et de qualité, pour un rendu impeccable et un confort optimal. Une pièce essentielle du vestiaire masculin.</p>`,
  },
  'ihram': {
    slug: 'ihram',
    seoTitle: 'Ihram | Tenue Pèlerinage Homme - Yelira',
    metaDescription: 'Découvrez nos ensembles ihram sur Yelira. Deux pièces blanches pour le Hajj et l\'Omra. Matières douces et confortables. Livraison gratuite dès 69€.',
    introTitle: 'L\'ihram : la tenue sacrée du pèlerinage',
    introText: `<p>L'<strong>ihram</strong> est l'ensemble deux pièces blanc porté par les hommes lors du Hajj et de l'Omra. Composé d'un izaar (pagne) et d'un ridaa (drap d'épaule), il symbolise l'égalité et la pureté devant Allah.</p>
<p>Chez Yelira, nos ihrams sont en coton doux et absorbant, confortables pour les longues heures de dévotion. Une pièce essentielle pour le pèlerinage, confectionnée avec soin.</p>`,
  },

  // ============================================================
  // LEAF CATEGORIES — ENFANT
  // ============================================================
  'abaya-fille': {
    slug: 'abaya-fille',
    seoTitle: 'Abaya Fille | Abaya Enfant - Yelira',
    metaDescription: 'Découvrez nos abayas pour fille sur Yelira. Modèles mignons et confortables pour les petites. Couleurs douces et matières agréables. Livraison gratuite dès 69€.',
    introTitle: 'Abayas fille : la mode modeste pour les petites',
    introText: `<p>Nos <strong>abayas fille</strong> sont des versions miniatures et adorables des abayas femme. Conçues pour les enfants, elles privilégient le confort, la liberté de mouvement et les matières douces.</p>
<p>Chez Yelira, retrouvez des abayas fille dans des couleurs douces et joyeuses, avec des détails mignons. Des tenues à l'image de maman pour les petites princesses modestes.</p>`,
  },
  'robe-priere-fille': {
    slug: 'robe-priere-fille',
    seoTitle: 'Robe de Prière Fille | Tenue Prière Enfant - Yelira',
    metaDescription: 'Découvrez nos robes de prière pour fille sur Yelira. Tenues pratiques et confortables pour initier les petites à la prière. Livraison gratuite dès 69€.',
    introTitle: 'Robes de prière fille : accompagner les petites',
    introText: `<p>Nos <strong>robes de prière fille</strong> sont conçues pour accompagner les petites dans leur apprentissage de la prière. Pratiques à enfiler, confortables et adorables, elles donnent envie de prier comme les grandes.</p>
<p>Chez Yelira, nos tenues de prière enfant sont en matières douces et colorées. Un beau cadeau pour initier les petites à la spiritualité avec joie.</p>`,
  },
  'burkini-fille': {
    slug: 'burkini-fille',
    seoTitle: 'Burkini Fille | Maillot Modeste Enfant - Yelira',
    metaDescription: 'Découvrez nos burkinis pour fille sur Yelira. Maillots de bain modestes et fun pour les petites. Séchage rapide. Livraison gratuite dès 69€.',
    introTitle: 'Burkini fille : des baignades en toute pudeur',
    introText: `<p>Le <strong>burkini fille</strong> permet aux petites de profiter de la plage et de la piscine en toute couverture. Designs colorés et amusants, matières techniques résistantes au chlore et à séchage rapide.</p>
<p>Chez Yelira, nos burkinis fille sont conçus pour la liberté de mouvement et le confort aquatique. Des maillots modestes que les petites adoreront porter.</p>`,
  },
  'qamis-enfant': {
    slug: 'qamis-enfant',
    seoTitle: 'Qamis Enfant | Qamis Garçon - Yelira',
    metaDescription: 'Découvrez nos qamis pour garçon sur Yelira. Tenues traditionnelles confortables pour les petits. Livraison gratuite dès 69€.',
    introTitle: 'Qamis enfant : la tradition pour les petits',
    introText: `<p>Nos <strong>qamis enfant</strong> sont des versions miniatures et confortables du qamis homme. Parfaits pour la prière du vendredi, les fêtes de l'Aïd et les occasions religieuses, ils initient les petits garçons à la tradition vestimentaire musulmane.</p>
<p>Chez Yelira, nos qamis garçon sont en matières douces et faciles d'entretien. Disponibles en blanc classique et en couleurs variées pour les plus jeunes.</p>`,
  },
  'abaya-mere-fille': {
    slug: 'abaya-mere-fille',
    seoTitle: 'Abaya Mère-Fille | Duo Assorti - Yelira',
    metaDescription: 'Découvrez nos abayas mère-fille assorties sur Yelira. Le même design en version adulte et enfant. Livraison gratuite dès 69€.',
    introTitle: 'Abayas mère-fille : le duo assorti',
    introText: `<p>Nos <strong>abayas mère-fille</strong> proposent le même modèle en version adulte et en version enfant. Même tissu, même coupe, mêmes détails : pour des looks coordonnés et des photos souvenirs inoubliables.</p>
<p>Chez Yelira, retrouvez des duos assortis dans différents styles et couleurs. Un cadeau unique qui renforce le lien mère-fille avec style et complicité.</p>`,
  },
  'priere-mere-fille': {
    slug: 'priere-mere-fille',
    seoTitle: 'Tenue Prière Mère-Fille | Duo Assorti Prière - Yelira',
    metaDescription: 'Découvrez nos tenues de prière mère-fille assorties sur Yelira. Priez ensemble en duo coordonné. Livraison gratuite dès 69€.',
    introTitle: 'Tenues de prière mère-fille : priez en harmonie',
    introText: `<p>Nos <strong>tenues de prière mère-fille</strong> permettent de partager des moments de spiritualité avec un look coordonné. Le même design pour la maman et pour la petite, dans des matières douces et confortables.</p>
<p>Chez Yelira, nos ensembles de prière duo sont un beau cadeau pour accompagner les petites dans leur apprentissage de la salat. Des moments précieux en harmonie.</p>`,
  },

  // ============================================================
  // LEGACY ALIASES
  // ============================================================
  'robes': {
    slug: 'robes',
    seoTitle: 'Robes Modestes Femme | Collection Robes - Yelira',
    metaDescription: 'Découvrez notre collection de robes modestes sur Yelira. Robes de prière, de soirée et casual. Élégance et pudeur au quotidien. Livraison gratuite dès 69€.',
    introTitle: 'Des robes modestes pour chaque occasion',
    introText: `<p>Nos <strong>robes modestes</strong> chez Yelira sont conçues pour la femme qui souhaite allier pudeur, confort et style au quotidien. Longues et couvrantes, elles se déclinent pour toutes les occasions.</p>
<p>Retrouvez nos <strong>robes de prière</strong> pratiques et confortables, nos <strong>robes de soirée</strong> élégantes et nos <strong>robes casual</strong> pour le quotidien. Chaque modèle est pensé pour offrir le meilleur de la mode modeste.</p>`,
  },
};

export function getCategoryDescription(slug: string): CategoryDescription | undefined {
  return categoryDescriptions[slug];
}
