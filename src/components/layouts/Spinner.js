// import React from 'react';
// import Loader from 'react-loader-spinner';
// const Spinner = () => {
//     return (
//         <div>
//             <Loader
//                 type="TailSpin"
//                 color="#e62429"
//                 height={100}
//                 width={100}
//             />
//         </div>
//     )
// }

// export default Spinner

import React from 'react';
import BounceLoader from "react-spinners/BounceLoader";

const Spinner = () => {
   
    const spinnerStyle = {
        display:'block',
        margin: '0 auto',
        borderColor: '#e62429'
    }


    return (
        <div className="sweet-loading">
        <BounceLoader
          css={spinnerStyle}
          size={50}
          color={"#d1d1d1d1"}
        />
      </div>
    )
}



export default Spinner

