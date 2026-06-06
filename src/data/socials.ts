import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";

export type IconComponent = React.ComponentType<{ className?: string }>;

export interface Social {
  id: string;
  label: string;
  href: string;
  icon: IconComponent;
}

export const EMAIL = "ebrahimamin391@gmail.com";

export const socials: Social[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Ibrahim-Rezq",
    icon: GithubIcon,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/ibrahimamin391",
    icon: LinkedinIcon,
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
];

export const CV_PATH = "/Ibrahim-Amin-CV.pdf";
