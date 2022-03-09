import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AllocationService } from "./allocation.service";
import { AllocationControllerBase } from "./base/allocation.controller.base";

@swagger.ApiTags("allocations")
@common.Controller("allocations")
export class AllocationController extends AllocationControllerBase {
  constructor(
    protected readonly service: AllocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
