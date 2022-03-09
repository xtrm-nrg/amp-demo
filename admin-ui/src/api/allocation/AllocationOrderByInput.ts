import { SortOrder } from "../../util/SortOrder";

export type AllocationOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  pepPackage?: SortOrder;
  updatedAt?: SortOrder;
  vin?: SortOrder;
};
