import { ComponentType, PropsWithChildren } from "react";

export type Page = ComponentType & {
  Layout?: React.FC<PropsWithChildren>;
};

export function Layout({ children }: PropsWithChildren) {
  return (
    <div class="flex flex-col min-h-full">
      <div class="container place-self-center rounded-2xl shadow-2xl my-auto p-6">
        {children}
      </div>
    </div>
  );
}
