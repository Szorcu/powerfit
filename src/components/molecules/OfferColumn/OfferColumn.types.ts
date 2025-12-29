import { CLASSES } from "@/consts/classes";
import { SERVICES } from "@/consts/services";

export type OfferColumnProps = {
  title: string;
  items: typeof CLASSES | typeof SERVICES;
  redirectTo: string;
};
