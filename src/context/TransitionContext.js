import React, { useState, createContext } from "react"
import gsap from "gsap"


// Create a new context for managing transitions

const TransitionContext = createContext({})

// The TransitionProvider component is a context provider for the transition timeline.
// It provides a paused gsap timeline to its children via context.
// The timeline can be controlled (played, stopped, etc.) by the children components.

const TransitionProvider = ({ children }) => {

  // Initialize a paused gsap timeline and provide a function to update it


  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  )

    // Provide the timeline and the function to update it to children components


  return (
    <TransitionContext.Provider
      value={{
        timeline,
        setTimeline,
      }}
    >
      {children}
    </TransitionContext.Provider>
  )
}

export { TransitionContext, TransitionProvider }
