import React from 'react';
// import { homeActions } from '../config/data';

const Actions = ({ actions }) => {

    return (
      <div className="action">
        
        {actions && actions?.map(item =>(
            <section className="action__item" key={item.id}>
                <h4 className="action__title">
                    {item.title}
                </h4>
                {item?.links && (item?.links?.map(link => (<a href={link?.to} className='link' key={link.id}>{link?.title}</a>)))} 
                {item?.subItem?.map(sItem => (
                    <section className="action__subitem" key={sItem.id}>
                        <h4 className="subitem__title">
                            {sItem?.title}
                        </h4>
                        {sItem?.links && (sItem?.links.map(subLink => (<a href={subLink?.to} className='link' key={subLink.id}>{subLink?.title}</a>)))}
                    </section>
                ))}
            </section>
        ))}

      </div>
  )
}

export default Actions;