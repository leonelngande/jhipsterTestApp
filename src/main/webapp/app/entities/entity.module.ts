import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterTestAppRegionModule } from './region/region.module';
import { JhipsterTestAppCountryModule } from './country/country.module';
import { JhipsterTestAppLocationModule } from './location/location.module';
import { JhipsterTestAppDepartmentModule } from './department/department.module';
import { JhipsterTestAppTaskModule } from './task/task.module';
import { JhipsterTestAppEmployeeModule } from './employee/employee.module';
import { JhipsterTestAppJobModule } from './job/job.module';
import { JhipsterTestAppJobHistoryModule } from './job-history/job-history.module';
import { JhipsterTestAppBlogModule } from './blog/blog.module';
import { JhipsterTestAppEntryModule } from './entry/entry.module';
import { JhipsterTestAppTagModule } from './tag/tag.module';
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
        JhipsterTestAppBlogModule,
        JhipsterTestAppEntryModule,
        JhipsterTestAppTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterTestAppEntityModule {}
