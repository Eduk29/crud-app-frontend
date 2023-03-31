export interface BreadcrumbItem {
  id: number;
  isActive: boolean;
  isHome: boolean;
  name: string;
  routerLink?: string[];
}
