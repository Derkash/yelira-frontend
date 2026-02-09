export interface CategoryDescription {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  introTitle: string;
  introText: string;
}

export const categoryDescriptions: Record<string, CategoryDescription> = {
  'abayas': {
    slug: 'abayas',
    seoTitle: 'Abaya Femme Musulmane | Toute la Collection - Yelira',
    metaDescription: 'Découvrez notre collection d\'abayas pour femme musulmane sur Yelira. Abaya Dubai, papillon, kimono, brodée, satin et plus. Large choix de styles et de couleurs. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya : une pièce essentielle de la mode modeste',
    introText: `<p>L'<strong>abaya</strong> est devenue une pièce essentielle du dressing de la femme musulmane et un incontournable de la mode islamique. Cette longue robe ample, qui se porte par-dessus les vêtements, allie pudeur et élégance avec une infinie variété de styles.</p>
<p>Chez Yelira, nous avons rassemblé les plus belles abayas pour répondre à tous vos besoins : <strong>abaya Dubai</strong> sophistiquée avec ses broderies dorées, <strong>abaya papillon</strong> aérienne et féminine, <strong>abaya kimono</strong> moderne et tendance, <strong>abaya brodée</strong> artisanale, ou encore <strong>abaya satin</strong> luxueuse pour les grandes occasions.</p>
<p>Confectionnées dans des matières premium — nidha, crêpe, médina silk, mousseline et satin — nos abayas offrent un confort optimal et un tombé impeccable. Disponibles du XS au 5XL, dans un large choix de couleurs allant du noir classique aux teintes les plus tendance.</p>`,
  },
  'abaya-dubai': {
    slug: 'abaya-dubai',
    seoTitle: 'Abaya Dubai | Collection Style Dubaïote - Yelira',
    metaDescription: 'Découvrez notre collection d\'abayas Dubai sur Yelira. Style émirati raffiné avec broderies, perles et détails luxueux. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya Dubai : l\'élégance émiratie',
    introText: `<p>L'<strong>abaya Dubai</strong> incarne le luxe et la sophistication de la mode émiratie. Connue pour ses finitions soignées, ses broderies délicates et ses détails précieux, elle est le reflet du style glamour des Émirats Arabes Unis.</p>
<p>Notre collection d'abayas Dubai chez Yelira propose des modèles ornés de <strong>broderies dorées</strong>, de perles, de strass et de dentelle. Chaque pièce est un savant mélange de tradition et de modernité, parfaite pour les femmes qui aiment se distinguer avec élégance.</p>
<p>Disponibles dans des matières nobles comme le crêpe, le satin et la mousseline, nos abayas Dubai conviennent aussi bien pour le quotidien que pour les occasions spéciales.</p>`,
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
  'abaya-papillon': {
    slug: 'abaya-papillon',
    seoTitle: 'Abaya Papillon | Collection Coupe Papillon - Yelira',
    metaDescription: 'Craquez pour nos abayas papillon sur Yelira. Coupe aérienne et fluide avec manches larges façon ailes de papillon. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya papillon : légèreté et grâce',
    introText: `<p>L'<strong>abaya papillon</strong> doit son nom à sa coupe distinctive qui rappelle les ailes d'un papillon. Avec ses manches extra-larges qui se fondent dans le corps de l'abaya, elle crée un mouvement aérien et gracieux à chaque pas.</p>
<p>Ce style d'abaya est particulièrement apprécié pour son allure unique et sa féminité. Chez Yelira, nos abayas papillon sont disponibles dans des tissus légers et fluides qui amplifient l'effet de mouvement : mousseline, médina silk et crêpe léger.</p>
<p>L'abaya papillon est idéale pour les occasions où vous souhaitez vous distinguer avec élégance, tout en bénéficiant d'une grande liberté de mouvement.</p>`,
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
  'abaya-simple': {
    slug: 'abaya-simple',
    seoTitle: 'Abaya Simple | Abayas Classiques & Épurées - Yelira',
    metaDescription: 'Trouvez votre abaya simple et épurée sur Yelira. Coupes classiques, matières de qualité, confort quotidien. Idéale pour tous les jours. Livraison gratuite dès 69€.',
    introTitle: 'L\'abaya simple : l\'élégance de la sobriété',
    introText: `<p>L'<strong>abaya simple</strong> est le basique indispensable de toute garde-robe modeste. Sans fioritures ni ornements, elle mise sur la qualité du tissu, la perfection de la coupe et la justesse du tombé pour créer un vêtement intemporel.</p>
<p>Chez Yelira, nos abayas simples sont confectionnées dans des matières premium : nidha légère, crêpe fluide ou médina silk soyeuse. La simplicité du design met en valeur la qualité de la confection et la beauté naturelle du tissu.</p>
<p>Parfaite pour le quotidien, le travail ou la prière, l'abaya simple est la pièce que vous porterez le plus. Facile à assortir et à accessoiriser, elle se transforme selon vos envies.</p>`,
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
  'khimar': {
    slug: 'khimar',
    seoTitle: 'Khimar Femme | Collection Khimars - Yelira',
    metaDescription: 'Trouvez votre khimar sur Yelira. Khimar court, mi-long et long dans différentes matières et couleurs. Couvre tête, épaules et poitrine. Livraison gratuite dès 69€.',
    introTitle: 'Le khimar : le voile long et couvrant',
    introText: `<p>Le <strong>khimar</strong> est un voile long qui couvre la tête, le cou, les épaules et descend sur la poitrine, offrant une couverture plus ample qu'un hijab classique. C'est le choix privilégié des femmes qui souhaitent une couverture généreuse tout en gardant un look soigné.</p>
<p>Notre collection de khimars chez Yelira se décline en plusieurs longueurs : khimar court (au-dessus de la taille), khimar mi-long (jusqu'à la taille) et khimar long (sous la taille). Disponibles dans des matières légères et opaques.</p>
<p>Le khimar se porte avec une jupe, un pantalon large ou une abaya pour créer un ensemble complet et harmonieux.</p>`,
  },
  'robes': {
    slug: 'robes',
    seoTitle: 'Robes Modestes Femme | Collection Robes - Yelira',
    metaDescription: 'Découvrez notre collection de robes modestes sur Yelira. Robes de prière, de soirée et casual. Élégance et pudeur au quotidien. Livraison gratuite dès 69€.',
    introTitle: 'Des robes modestes pour chaque occasion',
    introText: `<p>Nos <strong>robes modestes</strong> chez Yelira sont conçues pour la femme qui souhaite allier pudeur, confort et style au quotidien. Longues et couvrantes, elles se déclinent pour toutes les occasions.</p>
<p>Retrouvez nos <strong>robes de prière</strong> pratiques et confortables, nos <strong>robes de soirée</strong> élégantes et nos <strong>robes casual</strong> pour le quotidien. Chaque modèle est pensé pour offrir le meilleur de la mode modeste.</p>`,
  },
  'burkini': {
    slug: 'burkini',
    seoTitle: 'Burkini Femme | Maillot de Bain Modeste - Yelira',
    metaDescription: 'Découvrez notre collection de burkinis sur Yelira. Maillots de bain modestes, couvrants et tendance pour la plage et la piscine. Livraison gratuite dès 69€.',
    introTitle: 'Le burkini : le maillot de bain modeste',
    introText: `<p>Le <strong>burkini</strong> est le maillot de bain modeste qui vous permet de profiter de la plage et de la piscine en toute sérénité. Couvrant et confortable, il offre une alternative élégante aux maillots de bain traditionnels.</p>
<p>Nos burkinis chez Yelira sont confectionnés dans des tissus techniques à séchage rapide, résistants au chlore et aux UV. Disponibles dans des designs modernes et des couleurs variées, ils allient fonctionnalité et style.</p>`,
  },
  'homme': {
    slug: 'homme',
    seoTitle: 'Vêtements Homme Musulman | Collection Homme - Yelira',
    metaDescription: 'Découvrez notre collection homme sur Yelira. Qamis, gandouras, ensembles et accessoires pour l\'homme musulman. Livraison gratuite dès 69€.',
    introTitle: 'La mode modeste au masculin',
    introText: `<p>Yelira propose également une sélection de <strong>vêtements pour homme</strong> musulman. Qamis classiques et modernes, gandouras marocaines, ensembles assortis : retrouvez tout ce qu'il faut pour être élégant en toutes occasions.</p>
<p>Nos vêtements homme sont confectionnés dans des matières de qualité, disponibles dans toutes les tailles et dans un choix de couleurs variées. Du style sobre et traditionnel au look plus contemporain.</p>`,
  },
};

export function getCategoryDescription(slug: string): CategoryDescription | undefined {
  return categoryDescriptions[slug];
}
