import React from 'react';
import './Page.css';


const Page = (props:any) => {

    let {pageRef, nospacer, nospacerbottom, nospacertop, children, ...extraProps} = props

    return (
        <div ref={pageRef} className={"page"} {...extraProps}>
            {(nospacertop || nospacer) ? "" : <div className="spacer-top"></div>}
            {children}
            {(nospacerbottom || nospacer) ? "" : <div className="spacer-bottom"></div>}
        </div>
    );
};

export default Page;
