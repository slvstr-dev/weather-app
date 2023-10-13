import * as Icons from './internal/index';

export type IconProps = {
  icon: keyof typeof Icons;
  className?: string;
  size?: number;
};

export function Icon({ icon, size = 20, ...props }: IconProps) {
  const Component = Icons[icon];

  return <Component width={size} height={size} {...props} />;
}
