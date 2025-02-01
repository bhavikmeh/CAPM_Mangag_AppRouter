sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'mgm/inzy/mgminc/test/integration/FirstJourney',
		'mgm/inzy/mgminc/test/integration/pages/IncidentsList',
		'mgm/inzy/mgminc/test/integration/pages/IncidentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('mgm/inzy/mgminc') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);