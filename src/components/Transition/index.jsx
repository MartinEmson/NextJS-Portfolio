import { useState, useContext } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/context/TransitionContext";
gsap.registerPlugin(useGSAP);


// index.jsx

// The TransitionLayout component is a wrapper component that provides
// transition animations to its children. It's typically used to wrap
// the main part of your application in _app.js.

// The TransitionLayout component takes one prop: `children`. This prop
// is used to pass in the child components that you want to apply the
// transition animations to.

// The TransitionLayout component should be used in conjunction with
// the TransitionContext provider, which provides the state of the
// intro animation to the TransitionLayout and its children.

export default function TransitionLayout({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children)
    const { timeline, introFinished } = useContext(TransitionContext);
    const { contextSafe } = useGSAP(); 

    const exit = contextSafe( () => {
        timeline.play().then( () => {
            setDisplayChildren(children);
            window.scrollTo(0, 0)
            timeline.pause().clear();
        })
    })
    
    useGSAP(() => {
        
        //if page is not the current page
        if (children.key !== displayChildren.key) {
            exit();            
        }

    }, [children]) 

    return (
        <main>
            {displayChildren}
        </main>
    )
}