import { TSocial } from "../social.types";

const FB: React.FC<TSocial> = ({text, bg}) => {
  return (
    <svg
       width="33.599876"
       height="33.599998"
       viewBox="0 0 33.599876 33.599998"
       fill="none"
       version="1.1"
       id="svg3"
       xmlns="http://www.w3.org/2000/svg"
      >
      <g
         filter="url(#filter0_d_23_153)"
         id="g1"
         transform="translate(-18.000122,-5)">
        <circle
           cx="34.800098"
           cy="21.7999"
           r="16.7999"
           fill="#1a202c"
           id="circle1" />
      </g>
      <path
         d="M 16.799878,-2.0976482e-8 C 7.5213779,-2.0976482e-8 -1.2207552e-4,7.5215 -1.2207552e-4,16.8 c 0,9.2785 7.52149997552,16.8 16.80000007552,16.8 9.2785,0 16.8,-7.5215 16.8,-16.8 0,-9.2785 -7.5215,-16.800000020976483 -16.8,-16.800000020976483 z M 20.779378,11.6095 h -2.5252 c -0.2993,0 -0.6318,0.3938 -0.6318,0.917 V 14.35 h 3.1588 l -0.4778,2.6005 h -2.681 v 7.8068 h -2.9802 v -7.8068 h -2.7038 V 14.35 h 2.7038 v -1.5295 c 0,-2.1945 1.5225,-3.9777 3.612,-3.9777 h 2.5252 z"
         fill="#ffffff"
         id="path1" />
      <defs
         id="defs3">
        <filter
           id="filter0_d_23_153"
           x="0.00012207"
           y="0"
           width="69.599899"
           height="69.599899"
           filterUnits="userSpaceOnUse"
           colorInterpolationFilters="sRGB">
          <feFlood
             floodOpacity="0"
             result="BackgroundImageFix"
             id="feFlood1" />
          <feColorMatrix
             in="SourceAlpha"
             type="matrix"
             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
             result="hardAlpha"
             id="feColorMatrix1" />
          <feOffset
             dy="13"
             id="feOffset1" />
          <feGaussianBlur
             stdDeviation="9"
             id="feGaussianBlur1" />
          <feColorMatrix
             type="matrix"
             values="0 0 0 0 0.0658854 0 0 0 0 0.0730469 0 0 0 0 0.1375 0 0 0 0.08 0"
             id="feColorMatrix2" />
          <feBlend
             mode="normal"
             in2="BackgroundImageFix"
             result="effect1_dropShadow_23_153"
             id="feBlend2" />
          <feBlend
             mode="normal"
             in="SourceGraphic"
             in2="effect1_dropShadow_23_153"
             result="shape"
             id="feBlend3" />
        </filter>
      </defs>
    </svg>
    
  )
};

export {FB};