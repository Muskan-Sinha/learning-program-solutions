
-- Scenario 1: ProcessMonthlyInterest

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
   FOR acc IN (
      SELECT AccountID, Balance
      FROM Accounts
      WHERE AccountType = 'Savings'
   ) LOOP
      UPDATE Accounts
      SET Balance = Balance + (Balance * 0.01),
          LastModified = SYSDATE
      WHERE AccountID = acc.AccountID;
   END LOOP;

   DBMS_OUTPUT.PUT_LINE('Monthly interest applied to all Savings accounts.');
   COMMIT;
END;

-- Scenario 2: UpdateEmployeeBonus

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
   dept_name IN VARCHAR2,
   bonus_percent IN NUMBER
) AS
BEGIN
   UPDATE Employees
   SET Salary = Salary + (Salary * bonus_percent / 100)
   WHERE Department = dept_name;

   DBMS_OUTPUT.PUT_LINE('Bonus applied to employees in department: ' || dept_name);
   COMMIT;
END;

-- Scenario 3: TransferFunds

CREATE OR REPLACE PROCEDURE TransferFunds (
   source_account_id IN NUMBER,
   dest_account_id IN NUMBER,
   amount IN NUMBER
) AS
   source_balance NUMBER;
BEGIN
   SELECT Balance INTO source_balance
   FROM Accounts
   WHERE AccountID = source_account_id
   FOR UPDATE;

   IF source_balance < amount THEN
      RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account.');
   END IF;

   UPDATE Accounts
   SET Balance = Balance - amount,
       LastModified = SYSDATE
   WHERE AccountID = source_account_id;

   UPDATE Accounts
   SET Balance = Balance + amount,
       LastModified = SYSDATE
   WHERE AccountID = dest_account_id;

   DBMS_OUTPUT.PUT_LINE('₹' || amount || ' transferred from Account ' || source_account_id || ' to Account ' || dest_account_id);
   COMMIT;
END;