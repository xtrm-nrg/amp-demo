import { Module } from "@nestjs/common";
import { AllocationModuleBase } from "./base/allocation.module.base";
import { AllocationService } from "./allocation.service";
import { AllocationController } from "./allocation.controller";
import { AllocationResolver } from "./allocation.resolver";

@Module({
  imports: [AllocationModuleBase],
  controllers: [AllocationController],
  providers: [AllocationService, AllocationResolver],
  exports: [AllocationService],
})
export class AllocationModule {}
