import { DynamicModule, Module } from '@nestjs/common';
import { POLICY_CONFIG_TOKEN } from './constants';
import { Policy } from './models/policy';
import { PolicyManagerService } from './services/policy-manager.service';

@Module({
  providers: [
    PolicyManagerService
  ]
})
export class AccessControlModule {
  constructor(private readonly policyManager: PolicyManagerService) {
    setTimeout(() => {
      const tmp = this.policyManager.getAllPolicies();

      console.log(JSON.stringify(tmp));
    }, 1000);
  }


  static forFeature(policyConfig: Policy[]): DynamicModule {
    const policyProvider = {
      provide: POLICY_CONFIG_TOKEN,
      useValue: policyConfig
    };

    return {
      module: AccessControlModule,
      providers: [
        policyProvider
      ],
      exports: [
        policyProvider
      ]
    };
  }
}
