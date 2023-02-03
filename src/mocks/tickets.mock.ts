import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Argentina',
    description: '',
    date: dateToday,
    student: 'Paul'
  },
  {
    title: 'SI5 in Russia',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin'
  },
];
