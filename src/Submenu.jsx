import React, { useRef } from 'react'
import { useGlobalContext } from './Context'
import sublinks from './data';

const Submenu = () => {
  const {pageId,setPageId} = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const subMenuContainer = useRef(null)

  const handleMouseLeave = (event) => {
    const submenu = subMenuContainer.current
    const result = submenu.getBoundingClientRect()
    const {clientX,clientY} = event;
    const {left,right,bottom} = result
    console.log(event);

    if(left > clientX || right < clientX || bottom < clientY){
      setPageId(null)

    }

  }
  return (
    <div className={currentPage ? 'submenu show-submenu' : 'submenu'} onMouseLeave={handleMouseLeave} ref={subMenuContainer}>
      <h5>{currentPage?.page}</h5>
      <div className="submenu-links" style={{gridTemplateColumns: currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr'}}>
        {currentPage?.links?.map((link) => {
          const {id,url,label,icon} = link
          return <a href={url} key={id}>
            {icon}
            {label}
          </a>
        })}
      </div>
    </div>
  )
}

export default Submenu