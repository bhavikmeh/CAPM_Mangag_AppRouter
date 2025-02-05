sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'mgm/app/inc/incmgmapp/test/integration/FirstJourney',
		'mgm/app/inc/incmgmapp/test/integration/pages/IncidentsList',
		'mgm/app/inc/incmgmapp/test/integration/pages/IncidentsObjectPage',
		'mgm/app/inc/incmgmapp/test/integration/pages/Incidents_conversationObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage, Incidents_conversationObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('mgm/app/inc/incmgmapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage,
					onTheIncidents_conversationObjectPage: Incidents_conversationObjectPage
                }
            },
            opaJourney.run
        );
    }
);