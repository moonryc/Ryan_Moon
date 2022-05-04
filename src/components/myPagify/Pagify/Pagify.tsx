import React, {createRef, Fragment, useContext, useEffect, useState} from 'react';
import {BottomNavigation, BottomNavigationAction, Box} from "@mui/material";
import './Pagify.css';
import ResponsiveNav from "../ResponsiveNav/ResponsiveNav";
import Page from "../Page/Page";
import {ContextStore} from "../../../context/ContextStore";
import {SectionedScrollBar} from "../../SectionedScrollBar";


const Pagify = (props: any) => {

    const {isModalOpen} = useContext(ContextStore);

    const largeContainerRef = createRef<HTMLDivElement>();
    const [pageRefs, setPageRefs] = useState<React.RefObject<HTMLDivElement>[]>([React.createRef<HTMLDivElement>()]);

    const [currentPage, setCurrentPage] = useState<number>(0);
    const [animLocked, setAnimLocked] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [height, setHeight] = useState<number>(window.innerHeight);

    const [lastPage, setLastPage] = useState<number>(0)
    const [animLockTimer, setAnimLockTimer] = useState<Date>(new Date());

    const [lastTouch, setLastTouch] = useState<React.Touch | null>(null);

    /**
     * Handles where the user first put their finger down
     * @param e
     */
    const handleOnTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setLastTouch(e.touches[0])
    }

    /**
     * Handles the touch for when the user drags their finger
     * @param e
     */
    const handleOnTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        let thisTouch = e.touches[0];

        //Calculate the change in x and y from where the finger started and where the finger ended
        //@ts-ignore
        let dx = thisTouch.pageX - lastTouch.pageX;
        //@ts-ignore
        let dy = thisTouch.pageY - lastTouch.pageY;

        //update last touch
        setLastTouch(thisTouch);

        //if the finger moved more vertically than horizontally and if so simulate a scroll wheelevent and put a negative on dy for correct scrolling direction
        let isPrimaryMovementVertical = Math.abs(dx) < Math.abs(dy);
        if (isPrimaryMovementVertical) {
            let simEvent = {
                deltaY: -dy
            }
            handleParentWheel(simEvent);
        }
    }

    /**
     * Handler for scrolling
     * @param e
     */
    const handleParentWheel = (e: any) => {
        let scrollPadding = 2;

        //turn page in direction of scroll
        let nextPage = currentPage;
        if (e.deltaY > 0) {
            nextPage = currentPage + 1;
        }
        if (e.deltaY < 0) {
            nextPage = currentPage - 1;
        }

        //Clamp to not overscroll the top or bottom of the subpages
        nextPage = nextPage < 0 ? 0 : (nextPage > props.children.length - 1 ? props.children.length - 1 : nextPage);

        //Check if animation is done by checking if the top of the page is at the top of the screen
        //Round the height of the top to the screen to the top of the Large-container and modulo the height of the screen
        //if the number is 0 that means it is no longer animating
        // @ts-ignore
        let notAnimating = Math.round(largeContainerRef.current.getBoundingClientRect().y) % Math.round(height) === 0;

        //Is the element a scrolling element that's in the middle of scrolling itself?
        let elem = pageRefs[currentPage].current;

        // @ts-ignore
        let upBlocked = elem.scrollTop > scrollPadding;
        // @ts-ignore
        let downBlocked = elem.scrollTop + height + scrollPadding < elem.scrollHeight


        //if trying to go upwards and blocked
        let cantUp = e.deltaY < 0 && upBlocked;
        //if trying to go down and blocked
        let cantDown = e.deltaY > 0 && downBlocked;

        // console.log( elem.scrollTop, this.state.height, elem.scrollHeight);

        //if you can go either up or down and the animation is not locked and it is not animating
        let shouldScroll = notAnimating && !cantUp && !cantDown && !animLocked;
        if (shouldScroll && !isModalOpen) {
            //update last and current page
            setLastPage(currentPage)
            setCurrentPage(nextPage)

            //Safety for 2 event triggers in one frame
            //Lock animation and set lock timer
            setAnimLocked(true);
            setAnimLockTimer(new Date());
        } else {
            //if it is not animating and the animation is locked remove the animation lock after
            // a change in 100 miliseconds
            if (notAnimating && animLocked) {
                let animDelta = new Date().getTime() - animLockTimer.getTime();
                if (animDelta > 100) {
                    setAnimLocked(false);
                }

            }
        }

    }


    //Manually set page, this gets passed down to children so that they can set the page too
    //Sets the scroll value to 0 when page is manually set
    const setPage = (newValue: number) => {
        let newPageRefs = pageRefs
        //@ts-ignore
        newPageRefs[newValue].current.scrollTop = 0
        setCurrentPage(newValue)
        setPageRefs(newPageRefs)
    }

    const resizeHandler = () => {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }

    /**
     * Handle Resize
     */
    useEffect(() => {
        window.addEventListener('resize', resizeHandler)
        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])

    /**
     * Create one ref per Child/ update refs on props change
     */
    useEffect(() => {
        let refs = []
        for (let i = 0; i < props.children.length; i++) {
            refs.push(React.createRef<HTMLDivElement>());
        }
        setPageRefs(refs)
    }, [props])

    return (
        <Fragment>
            {/*This sircumvents the issue of finding the client height*/}
            <BottomNavigation onChange={(event, newValue) => setPage(newValue)} showLabels component={ResponsiveNav}>
                {props.children.map((child: any) => (
                    <></>
                    // <BottomNavigationAction key={child.props.label} label={child.props.label} icon={child.props.icon}/>
                ))}
            </BottomNavigation>

            <SectionedScrollBar page={currentPage} setPage={setCurrentPage}/>

            <div
                className="page-container"
                onWheel={handleParentWheel}
                onTouchStart={(e) => handleOnTouchStart(e)}
                onTouchMove={(e) => handleOnTouchMove(e)}>

                <div ref={largeContainerRef} className={"large-container"} style={{
                    height: height * props.children.length,
                    transform: `translateY(` + (-currentPage * height) + `px)`
                }}>
                    {props.children.map((child: any) => {
                        let keyIndex = props.children.indexOf(child);
                        //Give every child their height, width, the current page, and a method to set the current page
                        let childWithSetPage = React.cloneElement(child, {
                            setPage: setPage,
                            currentPage: currentPage,
                            width: width,
                            height: height
                        });

                        return (
                            <Page
                                style={{ width: width, height: height }}
                                pageRef={pageRefs[keyIndex]}
                                key={keyIndex} {...child.props}>
                                {childWithSetPage}

                                {/*Spacer because navbar can be up to 112px tall*/}
                                {child.props.nospacer ? "" : <div className="extra-scroll">&nbsp;</div>}
                            </Page>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    );
};

export default Pagify;
