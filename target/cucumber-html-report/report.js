$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentication/Authentication.feature");
formatter.feature({
  "line": 2,
  "name": "Authentication - OrangeHRM",
  "description": "En tant que utilisateur je souhaite m\u0027authantifier",
  "id": "authentication---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@connexion"
    }
  ]
});
formatter.before({
  "duration": 3134257300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Vérifier l\u0027authenfication",
  "description": "",
  "id": "authentication---orangehrm;vérifier-l\u0027authenfication",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "J\u0027ouvre l\u0027application orangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Je saisi le username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Je saisi le mot de passe",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je clique sur le bouton Login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Redirection vers la page Home de l\u0027application OrangeHRM",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1981309300,
  "status": "passed"
});
});