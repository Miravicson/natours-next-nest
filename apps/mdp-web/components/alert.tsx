import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  content: ReactNode;
};
export function Alert({ icon, content }: Props) {
  return (
    <div className="rounded-[8px] bg-[#FCEFCA] py-5 px-6 flex gap-x-4 items-center">
      {icon} {content}
    </div>
  );
}
