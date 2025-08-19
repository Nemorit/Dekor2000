import type { Project, Service, TeamMember, BlogPost, CompanyInfo } from '../types';

export const companyInfo: CompanyInfo = {
  name: "Dekor 2000",
  founded: 2003,
  experience: 20,
  projectsCompleted: 500,
  happyClients: 250,
  address: {
    street: "Atatürk Mahallesi, İnönü Caddesi No: 45",
    city: "İzmit, Kocaeli",
    postal: "41000",
    country: "Türkiye"
  },
  contact: {
    phone: "+90 262 123 45 67",
    email: "info@dekor2000.com.tr",
    website: "www.dekor2000.com.tr"
  },
  socialMedia: {
    instagram: "https://instagram.com/dekor2000",
    linkedin: "https://linkedin.com/company/dekor2000",
    facebook: "https://facebook.com/dekor2000"
  }
};

export const services: Service[] = [
  {
    id: "mermer",
    title: "Premium Mermer İşçiliği",
    description: "Doğal taş ve mermer işlemeciliğinde uzman kadromuzla, villa, otel ve konut projelerinizde en kaliteli malzemeleri kullanarak, estetik ve dayanıklı çözümler sunuyoruz.",
    icon: "🏛️",
    category: "mermer",
    features: [
      "İthal ve yerli doğal taş seçenekleri",
      "Özel kesim ve işleme teknikleri",
      "3D tasarım ve görselleştirme",
      "Montaj ve finishing hizmetleri",
      "Bakım ve onarım desteği"
    ]
  },
  {
    id: "spa",
    title: "Spa ve Wellness Merkezleri",
    description: "Modern spa ve wellness merkezi tasarımından uygulamaya kadar tüm süreçlerde deneyimli ekibimizle, lüks ve konforlu alanlar yaratıyoruz.",
    icon: "🧘‍♀️",
    category: "spa",
    features: [
      "Konsept tasarım ve planlama",
      "Hidroterapi ve su sistemleri",
      "Aromaterapi ve aydınlatma",
      "Akustik ve iklim kontrolü",
      "Premium malzeme seçimi"
    ]
  },
  {
    id: "sauna",
    title: "Sauna ve Hamam Yapımı",
    description: "Geleneksel Türk hamamı ve modern sauna teknolojilerini harmanlayarak, sağlık ve rahatlık odaklı projeler gerçekleştiriyoruz.",
    icon: "🔥",
    category: "sauna",
    features: [
      "Fince sauna ve buhar odası",
      "Geleneksel Türk hamamı",
      "Termal sistem kurulumu",
      "Doğal taş ve ahşap malzeme",
      "Havalandırma ve yalıtım"
    ]
  },
  {
    id: "havuz",
    title: "Havuz Projeleri",
    description: "İç ve dış mekan havuz yapımında uzmanlaşmış kadromuzla, güvenli, estetik ve işlevsel havuz çözümleri sunuyoruz.",
    icon: "🏊‍♂️",
    category: "havuz",
    features: [
      "Olimpik ve yarı olimpik havuzlar",
      "Termal ve terapötik havuzlar",
      "Su filtrasyon sistemleri",
      "Işıklandırma ve otomasyon",
      "Çevre düzenlemesi ve peyzaj"
    ]
  },
  {
    id: "spor",
    title: "Spor Tesisleri",
    description: "Fitness merkezleri, spor salonları ve rekreasyon alanları için fonksiyonel ve modern tasarımlar geliştiriyoruz.",
    icon: "🏋️‍♂️",
    category: "spor",
    features: [
      "Fitness merkezi tasarımı",
      "Spor salonu zeminleri",
      "Ekipman alanı planlaması",
      "Soyunma odası ve sosyal alanlar",
      "Güvenlik ve erişilebilirlik"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "thermal-spa-kocaeli",
    title: "Kocaeli Termal Spa Merkezi",
    description: "5 yıldızlı otel bünyesinde yer alan premium spa merkezi projesi. 2000m² alana sahip tesis, modern spa konsepti ile doğal termal kaynakları birleştiren lüks bir deneyim sunuyor.",
    category: "spa",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600"
    ],
    location: "Kocaeli",
    completedDate: "2024",
    client: "Kocaeli Termal Resort",
    features: [
      "10 adet terapi odası",
      "Termal havuzlar",
      "Sauna ve buhar odası",
      "Relaksasyon alanları",
      "Premium mermer kaplama"
    ]
  },
  {
    id: "luxury-villa-marble",
    title: "İzmit Luxury Villa Mermer Uygulaması",
    description: "Özel villa projesi için kapsamlı mermer uygulaması. İtalyan Carrara mermeri kullanılarak gerçekleştirilen proje, iç ve dış mekanlarda estetik bir bütünlük oluşturuyor.",
    category: "mermer",
    images: [
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
    ],
    location: "İzmit",
    completedDate: "2024",
    client: "Özel Villa Sahibi",
    features: [
      "Carrara mermer zemin",
      "Mermer merdiven ve korkuluklar",
      "Banyo mermer kaplamaları",
      "Mutfak tezgah uygulaması",
      "Dış cephe doğal taş"
    ]
  },
  {
    id: "hotel-turkish-bath",
    title: "Otel Türk Hamamı Projesi",
    description: "Geleneksel Türk hamamı mimarisi ile modern konfor standartlarının buluştuğu proje. Doğal taşlar ve geleneksel teknikler kullanılarak inşa edilmiştir.",
    category: "sauna",
    images: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800"
    ],
    location: "Kocaeli",
    completedDate: "2023",
    client: "Boutique Hotel",
    features: [
      "Geleneksel hamam mimarisi",
      "Doğal taş göbek taşı",
      "Mermer kurna ve lavabolar",
      "Termal sistem kurulumu",
      "Atmosfer aydınlatması"
    ]
  },
  {
    id: "sports-center-pool",
    title: "Spor Merkezi Havuz Kompleksi",
    description: "Modern spor merkezi bünyesinde olimpik standartlarda havuz kompleksi. Yüzme havuzu, çocuk havuzu ve rehabilitasyon havuzu içeren kapsamlı proje.",
    category: "havuz",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800"
    ],
    location: "İzmit",
    completedDate: "2023",
    client: "İzmit Spor Merkezi",
    features: [
      "25m olimpik havuz",
      "Çocuk eğitim havuzu",
      "Jacuzzi ve terapi havuzu",
      "Otomatik filtrasyon sistemi",
      "LED aydınlatma sistemi"
    ]
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "mehmet-demir",
    name: "Mehmet Demir",
    position: "Kurucu & Genel Müdür",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
    description: "20 yılı aşkın deneyimi ile mermer işçiliği ve spa tesisleri konusunda uzman. İnşaat mühendisliği eğitimi almış olup, sektörde çok sayıda başarılı projeye imza atmıştır.",
    experience: 20
  },
  {
    id: "ayse-kaya",
    name: "Ayşe Kaya",
    position: "İç Mimar & Tasarım Uzmanı",
    image: "https://images.unsplash.com/photo-1494790108755-2616c6a3a0e7?w=300",
    description: "Spa ve wellness merkezi tasarımında uzman iç mimar. Modern tasarım anlayışı ile fonksiyonelliği harmanlayarak, estetik ve kullanışlı alanlar yaratmaktadır.",
    experience: 12
  },
  {
    id: "ali-ozturk",
    name: "Ali Öztürk",
    position: "Proje Müdürü",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    description: "İnşaat mühendisi olan Ali Bey, teknik çizimlerin uygulamaya aktarılması ve proje yönetimi konularında 15 yıllık deneyime sahiptir.",
    experience: 15
  },
  {
    id: "fatma-celik",
    name: "Fatma Çelik",
    position: "Satış ve Müşteri İlişkileri",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
    description: "Müşteri memnuniyeti odaklı yaklaşımı ile satış süreçlerini yöneten Fatma Hanım, proje danışmanlığı konusunda geniş bilgi birikimine sahiptir.",
    experience: 8
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "spa-mermer-avantajlari",
    title: "Spa Merkezlerinde Mermer Kullanımının Avantajları",
    excerpt: "Spa merkezlerinde mermer kullanımının estetik ve pratik faydaları, doğru mermer seçimi ve bakım önerileri.",
    content: "Spa merkezlerinde mermer kullanımı hem estetik hem de pratik açıdan birçok avantaj sunar...",
    author: "Ayşe Kaya",
    publishDate: "2024-12-01",
    readTime: 5,
    tags: ["spa", "mermer", "tasarım", "wellness"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
    slug: "spa-merkezlerinde-mermer-kullanimi"
  },
  {
    id: "hamam-tasarim-noktalari",
    title: "Modern Hamam Tasarımında Dikkat Edilecek Noktalar",
    excerpt: "Geleneksel hamam mimarisi ile modern konfor standartlarını harmanlayan tasarım prinsipleri.",
    content: "Modern hamam tasarımında geleneksel değerler ile çağdaş ihtiyaçları harmanlama sanatı...",
    author: "Mehmet Demir",
    publishDate: "2024-11-28",
    readTime: 7,
    tags: ["hamam", "tasarım", "geleneksel", "modern"],
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600",
    slug: "modern-hamam-tasarim-noktalari"
  },
  {
    id: "izmit-spor-tesisi-yatirimi",
    title: "İzmit'te Spor Tesisi Yatırımı Yapmak",
    excerpt: "İzmit bölgesinde spor tesisi yatırımının avantajları, pazar analizi ve başarı faktörleri.",
    content: "İzmit'in gelişen ekonomisi ve artan nüfusu ile spor tesisi yatırımları giderek daha cazip hale geliyor...",
    author: "Ali Öztürk",
    publishDate: "2024-11-25",
    readTime: 6,
    tags: ["spor tesisi", "yatırım", "İzmit", "fitness"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
    slug: "izmit-spor-tesisi-yatirimi"
  }
];

export const seoKeywords = [
  "İzmit mermer",
  "Kocaeli spa yapımı", 
  "hamam sauna inşaat",
  "Kocaeli yapı şirketi",
  "İzmit inşaat",
  "mermer işçiliği",
  "spa merkezleri",
  "termal tesisler",
  "luxury villa mermer",
  "havuz yapımı",
  "spor tesisi inşaatı"
];
