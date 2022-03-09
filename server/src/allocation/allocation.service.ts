import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AllocationServiceBase } from "./base/allocation.service.base";

@Injectable()
export class AllocationService extends AllocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
