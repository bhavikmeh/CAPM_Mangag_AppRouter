sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'mgm.app.inc.incmgmapp',
            componentId: 'IncidentsObjectPage',
            contextPath: '/Incidents'
        },
        CustomPageDefinitions
    );
});