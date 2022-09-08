
Feature: Login Functionality
@NAVF-911
  Scenario Outline: Different user types with valid credentials
    When the user logged in as "<userType>"
    Then the user should land on "<pageSubtitle>"
    Examples:
      | userType      | pageSubtitle    |
      | driver        | Quick Launchpad |
      | sales manager | Dashboard       |
      | store manager | Dashboard       |

@NAVF-912
  Scenario: No access to the application without providing credentials
    When the user logged in as "driver"
    And the user logged out after getting the currentURL
    Then the user should not access to the application with that url without providing credentials

@NAVF-913
  Scenario Outline: Warning message for invalid credentials
    When the user enter invalid "<username>" and "<password>"
    Then the user should see the warning message.
    Examples:
      | username | password    |
      | user1    | invalidpass |
      | usertest | UserUser123 |
      | usertest | invalidpass |

@NAVF-914
  Scenario Outline: Another warning message for empty fields
    When the user clicks on login button without entering "<username>" and or "<password>"
    Then the user should see "Please fill in this field." message
    Examples:
      | username | password    |
      | user1    |             |
      |          | UserUser123 |
      |          |             |

@NAVF-915
  Scenario: Display password in bullet sign
    When the user enters password
    Then password is displayed in bullet signs

@NAVF-916
  Scenario: Check "Remember me on this computer" link
    Then "Remember me on this computer" link is displayed and clickable

@NAVF-917
  Scenario: User uses "Enter" key on the login page
    When the user enters username and hits enter key from keyboard
    And the cursor is on the password inputbox
    And the user enters password and hits enter key again
    Then login button is clicked
