@WIP
Feature: Logout Functionality
@NAVF-919
  Scenario Outline: Logout after successful login
    Given the user logged in as "<userType>"
    When the "<userType>" logged out by using log out button inside the profile info
    Then the user ended up in login page after logging out
    Then  the user can not go to the home page again by clicking the step back button after successfully logged out.
    Examples:
      | userType      |
      | driver        |
      | sales manager |
      | store manager |
