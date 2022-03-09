import { Allocation as TAllocation } from "../api/allocation/Allocation";

export const ALLOCATION_TITLE_FIELD = "code";

export const AllocationTitle = (record: TAllocation): string => {
  return record.code || record.id;
};
