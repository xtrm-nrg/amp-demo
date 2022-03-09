import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AllocationResolverBase } from "./base/allocation.resolver.base";
import { Allocation } from "./base/Allocation";
import { AllocationService } from "./allocation.service";

@graphql.Resolver(() => Allocation)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AllocationResolver extends AllocationResolverBase {
  constructor(
    protected readonly service: AllocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
