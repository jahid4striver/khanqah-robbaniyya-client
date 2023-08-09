import React from 'react';
import loading3 from "../../assets/images/loading3.gif"

const Loader = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            {/* <progress class="progress w-56"></progress> */}
            <img className='w-56' src={loading3} alt="" />

        </div>
    );
};

export default Loader;