import { createIcon } from '@chakra-ui/icons';

// using `path`
export const SidebarIcon = createIcon({
  displayName: 'SidebarIcon',
  viewBox: '0 0 16 16',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <path
      id='Vector'
      d='M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z'
      stroke='white'
      stroke-width='1.33333'
      stroke-linecap='round'
      stroke-linejoin='round'
      fill='transparent'
    />,
    <path
      id='Vector_2'
      d='M6 2V14'
      stroke='white'
      stroke-width='1.33333'
      stroke-linecap='round'
      stroke-linejoin='round'
      fill='transparent'
    />,
  ],
});
