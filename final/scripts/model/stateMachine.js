define([],function(){function f(e){n[e.getName().toLowerCase()]=t.length,t.push(e)}function l(e){numberOfScenes=e}function c(e){r=p(e)}function h(){return r}function p(e){return typeof e=="number"?t[e]:typeof e=="string"?t[n[e.toLowerCase()]]:!1}function d(e){u.push(e)}function v(e){a=u[e]}function m(){u[a].getActions()[6][0].doAction()}function g(){}function h(){}var e="Esse texto precisa ser retornado",t=[],n=[],r,i=[],s=[],o=[],u=[],a=0;return{addScene:f,getScenes:function(){return t},getScene:p,setCurrentScene:c,setNumberOfScenes:l,addLevel:d,setCurrentLevel:v,startCurrentLevel:m,nextLevel:g,getText:function(){return e}}});