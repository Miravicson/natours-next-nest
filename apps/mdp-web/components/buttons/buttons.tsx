import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import styles from './buttons.module.scss';

type ButtonVariant = 'primary' | 'outline';
type ButtonKind = 'button' | 'link';
type VariantMap = Record<ButtonVariant, string | undefined>;

interface CommonProps {
  variant?: ButtonVariant;
  kind: ButtonKind;
}

interface IButtonProps extends CommonProps, ComponentPropsWithoutRef<'button'> {
  kind: 'button';
}

interface ILink extends CommonProps, LinkProps {
  kind: 'link';
}

type ButtonProps = PropsWithChildren<IButtonProps | ILink>;

const variantMap: VariantMap = {
  outline: styles.buttonOutline,
  primary: styles.buttonPrimary,
};

function isLink(buttonOrLink: ButtonProps): buttonOrLink is ILink {
  return buttonOrLink.kind === 'link';
}

export function Button(props: ButtonProps) {
  if (isLink(props)) {
    const { variant = 'primary', children, ...rest } = props;

    return (
      <Link className={`${clsx(styles.button, variantMap[variant])}`} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant = 'primary', children, ...rest } = props;
  return (
    <button className={`${clsx(styles.button, variantMap[variant])}`} {...rest}>
      {children}
    </button>
  );
}
