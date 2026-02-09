export interface SeoPage {
  slug: string;
  keyword: string;
  title: string;
  h1: string;
  metaDescription: string;
  introText: string;
  searchQuery: string;
  relatedCategories: { name: string; slug: string }[];
  faq: { question: string; answer: string }[];
}

export const seoPages: SeoPage[] = [
  {
    slug: 'abaya-saoudienne',
    keyword: 'Abaya Saoudienne',
    title: 'Abaya Saoudienne | Collection Abaya Style Saoudien - Yelira',
    h1: 'Abaya Saoudienne',
    metaDescription: 'Découvrez notre collection d\'abayas saoudiennes sur Yelira. Abaya style saoudien élégante et authentique, coupe ample et fluide. Livraison gratuite dès 69€.',
    introText: `<p>L'<strong>abaya saoudienne</strong> est un incontournable de la mode modeste, reconnue pour sa coupe droite et épurée qui incarne l'élégance à l'état pur. Originaire d'Arabie Saoudite, ce vêtement traditionnel a su évoluer au fil des années pour devenir une pièce de mode à part entière, alliant pudeur et sophistication.</p>
<p>Chez Yelira, nous avons sélectionné pour vous les plus belles <strong>abayas de style saoudien</strong>, confectionnées dans des tissus de qualité premium : nidha, zoom, crêpe ou encore médina silk. Chaque modèle est pensé pour offrir un tombé parfait et un confort optimal au quotidien.</p>
<p>Que vous recherchiez une abaya saoudienne noire classique ou un modèle plus contemporain avec des détails brodés ou des manches travaillées, notre collection saura répondre à vos attentes. L'abaya saoudienne se porte aussi bien au quotidien que pour des occasions spéciales.</p>`,
    searchQuery: 'abaya saoudienne',
    relatedCategories: [
      { name: 'Abaya Dubai', slug: 'abaya-dubai' },
      { name: 'Abaya Simple', slug: 'abaya-simple' },
      { name: 'Abaya Noire', slug: 'abaya-noire' },
    ],
    faq: [
      { question: 'Qu\'est-ce qu\'une abaya saoudienne ?', answer: 'L\'abaya saoudienne est un vêtement long et ample originaire d\'Arabie Saoudite. Elle se caractérise par sa coupe droite, son col rond ou en V, et son style épuré. Elle est généralement confectionnée en tissus légers et fluides comme le nidha ou le crêpe.' },
      { question: 'Comment porter une abaya saoudienne ?', answer: 'L\'abaya saoudienne se porte par-dessus vos vêtements, fermée sur le devant par des boutons-pression ou un zip. Elle s\'associe parfaitement avec un hijab assorti et peut être accessoirisée avec une ceinture pour marquer la taille.' },
      { question: 'Quelle est la différence entre une abaya saoudienne et une abaya Dubai ?', answer: 'L\'abaya saoudienne est généralement plus sobre et épurée, avec une coupe droite classique. L\'abaya Dubai est souvent plus travaillée avec des broderies, des perles ou des détails dorés, reflétant le style plus ostentatoire de la mode émiratie.' },
    ],
  },
  {
    slug: 'abaya-manches-bouffantes',
    keyword: 'Abaya Manches Bouffantes',
    title: 'Abaya Manches Bouffantes | Modèles Tendance - Yelira',
    h1: 'Abaya Manches Bouffantes',
    metaDescription: 'Craquez pour nos abayas à manches bouffantes sur Yelira. Des modèles tendance et féminins pour un look moderne et élégant. Livraison gratuite dès 69€.',
    introText: `<p>L'<strong>abaya à manches bouffantes</strong> est la pièce tendance par excellence pour les femmes qui souhaitent allier pudeur et modernité. Ce style de manches apporte du volume et une touche romantique à la silhouette, transformant une abaya classique en un véritable statement mode.</p>
<p>Notre collection d'<strong>abayas manches bouffantes</strong> chez Yelira propose des modèles variés : manches ballon resserrées au poignet, manches pagode XXL, ou encore manches bouffantes avec détails froncés. Chaque pièce est conçue pour sublimer votre allure avec élégance.</p>
<p>Disponibles dans différentes matières — crêpe, satin, mousseline — nos abayas à manches bouffantes conviennent aussi bien pour le quotidien que pour les événements spéciaux. Associez-les à un hijab uni pour un look harmonieux et chic.</p>`,
    searchQuery: 'abaya manches bouffantes',
    relatedCategories: [
      { name: 'Abaya Robe', slug: 'abaya-robe' },
      { name: 'Abaya Kimono', slug: 'abaya-kimono' },
      { name: 'Abaya Papillon', slug: 'abaya-papillon' },
    ],
    faq: [
      { question: 'Pourquoi choisir une abaya à manches bouffantes ?', answer: 'Les manches bouffantes apportent du volume et de l\'élégance à votre tenue. Elles permettent de créer une silhouette féminine et tendance tout en respectant les codes de la mode modeste. C\'est le choix idéal pour se démarquer.' },
      { question: 'Comment entretenir une abaya à manches bouffantes ?', answer: 'Nous recommandons un lavage à la main ou en machine sur cycle délicat à 30°C. Évitez le sèche-linge et préférez un séchage à plat pour conserver la forme des manches. Le repassage à basse température est conseillé.' },
    ],
  },
  {
    slug: 'abaya-evasee',
    keyword: 'Abaya Évasée',
    title: 'Abaya Évasée | Collection Coupe Évasée Femme - Yelira',
    h1: 'Abaya Évasée',
    metaDescription: 'Découvrez nos abayas évasées sur Yelira. Coupe fluide et féminine, confort optimal. Large choix de couleurs et matières. Livraison gratuite dès 69€.',
    introText: `<p>L'<strong>abaya évasée</strong> est un modèle particulièrement apprécié pour son tombé fluide et sa coupe qui s'élargit gracieusement vers le bas. Cette forme flatteuse convient à toutes les morphologies et offre une grande liberté de mouvement.</p>
<p>Chez Yelira, notre collection d'<strong>abayas évasées</strong> se décline dans une palette de couleurs raffinées — noir, beige, taupe, bordeaux — et dans des matières nobles qui garantissent un drapé impeccable. Du crépe léger au médina silk soyeux, chaque tissu est sélectionné avec soin.</p>
<p>L'abaya évasée est idéale pour les femmes qui recherchent un vêtement à la fois couvrant et aérien. Sa coupe permet de créer des looks variés : casual au quotidien avec des baskets, ou plus habillé avec des talons pour une occasion spéciale.</p>`,
    searchQuery: 'abaya évasée',
    relatedCategories: [
      { name: 'Abaya Papillon', slug: 'abaya-papillon' },
      { name: 'Abaya Robe', slug: 'abaya-robe' },
      { name: 'Abaya Simple', slug: 'abaya-simple' },
    ],
    faq: [
      { question: 'À qui convient l\'abaya évasée ?', answer: 'L\'abaya évasée convient à toutes les morphologies. Sa coupe qui s\'élargit vers le bas est particulièrement flatteuse car elle fluidifie la silhouette. Elle est idéale pour les femmes qui aiment le confort sans sacrifier l\'élégance.' },
      { question: 'Peut-on porter une abaya évasée au quotidien ?', answer: 'Absolument ! L\'abaya évasée est parfaite pour un usage quotidien grâce à son confort et sa liberté de mouvement. Elle est également assez élégante pour être portée lors d\'occasions plus formelles.' },
    ],
  },
  {
    slug: 'abaya-marocaine',
    keyword: 'Abaya Marocaine',
    title: 'Abaya Marocaine | Djellaba & Caftan Marocain - Yelira',
    h1: 'Abaya Marocaine',
    metaDescription: 'Explorez notre collection d\'abayas marocaines sur Yelira. Style oriental raffiné, broderies artisanales et coupes flatteuses. Livraison gratuite dès 69€.',
    introText: `<p>L'<strong>abaya marocaine</strong> se distingue par son style unique mêlant tradition orientale et créativité artisanale. Inspirée des caftans et djellabas du Maroc, elle arbore souvent des broderies sfifa, des passementeries et des ornements qui reflètent le savoir-faire marocain.</p>
<p>Notre sélection d'<strong>abayas style marocain</strong> chez Yelira met en valeur cette richesse culturelle à travers des pièces modernes et portables. Vous trouverez des modèles avec des cols ornés, des manches travaillées et des finitions minutieuses qui témoignent d'un artisanat d'exception.</p>
<p>Que ce soit pour l'Aïd, un mariage, une cérémonie ou simplement pour le plaisir de porter un beau vêtement, l'abaya marocaine est le choix parfait. Elle se porte avec un hijab coordonné pour un ensemble harmonieux et sophistiqué.</p>`,
    searchQuery: 'abaya marocaine',
    relatedCategories: [
      { name: 'Abaya Brodée', slug: 'abaya-brodee' },
      { name: 'Abaya Dubai', slug: 'abaya-dubai' },
      { name: 'Abaya Satin', slug: 'abaya-satin' },
    ],
    faq: [
      { question: 'Qu\'est-ce qui différencie une abaya marocaine ?', answer: 'L\'abaya marocaine se distingue par ses broderies artisanales (sfifa, passementerie), ses couleurs riches et ses détails ornementaux. Elle s\'inspire des traditions vestimentaires marocaines tout en respectant les codes de la mode modeste.' },
      { question: 'Pour quelles occasions porter une abaya marocaine ?', answer: 'L\'abaya marocaine est polyvalente. Les modèles simples conviennent au quotidien, tandis que les versions plus ornées sont parfaites pour les fêtes (Aïd, mariages, cérémonies). C\'est un vêtement qui s\'adapte à toutes les occasions.' },
    ],
  },
  {
    slug: 'gandoura-homme',
    keyword: 'Gandoura Homme',
    title: 'Gandoura Homme | Vêtement Traditionnel Masculin - Yelira',
    h1: 'Gandoura Homme',
    metaDescription: 'Découvrez notre collection de gandouras pour homme sur Yelira. Vêtement traditionnel confortable et élégant, idéal pour la prière et le quotidien. Livraison gratuite dès 69€.',
    introText: `<p>La <strong>gandoura homme</strong> est un vêtement traditionnel masculin ample et confortable, porté dans de nombreux pays du monde arabe et du Maghreb. Chez Yelira, nous proposons une sélection de gandouras alliant tradition et modernité, confectionnées dans des tissus de qualité.</p>
<p>Nos <strong>gandouras pour homme</strong> se déclinent en plusieurs styles : gandoura marocaine avec col mao et broderies, gandoura saoudienne épurée, ou encore gandoura moderne à la coupe ajustée. Chaque modèle est pensé pour offrir un confort optimal tout au long de la journée.</p>
<p>Que ce soit pour la prière du vendredi, l'Aïd, une cérémonie ou un usage quotidien, la gandoura homme est un incontournable de la garde-robe masculine. Disponible du S au 3XL, elle s'adapte à toutes les morphologies.</p>`,
    searchQuery: 'gandoura homme',
    relatedCategories: [
      { name: 'Abaya Homme', slug: 'abaya-homme' },
      { name: 'Qamis', slug: 'qamis' },
      { name: 'Qamis Marocain', slug: 'qamis-marocain' },
    ],
    faq: [
      { question: 'Quelle est la différence entre une gandoura et un qamis ?', answer: 'La gandoura est un vêtement sans col ou avec un col simple, souvent plus court qu\'un qamis. Le qamis (ou thobe) est généralement plus long, descend jusqu\'aux chevilles, et possède un col plus structuré. Les deux sont des vêtements traditionnels masculins confortables.' },
      { question: 'Comment choisir la taille de sa gandoura ?', answer: 'Référez-vous à notre guide des tailles en prenant vos mesures de poitrine, d\'épaules et de longueur. La gandoura doit être suffisamment ample pour permettre une liberté de mouvement, notamment pour la prière.' },
    ],
  },
  {
    slug: 'abaya-homme',
    keyword: 'Abaya Homme',
    title: 'Abaya Homme | Collection Masculine Modeste - Yelira',
    h1: 'Abaya Homme',
    metaDescription: 'Parcourez notre collection d\'abayas pour homme sur Yelira. Qamis, gandouras et thobes élégants pour l\'homme musulman. Livraison gratuite dès 69€.',
    introText: `<p>L'<strong>abaya homme</strong>, également connue sous le nom de bisht, thobe ou qamis selon les régions, est le vêtement traditionnel masculin par excellence. Chez Yelira, nous avons rassemblé une collection complète de vêtements modestes pour homme.</p>
<p>Notre sélection d'<strong>abayas masculines</strong> comprend des qamis classiques, des gandouras marocaines, des ensembles et des thobes de différents styles. Chaque pièce est confectionnée dans des matières premium pour un confort et une tenue irréprochables.</p>
<p>Du style saoudien épuré au style marocain brodé, en passant par des coupes plus modernes et ajustées, trouvez le vêtement qui correspond à votre style et à l'occasion. Idéal pour la prière, les fêtes ou le quotidien.</p>`,
    searchQuery: 'abaya homme qamis',
    relatedCategories: [
      { name: 'Gandoura Homme', slug: 'gandoura-homme' },
      { name: 'Qamis', slug: 'qamis' },
      { name: 'Ensemble Homme', slug: 'ensemble-homme' },
    ],
    faq: [
      { question: 'Qu\'est-ce qu\'une abaya pour homme ?', answer: 'Le terme "abaya homme" désigne les vêtements longs et amples portés par les hommes musulmans. Selon les régions, on parle de qamis, thobe, gandoura ou bisht. Ces vêtements se caractérisent par leur coupe ample et leur longueur, offrant confort et pudeur.' },
      { question: 'Quel vêtement choisir pour la prière ?', answer: 'Pour la prière, nous recommandons un qamis ou une gandoura suffisamment longs (mi-mollet minimum) et amples pour permettre les mouvements de prosternation. Les modèles en coton ou en polyester léger sont particulièrement confortables.' },
    ],
  },
  {
    slug: 'abaya-fillette',
    keyword: 'Abaya Fillette',
    title: 'Abaya Fillette | Collection Enfant Fille - Yelira',
    h1: 'Abaya Fillette',
    metaDescription: 'Craquez pour nos abayas fillette sur Yelira. Des modèles adorables et confortables pour les petites filles. Tailles de 2 à 14 ans. Livraison gratuite dès 69€.',
    introText: `<p>Offrez à votre petite fille le plaisir de porter une <strong>abaya fillette</strong> aussi jolie que celle de maman. Chez Yelira, notre collection enfant propose des abayas spécialement conçues pour les petites filles, avec des coupes adaptées et des détails charmants.</p>
<p>Nos <strong>abayas pour fillette</strong> sont disponibles dans des tailles allant de 2 à 14 ans. Confectionnées dans des tissus doux et résistants, elles accompagnent votre enfant dans toutes ses activités tout en lui inculquant le goût de la mode modeste.</p>
<p>Des modèles colorés pour le quotidien aux versions plus habillées pour l'Aïd et les cérémonies, chaque abaya fillette est pensée pour le confort et la praticité. Les fermetures faciles et les matières lavables en machine facilitent la vie des parents.</p>`,
    searchQuery: 'abaya fillette enfant fille',
    relatedCategories: [
      { name: 'Abayas', slug: 'abayas' },
      { name: 'Abaya Simple', slug: 'abaya-simple' },
      { name: 'Abaya Blanche', slug: 'abaya-blanche' },
    ],
    faq: [
      { question: 'À partir de quel âge une fillette peut porter une abaya ?', answer: 'Nos abayas fillette sont disponibles à partir de 2 ans. Chaque modèle est adapté à la morphologie de l\'enfant avec des coupes confortables qui permettent de jouer et de bouger librement.' },
      { question: 'Comment choisir la taille d\'une abaya fillette ?', answer: 'Consultez notre guide des tailles enfant en prenant les mesures de votre fille (hauteur, tour de poitrine). En cas de doute entre deux tailles, privilégiez la taille supérieure pour plus de confort et une durée de port plus longue.' },
    ],
  },
  {
    slug: 'abaya-khimar',
    keyword: 'Abaya Khimar',
    title: 'Abaya Khimar | Ensemble Abaya + Khimar Intégré - Yelira',
    h1: 'Abaya Khimar',
    metaDescription: 'Découvrez nos ensembles abaya khimar sur Yelira. Abaya avec khimar intégré ou assorti pour un look coordonné et pratique. Livraison gratuite dès 69€.',
    introText: `<p>L'<strong>abaya khimar</strong> est l'ensemble idéal pour les femmes qui recherchent une tenue complète et coordonnée. Composé d'une abaya et d'un khimar assorti (voile couvrant la tête et les épaules), cet ensemble offre praticité et élégance en une seule tenue.</p>
<p>Notre collection d'<strong>ensembles abaya khimar</strong> chez Yelira propose des modèles variés : khimar court ou long, khimar papillon ou classique, avec une abaya assortie dans la même matière et la même couleur. Un choix qui vous fait gagner du temps le matin.</p>
<p>Disponibles en noir, beige, gris, bordeaux et bien d'autres couleurs, nos ensembles abaya khimar sont confectionnés dans des matières légères et respirantes. Parfaits pour le quotidien, la prière ou les sorties.</p>`,
    searchQuery: 'abaya khimar ensemble',
    relatedCategories: [
      { name: 'Khimar', slug: 'khimar' },
      { name: 'Jilbab', slug: 'jilbabs' },
      { name: 'Abaya Simple', slug: 'abaya-simple' },
    ],
    faq: [
      { question: 'Quelle est la différence entre un khimar et un hijab ?', answer: 'Le khimar est un voile plus long que le hijab classique. Il couvre la tête, le cou, les épaules et descend souvent jusqu\'à la taille ou au-delà. Le hijab est généralement un foulard qui couvre la tête et le cou. Le khimar offre une couverture plus ample.' },
      { question: 'L\'ensemble abaya khimar remplace-t-il un jilbab ?', answer: 'L\'ensemble abaya khimar offre une couverture similaire au jilbab en deux pièces séparées. L\'avantage est qu\'il peut être porté ensemble ou séparément, offrant plus de polyvalence dans votre garde-robe.' },
    ],
  },
  {
    slug: 'abaya-voile-integre',
    keyword: 'Abaya Voile Intégré',
    title: 'Abaya Voile Intégré | Abaya avec Hijab Intégré - Yelira',
    h1: 'Abaya Voile Intégré',
    metaDescription: 'Découvrez nos abayas avec voile intégré sur Yelira. Pratiques et élégantes, elles combinent abaya et hijab en un seul vêtement. Livraison gratuite dès 69€.',
    introText: `<p>L'<strong>abaya voile intégré</strong> est la solution ultime pour les femmes qui veulent s'habiller rapidement sans compromettre leur style. Ce modèle innovant intègre directement le voile à l'abaya, créant un ensemble harmonieux et pratique en un seul vêtement.</p>
<p>Chez Yelira, nos <strong>abayas avec voile intégré</strong> sont conçues avec soin pour que le hijab attaché tombe naturellement et offre une couverture parfaite. Plus besoin de s'inquiéter de l'ajustement du voile : il reste en place toute la journée.</p>
<p>Idéales pour la prière, les sorties rapides ou simplement pour un quotidien facilité, ces abayas sont disponibles dans plusieurs coloris et matières. Un gain de temps précieux au quotidien sans sacrifier l'élégance.</p>`,
    searchQuery: 'abaya voile intégré hijab',
    relatedCategories: [
      { name: 'Abaya Khimar', slug: 'abaya-khimar' },
      { name: 'Jilbab 1 pièce', slug: 'jilbab-1-piece' },
      { name: 'Khimar', slug: 'khimar' },
    ],
    faq: [
      { question: 'Comment fonctionne le voile intégré ?', answer: 'Le voile est directement cousu ou attaché à l\'abaya au niveau de l\'encolure. Il se drape naturellement sur la tête et les épaules. Certains modèles ont un voile amovible avec des pressions pour plus de polyvalence.' },
      { question: 'L\'abaya voile intégré est-elle pratique pour la prière ?', answer: 'Oui, c\'est l\'un de ses principaux avantages. Vous n\'avez qu\'à enfiler votre abaya et le voile est déjà en place. C\'est idéal pour les prières rapides ou pour les femmes pressées.' },
    ],
  },
  {
    slug: 'abaya-grande-taille',
    keyword: 'Abaya Grande Taille',
    title: 'Abaya Grande Taille | Tailles XL à 5XL - Yelira',
    h1: 'Abaya Grande Taille',
    metaDescription: 'Trouvez votre abaya grande taille sur Yelira. Large choix de modèles du XL au 5XL, coupes flatteuses et confortables. Livraison gratuite dès 69€.',
    introText: `<p>Chez Yelira, nous croyons que chaque femme mérite de se sentir belle et à l'aise dans ses vêtements. Notre collection d'<strong>abayas grande taille</strong> est spécialement conçue pour les morphologies généreuses, avec des coupes flatteuses qui subliment toutes les silhouettes.</p>
<p>Nos <strong>abayas XL à 5XL</strong> ne sont pas de simples versions agrandies de nos modèles standards. Chaque patron est repensé pour offrir un ajustement parfait : emmanchures plus larges, longueurs adaptées, tissus avec plus d'aisance. Le résultat : un vêtement qui tombe impeccablement.</p>
<p>Du style classique au plus contemporain, en passant par les modèles de soirée, toutes nos collections sont disponibles en grande taille. Parce que la mode modeste n'a pas de limite de taille.</p>`,
    searchQuery: 'abaya grande taille xl',
    relatedCategories: [
      { name: 'Abaya Simple', slug: 'abaya-simple' },
      { name: 'Abaya Évasée', slug: 'abaya-evasee' },
      { name: 'Abaya Noire', slug: 'abaya-noire' },
    ],
    faq: [
      { question: 'Quelles tailles sont disponibles en grande taille ?', answer: 'Nos abayas grande taille sont disponibles du XL au 5XL. Consultez notre guide des tailles pour trouver la correspondance exacte avec vos mensurations. En cas de doute, notre service client est à votre disposition.' },
      { question: 'Les modèles grande taille sont-ils les mêmes que les tailles standard ?', answer: 'Oui, la plupart de nos modèles sont proposés dans toute notre gamme de tailles. Les patrons sont spécifiquement ajustés pour chaque taille afin de garantir un tombé parfait et un confort optimal.' },
    ],
  },
  {
    slug: 'abaya-mariage',
    keyword: 'Abaya Mariage',
    title: 'Abaya Mariage | Abaya de Cérémonie & Mariage - Yelira',
    h1: 'Abaya Mariage',
    metaDescription: 'Sublimez votre mariage avec nos abayas de cérémonie sur Yelira. Modèles raffinés en satin, brodés et ornés pour le plus beau jour. Livraison gratuite dès 69€.',
    introText: `<p>Votre mariage mérite une tenue d'exception. Découvrez notre collection d'<strong>abayas de mariage</strong> chez Yelira, des pièces somptueuses conçues pour faire de vous la plus belle le jour J. Chaque modèle allie pudeur, raffinement et luxe.</p>
<p>Nos <strong>abayas de cérémonie</strong> sont confectionnées dans les plus belles matières : satin duchesse, crêpe de soie, organza et mousseline. Ornées de broderies délicates, de perles, de strass ou de dentelle, elles rivalisent d'élégance avec les robes de mariée traditionnelles.</p>
<p>En blanc ivoire pour la mariée, ou dans des teintes raffinées comme le champagne, le rose poudré ou le bleu ciel pour les invitées, nos abayas de mariage se déclinent pour toutes les occasions de cérémonie. Un choix unique pour un jour unique.</p>`,
    searchQuery: 'abaya mariage cérémonie',
    relatedCategories: [
      { name: 'Abaya Satin', slug: 'abaya-satin' },
      { name: 'Abaya Brodée', slug: 'abaya-brodee' },
      { name: 'Abaya Blanche', slug: 'abaya-blanche' },
    ],
    faq: [
      { question: 'Peut-on personnaliser une abaya de mariage ?', answer: 'Certains de nos modèles de mariage peuvent être personnalisés sur demande. Contactez notre service client pour discuter des options de personnalisation disponibles : choix de la couleur, des broderies ou des ornements.' },
      { question: 'Quel hijab porter avec une abaya de mariage ?', answer: 'Pour un mariage, nous recommandons un hijab dans une matière luxueuse comme la soie ou le satin, idéalement dans un ton coordonné à votre abaya. Un hijab avec des détails de perles ou de dentelle complète parfaitement le look.' },
    ],
  },
  {
    slug: 'sous-abaya',
    keyword: 'Sous Abaya',
    title: 'Sous Abaya | Robe & Combinaison sous Abaya - Yelira',
    h1: 'Sous Abaya',
    metaDescription: 'Découvrez nos sous-abayas sur Yelira. Robes et combinaisons à porter sous votre abaya pour un confort et un tombé parfaits. Livraison gratuite dès 69€.',
    introText: `<p>La <strong>sous-abaya</strong> est l'accessoire indispensable pour un port d'abaya confortable et impeccable. Portée sous votre abaya, cette pièce légère améliore le tombé du vêtement, évite la transparence et offre une couche de confort supplémentaire.</p>
<p>Chez Yelira, nos <strong>sous-abayas</strong> sont disponibles en plusieurs formats : robe longue moulante, combinaison, ou slip dress. Confectionnées dans des matières douces et extensibles comme le jersey ou le coton, elles épousent votre silhouette sans marquer.</p>
<p>Disponibles en noir, blanc, nude et chair, nos sous-abayas sont conçues pour être invisibles sous n'importe quelle abaya. Un basique essentiel à avoir dans son dressing pour un rendu toujours soigné.</p>`,
    searchQuery: 'sous abaya robe dessous',
    relatedCategories: [
      { name: 'Abayas', slug: 'abayas' },
      { name: 'Abaya Simple', slug: 'abaya-simple' },
      { name: 'Abaya Noire', slug: 'abaya-noire' },
    ],
    faq: [
      { question: 'Pourquoi porter une sous-abaya ?', answer: 'La sous-abaya améliore le tombé de votre abaya, prévient la transparence, absorbe la transpiration et protège votre abaya de l\'usure directe avec la peau. C\'est un basique indispensable pour un port d\'abaya confortable.' },
      { question: 'Quelle couleur choisir pour sa sous-abaya ?', answer: 'Optez pour une couleur proche de votre carnation (nude, chair) ou pour du noir si vous portez principalement des abayas foncées. Le noir est le choix le plus polyvalent. Évitez le blanc sous des abayas légères pour ne pas créer de transparence.' },
    ],
  },
  {
    slug: 'abaya-soiree',
    keyword: 'Abaya Soirée',
    title: 'Abaya Soirée | Collection Habillée & Élégante - Yelira',
    h1: 'Abaya de Soirée',
    metaDescription: 'Découvrez nos abayas de soirée sur Yelira. Modèles habillés et élégants pour vos événements : strass, broderies, satin. Livraison gratuite dès 69€.',
    introText: `<p>Pour vos soirées et événements, optez pour une <strong>abaya de soirée</strong> qui fait sensation. Notre collection chez Yelira propose des modèles raffinés et habillés qui vous permettront de briller en toute pudeur lors de vos événements.</p>
<p>Nos <strong>abayas habillées</strong> se distinguent par leurs matières nobles — satin, velours, crêpe de soie — et leurs finitions luxueuses : broderies, perles, strass, paillettes et dentelle. Chaque détail est pensé pour créer un vêtement d'exception.</p>
<p>Que ce soit pour un mariage, un iftar, l'Aïd, une soirée entre amies ou tout autre événement, nos abayas de soirée vous garantissent un look mémorable. Associez-les à des accessoires dorés ou argentés pour un style total.</p>`,
    searchQuery: 'abaya soirée habillée événement',
    relatedCategories: [
      { name: 'Abaya Mariage', slug: 'abaya-mariage' },
      { name: 'Abaya Satin', slug: 'abaya-satin' },
      { name: 'Abaya Brodée', slug: 'abaya-brodee' },
    ],
    faq: [
      { question: 'Comment accessoiriser une abaya de soirée ?', answer: 'Complétez votre look avec un hijab en matière luxueuse (soie, satin), un sac à main raffiné et des bijoux discrets. Une ceinture ornée peut aussi sublimer votre tenue en marquant élégamment la taille.' },
      { question: 'Les abayas de soirée sont-elles confortables ?', answer: 'Nos abayas de soirée sont conçues pour allier élégance et confort. Les matières sont sélectionnées pour leur douceur et leurs doublures sont soignées. Vous pouvez danser et bouger confortablement toute la soirée.' },
    ],
  },
  {
    slug: 'makhawer',
    keyword: 'Makhawer',
    title: 'Makhawer | Collection Robe Makhawer - Yelira',
    h1: 'Makhawer',
    metaDescription: 'Découvrez notre collection de makhawer sur Yelira. Robes traditionnelles aux broderies somptueuses, idéales pour les occasions spéciales. Livraison gratuite dès 69€.',
    introText: `<p>Le <strong>makhawer</strong> (ou makhawar) est une robe traditionnelle richement ornée, portée dans les pays du Golfe lors des occasions spéciales et des célébrations. Cette pièce d'exception se distingue par ses broderies opulentes et ses tissus luxueux.</p>
<p>Chez Yelira, notre collection de <strong>makhawer</strong> rend hommage à cette tradition vestimentaire avec des modèles qui allient artisanat traditionnel et design contemporain. Broderies dorées, fils métalliques, perles et cristaux ornent ces robes d'apparat.</p>
<p>Portée lors des mariages, des fêtes de l'Aïd ou des cérémonies familiales, le makhawer est bien plus qu'un vêtement : c'est une œuvre d'art à porter. Nos modèles sont disponibles dans différentes couleurs et niveaux d'ornementation.</p>`,
    searchQuery: 'makhawer robe traditionnelle',
    relatedCategories: [
      { name: 'Abaya Mariage', slug: 'abaya-mariage' },
      { name: 'Abaya Soirée', slug: 'abaya-soiree' },
      { name: 'Abaya Brodée', slug: 'abaya-brodee' },
    ],
    faq: [
      { question: 'Qu\'est-ce qu\'un makhawer ?', answer: 'Le makhawer est une robe de cérémonie traditionnelle des pays du Golfe. C\'est un vêtement richement brodé et orné, porté lors des grandes occasions comme les mariages et les fêtes religieuses. Il représente le summum de l\'élégance traditionnelle.' },
      { question: 'Comment entretenir un makhawer ?', answer: 'En raison de ses broderies délicates, le makhawer nécessite un entretien particulier. Nous recommandons le nettoyage à sec professionnel. Rangez-le à plat ou sur un cintre rembourré pour préserver les broderies.' },
    ],
  },
  {
    slug: 'abaya-pas-cher',
    keyword: 'Abaya Pas Cher',
    title: 'Abaya Pas Cher | Abayas à Petit Prix - Yelira',
    h1: 'Abaya Pas Cher',
    metaDescription: 'Trouvez votre abaya pas cher sur Yelira. Large choix d\'abayas à petit prix sans compromis sur la qualité. Promotions et soldes. Livraison gratuite dès 69€.',
    introText: `<p>Vous cherchez une <strong>abaya pas cher</strong> sans faire de compromis sur la qualité ? Chez Yelira, nous proposons une sélection d'abayas à prix accessibles pour toutes les bourses. Mode modeste ne rime pas avec prix élevés.</p>
<p>Notre gamme d'<strong>abayas à petit prix</strong> comprend des modèles pour le quotidien dans des matières durables et agréables à porter. Profitez également de nos promotions régulières et de nos soldes pour acquérir des pièces de qualité à des prix imbattables.</p>
<p>Des abayas simples et élégantes à partir de quelques dizaines d'euros, disponibles dans toutes les tailles et dans un large choix de couleurs. La mode modeste accessible à toutes, c'est la promesse de Yelira.</p>`,
    searchQuery: 'abaya',
    relatedCategories: [
      { name: 'Soldes', slug: 'soldes' },
      { name: 'Abaya Simple', slug: 'abaya-simple' },
      { name: 'Abaya Noire', slug: 'abaya-noire' },
    ],
    faq: [
      { question: 'Peut-on trouver des abayas de qualité à petit prix ?', answer: 'Absolument ! Chez Yelira, nous travaillons directement avec nos fournisseurs pour proposer les meilleurs prix. Nos abayas pas chères sont confectionnées dans des matières de qualité qui résistent dans le temps.' },
      { question: 'Y a-t-il des promotions sur les abayas ?', answer: 'Oui, nous proposons régulièrement des promotions et des soldes. Inscrivez-vous à notre newsletter pour être informée en avant-première de nos offres spéciales et bénéficier de codes promo exclusifs.' },
    ],
  },
  {
    slug: 'abaya-femme',
    keyword: 'Abaya Femme',
    title: 'Abaya Femme | Toute la Collection Abayas - Yelira',
    h1: 'Abaya Femme',
    metaDescription: 'Découvrez toute notre collection d\'abayas femme sur Yelira. Abayas Dubai, papillon, kimono, brodées et plus. Tous les styles, toutes les tailles. Livraison gratuite dès 69€.',
    introText: `<p>L'<strong>abaya femme</strong> est devenue une pièce incontournable du dressing de la femme musulmane moderne. Ce vêtement long et élégant, qui couvre le corps avec pudeur, se décline aujourd'hui dans une infinité de styles, de coupes et de matières.</p>
<p>Chez Yelira, notre collection d'<strong>abayas pour femme</strong> rassemble tous les styles que vous recherchez : abaya Dubai sophistiquée, abaya papillon aérienne, abaya kimono moderne, abaya brodée artisanale, abaya satin luxueuse... Chaque modèle est sélectionné pour sa qualité et son élégance.</p>
<p>Que vous soyez à la recherche d'une abaya pour le quotidien, pour le travail, pour une cérémonie ou pour la prière, vous trouverez votre bonheur dans notre boutique en ligne. Toutes nos abayas sont disponibles dans un large éventail de tailles du XS au 5XL.</p>`,
    searchQuery: 'abaya femme',
    relatedCategories: [
      { name: 'Abaya Dubai', slug: 'abaya-dubai' },
      { name: 'Abaya Papillon', slug: 'abaya-papillon' },
      { name: 'Abaya Kimono', slug: 'abaya-kimono' },
      { name: 'Abaya Simple', slug: 'abaya-simple' },
    ],
    faq: [
      { question: 'Comment choisir son abaya femme ?', answer: 'Le choix dépend de votre usage : pour le quotidien, optez pour une abaya simple en crêpe ou nidha. Pour les occasions, préférez une abaya en satin ou brodée. Considérez aussi votre morphologie : les coupes évasées conviennent à toutes, tandis que les coupes droites sont plus épurées.' },
      { question: 'Quelle matière choisir pour une abaya ?', answer: 'Les matières les plus populaires sont le nidha (léger et fluide), le crêpe (polyvalent), le médina silk (soyeux), et le satin (habillé). Pour l\'été, privilégiez les matières légères. Pour l\'hiver, optez pour des tissus plus épais.' },
    ],
  },
  {
    slug: 'abaya-moderne',
    keyword: 'Abaya Moderne',
    title: 'Abaya Moderne | Abayas Tendance & Contemporaines - Yelira',
    h1: 'Abaya Moderne',
    metaDescription: 'Explorez notre collection d\'abayas modernes sur Yelira. Des designs contemporains et tendance pour la femme musulmane d\'aujourd\'hui. Livraison gratuite dès 69€.',
    introText: `<p>L'<strong>abaya moderne</strong> réinvente les codes de la mode modeste en proposant des designs contemporains et audacieux. Fini les abayas uniformes : place à la créativité, aux coupes innovantes et aux détails de mode qui font la différence.</p>
<p>Notre collection d'<strong>abayas modernes</strong> chez Yelira intègre les tendances actuelles : coupes asymétriques, jeux de superposition, color-blocking, manches statement, ceintures intégrées et détails architecturaux. Chaque pièce est une déclaration de style.</p>
<p>Conçues pour la femme active et moderne, ces abayas s'adaptent à tous les contextes : bureau, sorties, voyages ou événements. Elles prouvent que pudeur et modernité vont parfaitement ensemble.</p>`,
    searchQuery: 'abaya moderne tendance',
    relatedCategories: [
      { name: 'Abaya Kimono', slug: 'abaya-kimono' },
      { name: 'Abaya Manches Bouffantes', slug: 'abaya-manches-bouffantes' },
      { name: 'Abaya Dubai', slug: 'abaya-dubai' },
    ],
    faq: [
      { question: 'Qu\'est-ce qui rend une abaya "moderne" ?', answer: 'Une abaya moderne se distingue par ses coupes innovantes, ses détails de mode contemporains (manches travaillées, asymétries, ceintures) et ses associations de matières. Elle s\'inspire des tendances de la mode internationale tout en respectant les principes de pudeur.' },
      { question: 'Comment porter une abaya moderne au quotidien ?', answer: 'L\'abaya moderne se porte comme n\'importe quel vêtement tendance. Associez-la à des sneakers pour un look casual, à des talons pour un style chic, ou à des bottines pour un look urbain. Jouez avec les accessoires pour varier les styles.' },
    ],
  },
];

export function getSeoPage(slug: string): SeoPage | undefined {
  return seoPages.find((page) => page.slug === slug);
}

export function getAllSeoPageSlugs(): string[] {
  return seoPages.map((page) => page.slug);
}
