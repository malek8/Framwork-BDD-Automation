@connexion
Feature: Authentication - OrangeHRM
En tant que utilisateur je souhaite m'authantifier

  @cnx
  Scenario: Vérifier l'authenfication
    Given J'ouvre l'application orangeHRM
    When Je saisi le username
    And Je saisi le mot de passe
    And Je clique sur le bouton Login
    Then Redirection vers la page Home de l'application OrangeHRM
    
    
