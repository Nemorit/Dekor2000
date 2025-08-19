export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'mermer' | 'spa' | 'sauna' | 'havuz' | 'spor';
  images: string[];
  location: string;
  completedDate: string;
  client: string;
  features: string[];
  beforeImage?: string;
  afterImage?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: 'mermer' | 'spa' | 'sauna' | 'havuz' | 'spor';
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  description: string;
  experience: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  budget?: string;
  timeline?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: number;
  tags: string[];
  image: string;
  slug: string;
}

export interface CompanyInfo {
  name: string;
  founded: number;
  experience: number;
  projectsCompleted: number;
  happyClients: number;
  address: {
    street: string;
    city: string;
    postal: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  socialMedia: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
}
