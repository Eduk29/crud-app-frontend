import { BreadcrumbItem } from '../../shared/components/breadcrumb/breadcrumb-item.model';

export const personEditionBreadcrumbs: BreadcrumbItem[] = [
  {
    id: 1,
    name: 'Home',
    isActive: false,
    isHome: true,
    routerLink: ['../../..', 'home'],
  },
  {
    id: 2,
    name: 'Person Edition',
    isActive: true,
    isHome: false,
  },
];
