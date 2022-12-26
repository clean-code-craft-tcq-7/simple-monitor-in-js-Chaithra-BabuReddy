Reduce Complexity, Abstraction and Refactoring


Pure functions do not alter state. They always give the same output for a given input. This makes them unit-testable and ‘prove-able’.
The skill of refactoring keeps the code clean and fresh.

Extensions

Extension 1: Early Warning
Customers need early warnings to take action, in addition to the alarm that you print after the limit is breached. Introduce a ‘warning’ level with a tolerance of 5% of the upper-limit.

Example: If the SoC needs to be between 20 and 80, the warning-tolerance is 5% of 80 = 4. Warnings need to be displayed in these ranges:

20 to 20+4 Warning: Approaching discharge
80-4 to 80 Warning: Approaching charge-peak
Same for Temperature and Charge-rate.

Keep in mind: Though we are starting with warning levels for all parameters, customers may give feedback to have warnings only for some parameters and not others. Minimize the change needed for such ‘tuning’.

Extension 2: Support a language in addition to English
Our market has expanded to German-speaking countries! Switch the language of the printed user-messages based on a global variable.


Keep in mind: We could add more languages in future. Minimize the code-change required.
