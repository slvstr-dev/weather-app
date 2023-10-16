import Svg, { SvgProps, Path } from 'react-native-svg';

export const CloseOutline = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path
        d="M368 368 144 144M368 144 144 368"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
};
