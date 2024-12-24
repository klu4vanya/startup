import Carousel from "react-material-ui-carousel";
import styled from "styled-components";

export const StyledCarousel = styled(Carousel)`
    height: 550px;
    & > div{
        height: 500px 
    }
    &  img{
        width: auto;
        height: 100% !important;
        object-fit: contain                         
    }
`