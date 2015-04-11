app.directive('events', function($compile, $filter) {
  return {
    restrict: 'AE',
    scope: false,      
    link: function(scope, ele, attrs) {
      scope.events = scope.$eval(attrs.events);
      var outputHtml = "<div class='row'><div class='list-group'>";
      angular.forEach(scope.events, function(event){
        outputHtml += '<a data-target=".modal" data-toggle="modal" href="#" class="list-group-item" ng-click="setEvent('+ event.id +') ">'+ 
          '<h4 class="list-group-item-heading">'+ event.date +'</h4>'+
          '<p class="list-group-item-text">'+ event.description +'</p></a>';
      })
      outputHtml += "</div></div>";
      modalHtml = `<div class="modal">
      <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">
          {{event.title}}, {{event.date}}
            <span class="pull-right"> {{event.city}} </span>
          </h4>
        </div>
        <div class="modal-body">
          <img ng-src="{{event.posterUrl}}" class="img-responsive"></img>
          <p>{{event.description}}</p> 
        </div>
        <div class="modal-footer">
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
    }
  };
});  