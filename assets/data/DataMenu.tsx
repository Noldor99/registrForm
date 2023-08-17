const Arrow = () => (
  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.46967 6.76978C5.76256 7.06267 6.23744 7.06267 6.53033 6.76978L11.3033 1.99681C11.5962 1.70392 11.5962 1.22904 11.3033 0.936151C11.0104 0.643258 10.5355 0.643258 10.2426 0.936151L6 5.17879L1.75736 0.936151C1.46447 0.643258 0.989593 0.643258 0.696699 0.936151C0.403806 1.22904 0.403806 1.70392 0.696699 1.99681L5.46967 6.76978ZM5.25 5.20813V6.23945H6.75V5.20813H5.25Z" />
  </svg>

)

export const DataMenu = [
  {
    id: 1,
    title: 'Home',
    icon: null,
    bold: false
  },
  {
    id: 2,
    title: 'Features',
    icon: <Arrow />,
    bold: false
  },
  {
    id: 3,
    title: 'Blog',
    icon: null,
    bold: false
  },
  {
    id: 4,
    title: 'Shop',
    icon: null,
    bold: false
  },
  {
    id: 5,
    title: 'About',
    icon: null,
    bold: false
  },
  {
    id: 6,
    title: 'Contact',
    icon: null,
    bold: true
  },
]