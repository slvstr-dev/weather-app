import Svg, { SvgProps, Path } from 'react-native-svg';

interface ChevronDownProps extends SvgProps {
  size?: number;
}

export const ChevronDown = ({ size = 20, ...props }: ChevronDownProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 512 512" {...props}>
      <Path
        d="m112 184 144 144 144-144"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
      />
    </Svg>
  );
};
