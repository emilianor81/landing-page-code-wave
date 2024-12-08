import { Mail, MapPin, Phone } from 'lucide-react';

export const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    info: "+34 123 456 789"
  },
  {
    icon: Mail,
    title: "Email",
    info: "contacto@tuempresa.com"
  },
  {
    icon: MapPin,
    title: "Ubicación",
    info: "Madrid, España"
  }
] as const;