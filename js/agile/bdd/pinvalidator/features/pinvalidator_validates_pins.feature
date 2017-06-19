Feature: PIN validator validates PINs

  As an user
  I want to validate my PIN number
  So I can check if it is valid

  A PIN is valid when its a four digit number and all digits in even
  positions must be even and all digits in odd positions must be
  odd. The least significant digit has index 1, the most has index 4.

  Scenario Outline: Validate PIN
    Given the PIN is "<pin>"
    When I validate it
    Then "<result>" must be shown

    Examples: Invalid pins
      | pin  | result      |
      | PINE | Invalid PIN |
      |  123 | Invalid PIN |

    Examples: Valid pins
      | pin  | result    |
      | 4321 | Valid PIN |
      | 8749 | Valid PIN |
