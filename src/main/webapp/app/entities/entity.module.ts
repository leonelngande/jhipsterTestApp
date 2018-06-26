import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterTestAppRegionModule } from './region/region.module';
import { JhipsterTestAppCountryModule } from './country/country.module';
import { JhipsterTestAppLocationModule } from './location/location.module';
import { JhipsterTestAppDepartmentModule } from './department/department.module';
import { JhipsterTestAppTaskModule } from './task/task.module';
import { JhipsterTestAppEmployeeModule } from './employee/employee.module';
import { JhipsterTestAppJobModule } from './job/job.module';
import { JhipsterTestAppJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterTestAppRegionModule,
        JhipsterTestAppCountryModule,
        JhipsterTestAppLocationModule,
        JhipsterTestAppDepartmentModule,
        JhipsterTestAppTaskModule,
        JhipsterTestAppEmployeeModule,
        JhipsterTestAppJobModule,
        JhipsterTestAppJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterTestAppEntityModule {}
