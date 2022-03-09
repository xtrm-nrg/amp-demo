import { StringFilter } from "../../util/StringFilter";

export type AllocationWhereInput = {
  code?: StringFilter;
  id?: StringFilter;
  pepPackage?: StringFilter;
  vin?: StringFilter;
};
