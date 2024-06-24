import React, { useState } from 'react';
import PropTypes from 'prop-types';

const IframeWithPoster = ({ src, poster, ...props }) => {
    const [isPosterVisible, setIsPosterVisible] = useState(true);
    const [iframeSrc, setIframeSrc] = useState('');

    const handlePosterClick = () => {
        setIsPosterVisible(false);
        setIframeSrc(`${src}?autoplay=1`)
    };

    const handleIframeLoad = () => {
        setIsPosterVisible(false);
    };
  

    return (
        <div className="relative w-full h-full py-5 flex items-center justify-center bg-[#0D0E12]">
            {isPosterVisible && (
                <img
                    src={poster}
                    alt="Poster Image"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] md:w-[46.25rem] md:h-[30rem] object-contain cursor-pointer "
                    onClick={handlePosterClick}
                />
            )}
            <iframe className='w-[46.25rem] h-full '
                src={isPosterVisible? '':iframeSrc}
                onLoad={handleIframeLoad}
                {...props}
            ></iframe>
        </div>
    );
};

IframeWithPoster.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default IframeWithPoster;

