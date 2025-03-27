import React from 'react'
import { SelectedPage } from './types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionBtn = ({ children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
        className='text-sm rounded-md border-primary-300 hover:text-white hover:bg-primary-300 px-10 py-2 border-2'
        onClick={() => setSelectedPage(SelectedPage.Contact)}
        href={`#${SelectedPage.Contact}`}
        >
            {children}
        </AnchorLink>
  )
}

export default ActionBtn;