import React from 'react';

export const Hello = () => {
    
   React.useEffect(() => {
        
    console.log("render");

    const onMouseMove = e => {
        console.log(e, "attention mouse moving")
    }

    window.addEventListener('mousemove', onMouseMove)
    
        // inserting cleanup function, unmount
    
        return() => {
          console.log("unmount");

          window.removeEventListener("mousemove", onMouseMove)
        }
      }, []);
    
    
    
    
    return <div>Hello</div>
}