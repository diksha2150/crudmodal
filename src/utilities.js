const commonUtilities = {
  card2:
    'lg:bg-[#ffffffff] lg:flex lg:py-[16px] lg:px-[24px] lg:items-center lg:gap-[20px] lg:w-[100%] lg:rounded-[0px]',
  chip1:
    'lg:bg-[#eff5f5ff] lg:items-center lg:text-[#012a38ff] lg:py-[0px] lg:px-[6px] lg:whitespace-no-wrap lg:w-[fit-content] lg:text-[10px] lg:font-rubik lg:rounded-[4px]',
  listitem2: 'lg:flex lg:gap-[5px] lg:flex-row lg:justify-center',
  listitem:
    'lg:flex lg:flex-row lg:justify-between lg:items-center lg:p-[10px]',
  link2: 'lg:flex lg:flex-col lg:gap-[5px] lg:no-underline',
  link3:
    'lg:flex lg:text-[14px] lg:w-[fit-content] lg:items-center lg:gap-[7px] lg:no-underline lg:cursor-pointer',
  parent:
    'lg:flex lg:flex-col lg:bg-error lg:gap-y-[24px] lg:p-[20px] lg:w-[100%] lg:leading-[normal]',
  text: 'lg:text-secondary lg:text-[15px]',
  card: 'lg:flex lg:None-base-100 lg:gap-y-[20px] lg:flex-col lg:p-[16px] lg:bg-error',
  panel: 'lg:gap-y-[10px] lg:flex lg:flex-col',
  flexcolumn: 'lg:flex lg:flex-col lg:gap-y-[10px]',
  flexrow: 'lg:flex lg:items-center lg:gap-x-[1rem]',
  alignstart: 'lg:items-start',
  li: 'lg:flex lg:text-accent lg:p-[10px] lg:w-[90%] lg:gap-x-[10px]',
  head: 'lg:text-[16px] lg:font-[600]',
  text: 'lg:bg-secondary lg:None-accent lg:p-[0.7rem] lg:text-neutral',
  gcard: 'lg:grid lg:grid-cols-3 lg:w-[100%] lg:gap-[30px] lg:p-[20px]',
  gridcard:
    'lg:flex lg:justify-center lg:flex-col lg:items-center lg:w-[100%] lg:gap-y-[10px] lg:p-[30px]',
  childcards: 'lg:bg-neutral lg:py-[15px] lg:px-[20px] lg:w-[100%]',
  inputbox:
    'lg:bg-neutral lg:None-secondary lg:text-secondary lg:w-[63%] lg:p-[12px] lg:rounded-[4px] lg:text-[14px]',
  columncontainer: 'lg:items-start',
  label: 'lg:w-[fit-content]',
  input:
    'lg:w-[100%] lg:text-[16.5px] lg:font-rubik lg:whitespace-no-wrap lg:overflow-hidden',
  card: 'lg:bg-base-100 lg:p-[1rem] lg:flex lg:items-center lg:gap-x-[1rem] lg:w-[100%] lg:rounded-[4px]',
  boxcontainer:
    'lg:bg-neutral lg:flex lg:flex-col lg:gap-y-[10px] lg:p-[24px] lg:rounded-[8px] lg:max-w-[1055px] lg:w-[100%]',
  divider: 'lg:bg-base-100 lg:h-[0.3px] lg:w-[100%]',
  listlistitem:
    'lg:flex lg:flex-row lg:justify-between lg:items-center lg:w-[100%] lg:p-[1rem] lg:None-success',
  headingstyle:
    'lg:leading-[normal] lg:text-[15px] lg:font-[600] lg:text-lite-gray lg:whitespace-no-wrap lg:font-roboto',
  headingstyle2:
    'lg:leading-[normal] lg:text-[15px] lg:font-[600] lg:text-primary lg:whitespace-no-wrap lg:font-roboto',
  fontstyle2:
    'lg:text-dark-lack lg:text-[17px] lg:leading-[normal] lg:font-sans lg:font-[600]',
  defaultbtn:
    'lg:py-[7px] lg:px-[12px] lg:bg-White-Snow lg:rounded-[8px] lg:leading-[normal] lg:text-[14px] lg:font-[600]',
  text: 'lg:text-[12px] lg:font-[600] lg:text-secondary',
  colflex: 'lg:flex lg:flex-col',
  fontStyle1:
    'lg:leading-[normal] lg:text-[15px] lg:text-Deep-black lg:font-roboto lg:font-[600]',
  fontstyle3:
    'lg:text-[#4d4d4dff] lg:text-[20px] lg:leading-[normal] lg:font-[600] lg:font-sans',
  btnstyle:
    'lg:bg-accent lg:text-Deep-black lg:None-gray-10 lg:py-[12px] lg:px-[15px] lg:w-[100%] lg:font-[600] lg:text-[15px] lg:font-sans lg:flex lg:items-center lg:justify-center',
  dividerstyle: 'lg:bg-gray-10 lg:h-[2px] lg:w-[100%]',
  parent: 'lg:bg-warning lg:w-[100%] lg:p-[20px]',
  card: 'lg:flex lg:flex-col lg:gap-y-[10px] lg:items-center',
  tabelcell2: 'lg:bg-bg-white lg:table-cell lg:py-[14px] lg:px-[22px]',
  Card: 'lg:bg-[#ffffffff] lg:flex lg:p-[24px] lg:gap-x-[10px] lg:items-center lg:rounded-[8px] lg:h-[90%]',
  link1:
    'lg:flex lg:items-center lg:text-[black] lg:no-underline lg:p-[15px] lg:justify-between',
  tablerow: 'lg:w-[100%] lg:table-row lg:font-sans',
  tablecell: 'lg:table-cell lg:p-[14px] lg:font-sans',
  fontStyle2:
    'lg:font-sans lg:leading-[normal] lg:text-[16px] lg:text-Deep-black',
  drowpdown: 'lg:bg-[None] lg:rounded-[4px]',
  cardcontainer:
    'lg:flex lg:flex-col lg:gap-y-[30px] lg:py-[24px] lg:px-[0] lg:w-[100%] lg:rounded-[8px]',
  typography:
    'lg:None-neutral lg:flex lg:flex-col lg:gap-y-[30px] lg:py-[5px] lg:px-[20px] lg:w-[100%] lg:rounded-[8px] lg:text-[22px] lg:text-base-100',
  labeltypography: 'lg:self-start lg:text-pantone lg:font-[500] lg:text-[15px]',
  Container: 'lg:flex lg:flex-col lg:w-[100%]',
  label:
    'lg:self-start lg:text-accent lg:font-[600] lg:text-[19px] lg:tracking-[0.6px]',
  radio: 'lg:flex lg:w-[30px] lg:h-[19px] lg:mt-[3px]',
  select: 'lg:w-[100%] lg:bg-neutral lg:p-[10px] lg:text-base-100',
  input:
    'lg:w-[100%] lg:bg-neutral lg:p-[10px] lg:text-[#fff] lg:rounded-[5px]',
  boxclass:
    'lg:bg-[#12181fff] lg:text-typocolor lg:flex lg:flex-col lg:gap-y-[15px] lg:pt-[24px] lg:w-[100%] lg:rounded-[8px]',
  heading: 'lg:text-[22px] lg:font-[600]',
  outlinebutton:
    'lg:bg-[None] lg:text-default lg:font-[600] lg:items-center lg:None-primary-border lg:w-[fit-content]',
  card: 'lg:None-base-100 lg:w-[100%] lg:py-[24px] lg:px-[8px] lg:rounded-[4px] lg:items-center lg:justify-center lg:flex',
  img: 'lg:h-[100%] lg:w-[100%] lg:object-contain',
  list: 'lg:p-[0px] lg:w-[100%]',
};

export default commonUtilities;
