import { SvgProps } from 'react-native-svg';

import * as Icons from './internal/index';

export type IconProps = SvgProps & {
  icon: keyof typeof Icons;
  className?: string;
  size?: number;
};

export function Icon({ className, icon, size = 20, ...props }: IconProps) {
  const Component = Icons[icon];

  return <Component width={size} height={size} {...props} />;
}
