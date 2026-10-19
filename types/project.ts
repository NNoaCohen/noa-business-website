export interface ProjectImage {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  featured: boolean;
  name: string;
  description: string;
  websiteUrl: string;
  desktopImage: ProjectImage;
  mobileImage: ProjectImage;
  gallery: ProjectImage[];
  testimonial: {
    quote: string;
    author: string;
    organization: string;
  };
}
