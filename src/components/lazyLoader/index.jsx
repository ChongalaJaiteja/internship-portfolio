import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { getImageUrl } from "../../utils/imageUtils";
import "./index.css";

const LazyImageLoader = ({
    imageSrc,
    altName,
    width = "100%",
    height = "100%",
    threshold = 120,
    className,
}) => {
    console.log(className);
    return (
        <LazyLoadImage
            alt={altName}
            height={height}
            width={width}
            effect="blur"
            src={getImageUrl(imageSrc)}
            threshold={threshold}
            draggable="false"
            className={className}
        />
    );
};

export default LazyImageLoader;
