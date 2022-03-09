import { AllocationWhereInput } from "./AllocationWhereInput";
import { AllocationOrderByInput } from "./AllocationOrderByInput";

export type AllocationFindManyArgs = {
  where?: AllocationWhereInput;
  orderBy?: AllocationOrderByInput;
  skip?: number;
  take?: number;
};
