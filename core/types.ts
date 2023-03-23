import type {
  ComputedOptions,
  ConcreteComponent,
  MethodOptions
} from "nuxt/dist/app/compat/capi";

export type NavItem = {
  to: string;
  icon?:
    | string
    | ConcreteComponent<{}, any, any, ComputedOptions, MethodOptions>;
  label: String;
  badgeCount?: number;
};
