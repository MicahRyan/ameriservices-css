iframeApp.controller('FoundationSitesIframeController',['$scope','$sce','$window',function($scope,$sce,$window){parentScope=$window.parent.angular.element($window.frameElement).scope();$scope.building_block=parentScope.building_block;$scope.building_block.html_content=$sce.trustAsHtml($scope.building_block.html_content);var script=angular.element('<script>');script.text('$(document).ready(function(){'+ $scope.building_block.js_content+'})');var iframeBody=document.getElementsByClassName("iframe-body");iframeBody=angular.element(iframeBody);iframeBody.append(script);return null;}]);