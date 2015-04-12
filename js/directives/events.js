app.directive('events', function($compile, $filter) {
  return {
    restrict: 'AE',
    scope: false,      
    link: function(scope, ele, attrs) {
      scope.events = scope.$eval(attrs.events);
      var outputHtml = "<div class='row'>";
      outputHtml += `<input type="text" ng-model="q"  ng-keyup="orderbySeatsLeft()" class="form-control" placeholder="search.."/>`;
      outputHtml += "<div class='list-group'>";
      outputHtml += `<div ng-repeat="event in events | filter:q"><a data-target=".modal" data-toggle="modal" href="#" class="list-group-item" ng-click="setEvent(event.id) "> 
          <h4 class="list-group-item-heading">{{event.title}}<span class="pull-right">{{ event.date }}</span></h4>
          <p class="list-group-item-text"> Venue: {{event.venue}}
          <br/><br/><span ng-if="event.speakers">Speakers: {{event.speakers}}</span>
          </p></a>`;      
      outputHtml += "</div></div>";
      modalHtml = `<div class="modal">
      <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" ng-class="{'bg-warning': event.isTopEvent}">
          <div class="row">
            <div class="col col-md-2">
              <img class="img-responsive" ng-src="{{event.thumbUrl}}"></img>
            </div>
            <div class="col col-md-10">         
              <div class="col col-md-10 modal-title lead">
                  {{event.title}}, {{event.date}} 
              </div>
              <div class="col col-md-2 lead">
                <span class="pull-right text-danger" ng-if="event.isTopEvent"><i class="glyphicon glyphicon-heart"></i></span>
              </div>
            </div>
          </div>
          <div> 
            Venue: {{event.venue}}, {{event.city}}
            <span class="pull-right">Event in {{event.daysLeft}} days.</span>
          </div>          
        </div>
        <div class="modal-body">
          <img ng-src="{{event.posterUrl}}" class="img-responsive"></img>
          <p><br/>
            {{event.description}}
          </p> 
        </div>
        <div class="modal-footer">
          <span class="pull-left"> Available: {{event.seatsLeft}} seats</span>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Register</button>
        </div>
      </div>
      </div>
      </div>`;
      outputHtml += modalHtml;
      ele.html(outputHtml);
      $compile(ele.contents())(scope);

      scope.setEvent = function(eventId){
        var i = 0, eventsLength = scope.events.length;
        for(i=0; i< eventsLength; i++){
          if(scope.events[i]['id'] === parseInt(eventId, 10)){
            scope.event = scope.events[i];
            break;
          }
        }
      }

      scope.events = $filter('orderBy')(scope.events, function(event){
        return Date.parse(event['date']);
      });  

      scope.orderbySeatsLeft = function(){
        scope.events = $filter('orderBy')(scope.events, 'seatsLeft')
      }

    }
  };
});
