import { NgModule } from '@angular/core';

import { JavaCollectionsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JavaCollectionsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JavaCollectionsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JavaCollectionsSharedCommonModule {}
