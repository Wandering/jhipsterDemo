import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterDemoRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterDemoCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterDemoLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterDemoDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterDemoTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterDemoEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterDemoJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterDemoJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterDemoRegionMySuffixModule,
        JhipsterDemoCountryMySuffixModule,
        JhipsterDemoLocationMySuffixModule,
        JhipsterDemoDepartmentMySuffixModule,
        JhipsterDemoTaskMySuffixModule,
        JhipsterDemoEmployeeMySuffixModule,
        JhipsterDemoJobMySuffixModule,
        JhipsterDemoJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterDemoEntityModule {}
