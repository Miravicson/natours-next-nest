import classNames from 'classnames';
import { Url } from 'next/dist/shared/lib/router/router';
import { LinkProps as NextLinkProps } from 'next/link';
import Link from 'next/link';
import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement, ReactNode } from 'react';

import styles from './Button.module.css';

type AsType = 'button' | 'link';
type SizeType = 'sm' | 'md' | 'lg' | 'base' | 'full';
type PrimaryButtonColor = 'green' | 'white';

type BaseButtonTypeProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type BaseLinkTypeProps = {
  children: ReactNode;
  className?: string;
  href: Url;
} & NextLinkProps;

type BaseButtonProps = {
  asType?: AsType;
  text?: string;
  icon?: ReactElement;
  size?: SizeType;
  animated?: boolean;
  iconSide?: 'left' | 'right';
} & (BaseButtonTypeProps | BaseLinkTypeProps);

const sizeClassMap: Record<SizeType, (val: string) => string> = {
  sm: (className: string) => classNames(className, styles.BaseButtonSizeSm),
  md: (className: string) => classNames(className, styles.BaseButtonSizeMd),
  lg: (className: string) => classNames(className, styles.BaseButtonSizeLg),
  base: (className: string) => classNames(className, styles.BaseButtonSizeBase),
  full: (className: string) => classNames(className, styles.BaseButtonSizeFull),
};

const primaryButtonColorMap: Record<PrimaryButtonColor, string> = {
  green: styles.GreenButton,
  white: styles.WhiteButton,
};

type ChildElementType = {
  icon: BaseButtonProps['icon'];
  iconSide: BaseButtonProps['iconSide'];
  childOrText: ReactNode;
};

const ChildElement: React.FC<ChildElementType> = ({ icon, iconSide, childOrText = 'button' }) => {
  let childElement = childOrText;
  if (icon) {
    childElement =
      iconSide === 'right' ? (
        <>
          <span>{childOrText}</span>
          <span>{icon}</span>
        </>
      ) : (
        <>
          <span>{icon}</span>
          <span>{childOrText}</span>
        </>
      );
  }

  return <>{childElement}</>;
};

const BaseButton: React.FC<BaseButtonProps> = ({
  asType = 'button',
  text,
  icon,
  size = 'base',
  className,
  children,
  iconSide,
  animated,
  ...props
}) => {
  const classNameWithBaseStyle = classNames(className, styles.BaseButton);
  const classNameWithBaseAndSizeStyle = sizeClassMap[size](classNameWithBaseStyle);
  const childElement = <ChildElement icon={icon} iconSide={iconSide} childOrText={children || text} />;

  let finalStyle = classNameWithBaseAndSizeStyle;
  if (animated) {
    finalStyle = classNames(finalStyle, styles.Animated);
  }

  return asType === 'link' ? (
    <Link {...(props as BaseLinkTypeProps)}>
      <span className={classNames(finalStyle, styles.BaseLinkStyle)}>{childElement}</span>
    </Link>
  ) : (
    <button className={finalStyle} {...(props as BaseButtonTypeProps)}>
      {childElement}
    </button>
  );
};

export type PrimaryButtonProps = { color?: PrimaryButtonColor } & BaseButtonProps;

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ color = 'white', className, ...props }) => {
  let finalClassName = classNames(className, styles.PrimaryButton);
  finalClassName = color && classNames(finalClassName, primaryButtonColorMap[color]);
  return <BaseButton {...props} className={finalClassName} />;
};
