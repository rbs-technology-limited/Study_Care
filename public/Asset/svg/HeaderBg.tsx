interface Props {
  color?: string;
  width?: number;
  height?: number;
}

const HeaderBg = ({ color, width, height }: Props) => (
  <svg
    width="508"
    height="156"
    viewBox="0 0 508 156"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.13896 -90.9627C-3.07628 -112.648 11.0862 -133.645 32.7717 -137.86L420.514 -213.23C442.2 -217.445 463.197 -203.282 467.412 -181.597L508.953 32.1162C513.169 53.8016 499.006 74.7984 477.321 79.0136L89.578 154.383C67.8925 158.598 46.8958 144.436 42.6806 122.75L1.13896 -90.9627Z"
      fill={color || "#02838F"}
    />
  </svg>
);
export default HeaderBg;
