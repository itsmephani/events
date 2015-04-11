app.controller('EventsController', ['$scope', '$filter', function($scope, $filter){
    $scope.events = [
    {
        id: 1,
        title: 'Alfa conf',
        venue: 'Red School of Arts',
        city: 'Bangalore',
        date: '12th Feb 2014',
        thumbUrl: 'http://th09.deviantart.net/fs70/200H/i/2010/362/5/1/official_deviantart_logo_by_digitaldecay-dhck.jpg',
        posterUrl: 'http://th08.deviantart.net/fs71/PRE/f/2013/185/7/a/bubbles___just_bubbles_by_viperv6-d6byhtp.jpg',
        description: "In order to provide the best possible experience to old and buggy browsers, Bootstrap uses CSS browser hacks in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive enhancement.",
        speakers: 'Prof. Seus',
        percent: 80,
        seatsLeft: 20,
        daysLeft: 1,
        isTopEvent: false
    },
    {
        id: 2,
        title: 'Beta conf',
        venue: 'Gree School of Commerce',
        city: 'Bangalore',
        date: '12th Feb 2014',
        thumbUrl: 'http://th01.deviantart.net/fs27/200H/i/2010/321/2/5/logo_by_nata_is_at-d1hhxwb.jpg',
        posterUrl: 'http://th08.deviantart.net/fs71/PRE/f/2013/185/7/a/bubbles___just_bubbles_by_viperv6-d6byhtp.jpg',
        description: "In order to provide the best possible experience to old and buggy browsers, Bootstrap uses CSS browser hacks in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive enhancement.",
        speakers: 'Prof. Seus',
        percent: 70,
        seatsLeft: 30,
        daysLeft: 2,
        isTopEvent: false
    },{
        id: 3,
        title: 'Gamma conf',
        venue: 'Purple School of Science',
        city: 'Bangalore',
        date: '13th Feb 2014',
        thumbUrl: 'http://th06.deviantart.net/fs36/200H/f/2008/262/8/f/BrainBurst_Logo_by_miZter_maZe.jpg',
        posterUrl: 'http://th08.deviantart.net/fs71/PRE/f/2013/185/7/a/bubbles___just_bubbles_by_viperv6-d6byhtp.jpg',
        description: "In order to provide the best possible experience to old and buggy browsers, Bootstrap uses CSS browser hacks in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive enhancement.",
        speakers: 'Prof. Seus',
        percent: 70,
        seatsLeft: 30,
        daysLeft: 3,
        isTopEvent: true
    },{
        id: 4,
        title: 'Delta conf',
        venue: 'Red School of Arts',
        city: 'Bangalore',
        date: '13th Feb 2014',
        thumbUrl: 'http://th01.deviantart.net/fs27/200H/i/2010/321/2/5/logo_by_nata_is_at-d1hhxwb.jpg',
        posterUrl: 'http://th08.deviantart.net/fs71/PRE/f/2013/185/7/a/bubbles___just_bubbles_by_viperv6-d6byhtp.jpg',
        description: "In order to provide the best possible experience to old and buggy browsers, Bootstrap uses CSS browser hacks in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive enhancement.",
        speakers: 'Prof. Seus',
        percent: 70,
        seatsLeft: 30,
        daysLeft: 3,
        isTopEvent: false
    },{
        id: 5,
        title: 'Foo conf',
        venue: 'Yellow School of Arts',
        city: 'Bangalore',
        date: '14th Feb 2014',
        thumbUrl: 'http://th09.deviantart.net/fs70/200H/i/2010/362/5/1/official_deviantart_logo_by_digitaldecay-dhck.jpg',
        posterUrl: 'http://th08.deviantart.net/fs71/PRE/f/2013/185/7/a/bubbles___just_bubbles_by_viperv6-d6byhtp.jpg',
        description: "In order to provide the best possible experience to old and buggy browsers, Bootstrap uses CSS browser hacks in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive enhancement.",
        speakers: 'Prof. Seus',
        percent: 60,
        seatsLeft: 40,
        daysLeft: 3,
        isTopEvent: false
    },{
        id: 6,
        title: 'Bar conf',
        venue: 'Pink School of Commerce',
        city: 'Bangalore',
        date: '15th Feb 2014',
        thumbUrl: 'http://th06.deviantart.net/fs36/200H/f/2008/262/8/f/BrainBurst_Logo_by_miZter_maZe.jpg',
        posterUrl: 'http://th08.deviantart.net/fs71/PRE/f/2013/185/7/a/bubbles___just_bubbles_by_viperv6-d6byhtp.jpg',
        description: "In order to provide the best possible experience to old and buggy browsers, Bootstrap uses CSS browser hacks in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive enhancement.",
        speakers: 'Prof. Seus',
        percent: 60,
        seatsLeft: 40,
        daysLeft: 4,
        isTopEvent: false
    },{
        id: 7,
        title: 'Theta conf',
        venue: 'Purple School of Science',
        city: 'Bangalore',
        date: '15th Feb 2014',
        thumbUrl: 'http://th01.deviantart.net/fs27/200H/i/2010/321/2/5/logo_by_nata_is_at-d1hhxwb.jpg',
        posterUrl: 'http://th08.deviantart.net/fs71/PRE/f/2013/185/7/a/bubbles___just_bubbles_by_viperv6-d6byhtp.jpg',
        description: "In order to provide the best possible experience to old and buggy browsers, Bootstrap uses CSS browser hacks in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive enhancement.",
        speakers: 'Prof. Seus',
        percent: 60,
        seatsLeft: 40,
        daysLeft: 4,
        isTopEvent: true
    },{
        id: 8,
        title: 'Lambda conf',
        venue: 'Red School of Arts',
        city: 'Bangalore',
        date: '16th Feb 2014',
        thumbUrl: 'http://th09.deviantart.net/fs70/200H/i/2010/362/5/1/official_deviantart_logo_by_digitaldecay-dhck.jpg',
        posterUrl: 'http://th08.deviantart.net/fs71/PRE/f/2013/185/7/a/bubbles___just_bubbles_by_viperv6-d6byhtp.jpg',
        description: "In order to provide the best possible experience to old and buggy browsers, Bootstrap uses CSS browser hacks in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive enhancement.",
        speakers: 'Prof. Seus',
        percent: 50,
        seatsLeft: 50,
        daysLeft: 4,
        isTopEvent: true
    },{
        id: 9,
        title: 'Kappa conf',
        venue: 'Green School of Commerce',
        city: 'Bangalore',
        date: '17th Feb 2014',
        thumbUrl: 'http://th06.deviantart.net/fs36/200H/f/2008/262/8/f/BrainBurst_Logo_by_miZter_maZe.jpg',
        posterUrl: 'http://th08.deviantart.net/fs71/PRE/f/2013/185/7/a/bubbles___just_bubbles_by_viperv6-d6byhtp.jpg',
        description: "In order to provide the best possible experience to old and buggy browsers, Bootstrap uses CSS browser hacks in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive enhancement.",
        speakers: 'Prof. Seus',
        percent: 40,
        seatsLeft: 60,
        daysLeft: 4,
        isTopEvent: false
    },{
        id: 10,
        title: 'Alfa conf: Part 2',
        venue: 'Red School of Arts',
        city: 'Bangalore',
        date: '18th Feb 2014',
        thumbUrl: 'http://th01.deviantart.net/fs27/200H/i/2010/321/2/5/logo_by_nata_is_at-d1hhxwb.jpg',
        posterUrl: 'http://th09.deviantart.net/fs70/PRE/f/2014/062/0/d/fade2grey_by_viperv6-d78qgwt.jpg',
        description: "In order to provide the best possible experience to old and buggy browsers, Bootstrap uses CSS browser hacks in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive enhancement.",
        speakers: 'Prof. Seus',
        percent: 30,
        seatsLeft: 70,
        daysLeft: 5,
        isTopEvent: false
    },{
        id: 11,
        title: 'Omega conf',
        venue: 'Cyan School of Science',
        city: 'Bangalore',
        date: '19th Feb 2014',
        thumbUrl: 'http://th09.deviantart.net/fs70/200H/i/2010/362/5/1/official_deviantart_logo_by_digitaldecay-dhck.jpg',
        posterUrl: 'http://th08.deviantart.net/fs71/PRE/f/2013/185/7/a/bubbles___just_bubbles_by_viperv6-d6byhtp.jpg',
        description: "In order to provide the best possible experience to old and buggy browsers, Bootstrap uses CSS browser hacks in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive enhancement.",
        speakers: 'Prof. Seus',
        percent: 10,
        seatsLeft: 90,
        daysLeft: 5,
        isTopEvent: true
    },{
        id: 12,
        title: 'Sigma conf',
        venue: 'Yellow School of Arts',
        city: 'Bangalore',
        date: '21th Feb 2014',
        thumbUrl: 'http://th06.deviantart.net/fs36/200H/f/2008/262/8/f/BrainBurst_Logo_by_miZter_maZe.jpg',
        posterUrl: 'http://th08.deviantart.net/fs71/PRE/f/2013/185/7/a/bubbles___just_bubbles_by_viperv6-d6byhtp.jpg',
        description: "In order to provide the best possible experience to old and buggy browsers, Bootstrap uses CSS browser hacks in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet fully standardized, but these are used purely for progressive enhancement.",
        speakers: 'Prof. Seus',
        percent: 20,
        seatsLeft: 80,
        daysLeft: 6,
        isTopEvent: false
    }
    ];
    $scope.date = function(event){
        var date = new Date(event.date);
        return date;
    }
    $scope.events = $filter('orderBy')($scope.events, function(event){
      return Date.parse(event['date']);
    });  
}]);
