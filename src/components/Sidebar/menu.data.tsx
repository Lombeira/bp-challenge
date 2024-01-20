import Home from '../../assets/icons/home.svg';
import User from '../../assets/icons/user.svg';
import FileText from '../../assets/icons/file-text.svg';
import Archive from '../../assets/icons/archive.svg';
import Camera from '../../assets/icons/camera.svg';
import Clock from '../../assets/icons/clock.svg';
import Monitor from '../../assets/icons/monitor.svg';
import DollarSign from '../../assets/icons/dollar-sign.svg';
import Table from '../../assets/icons/table.svg';
import Send from '../../assets/icons/send.svg';
import Package from '../../assets/icons/package.svg';
import File from '../../assets/icons/file.svg';
import Settings from '../../assets/icons/settings.svg';
import CreditCard from '../../assets/icons/credit-card.svg';
import MinimizeSecondary from '../../assets/icons/minimize-2.svg';
import Minimize from '../../assets/icons/minimize.svg';

export const menuData = [
  {
    items: [
      {
        title: 'Meu Painel',
        icon: Home,
        link: '/dashboard/home',
        id: 1,
      },
    ],
  },
  {
    label: 'BENEFICIÁRIOS',
    items: [
      {
        title: 'Beneficiários',
        icon: User,
        link: '/dashboard/beneficiaries',
        id: 2,
      },
    ],
  },
  {
    label: 'PROPOSTAS',
    items: [
      {
        title: 'Nova proposta',
        icon: FileText,
        link: '/dashboard/proposals',
        id: 3,
      },
      {
        title: 'Painel Propostas',
        icon: Archive,
        link: '/dashboard/proposals-panel',
        id: 4,
      },
      {
        title: 'Vistoria',
        icon: Camera,
        link: '/dashboard/vistory',
        id: 5,
      },
      {
        title: 'Pré Propostas',
        icon: Clock,
        link: '/dashboard/pre-proposals',
        id: 6,
      },
      {
        title: 'Propostas B2C',
        icon: Monitor,
        link: '/dashboard/proposals-b2c',
        id: 7,
      },
    ],
  },
  {
    label: 'FINANCEIRO',
    items: [
      {
        title: 'Fechamento',
        icon: DollarSign,
        link: '/dashboard/closing',
        id: 8,
      },
      {
        title: 'Painel Financeiro',
        icon: Table,
        link: '/dashboard/financial-panel',
        id: 9,
      },
      {
        title: 'Arquivo Remessa',
        icon: Send,
        link: '/dashboard/remessa-arquive',
        id: 10,
      },
      {
        title: 'Arquivo Retorno',
        icon: Package,
        link: '/dashboard/return-arquive',
        id: 11,
      },
      {
        title: 'Extrato',
        icon: File,
        link: '/dashboard/extract',
        id: 12,
      },
      {
        title: 'Gestão Status',
        icon: Settings,
        link: '/dashboard/status-management',
        id: 13,
      },
      {
        title: 'Pagamentos Incosistentes',
        icon: CreditCard,
        link: '/dashboard/inconsistent-payments',
        id: 14,
      },
    ],
  },
  {
    label: 'EVENTOS',
    items: [
      {
        title: 'Novo Evento',
        icon: MinimizeSecondary,
        link: '/dashboard/new-event',
        id: 15,
      },
      {
        title: 'Painel Evento',
        icon: Minimize,
        link: '/dashboard/event-panel',
        id: 16,
      },
    ],
  },
];
