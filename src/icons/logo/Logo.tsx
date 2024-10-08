import { TLogo } from "./Logo.types";

const Logo: React.FC<TLogo> = ({bg, text}) => {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="8" transform="matrix(1 0 0 -1 0 64)" fill={bg}/>
      <g filter="url(#filter0_d_37_46)">
      <path d="M19.824 43.392L17.488 36.48H11.152L8.688 43.392H11.088V44H6.192V43.392H7.696L15.856 21.408H18.48L26.544 43.392H28.016V44H17.552V43.392H19.824ZM14.448 27.392L11.44 35.776H17.232L14.448 27.392ZM37.193 37.536L39.849 28.32L37.929 22.208H36.105V21.6H46.025V22.208H44.137L48.905 37.344L52.745 22.208H49.513V21.6H55.913V22.208H53.801L47.913 44.32H45.065L40.329 29.856L36.169 44.32H33.385L25.321 22.208H23.817V21.6H34.217V22.208H31.977L37.193 37.536Z" fill={text}/>
      </g>
    </svg>
  )
};

export {Logo};