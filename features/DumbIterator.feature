Feature: Is complete range
  Check the iterator produced a whole range
 
  Scenario: run of 3 5 to equal [3, 4, 5]
    Given 3 5
    When run
    Then The result is [3, 4, 5]