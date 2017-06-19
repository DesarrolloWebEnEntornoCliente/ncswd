Feature: PIN validator registers user's name

  As an user
  I want to give my name to the PIN validator
  So I can get personalized responses

  Scenario: The PIN validator remmembers the last name entered
    Given a PIN validator
    When I enter "my name"
    Then I should see "Hello my name"
    And "my name" is registered as current user
