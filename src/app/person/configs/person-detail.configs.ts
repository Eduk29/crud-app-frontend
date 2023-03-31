import { BreadcrumbItem } from '../../shared/components/breadcrumb/breadcrumb-item.model';

export const personDetailBreadcrumbs: BreadcrumbItem[] = [
  {
    id: 1,
    name: 'Home',
    isActive: false,
    isHome: true,
    routerLink: ['../..', 'home'],
  },
  {
    id: 2,
    name: 'Person Details',
    isActive: true,
    isHome: false,
  },
];
