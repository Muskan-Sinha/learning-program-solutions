
-- Scenario 1: Apply 1% Discount for Customers Over 60

BEGIN
   FOR rec IN (
      SELECT CustomerID
      FROM Customers
      WHERE MONTHS_BETWEEN(SYSDATE, DOB) / 12 > 60
   ) LOOP
      UPDATE Loans
      SET InterestRate = InterestRate - 1
      WHERE CustomerID = rec.CustomerID;
   END LOOP;

   DBMS_OUTPUT.PUT_LINE('Interest rate discount applied to senior citizens.');
   COMMIT;
END;


-- Scenario 2: Promote to VIP if Balance > 10000

BEGIN
   BEGIN
      EXECUTE IMMEDIATE 'ALTER TABLE Customers ADD IsVIP VARCHAR2(5)';
   EXCEPTION
      WHEN OTHERS THEN
         IF SQLCODE = -01430 THEN
            NULL; -- column already exists
         ELSE
            RAISE;
         END IF;
   END;

   FOR rec IN (
      SELECT CustomerID, Balance
      FROM Customers
      WHERE Balance > 10000
   ) LOOP
      UPDATE Customers
      SET IsVIP = 'TRUE'
      WHERE CustomerID = rec.CustomerID;
   END LOOP;

   DBMS_OUTPUT.PUT_LINE('VIP flag set for eligible customers.');
   COMMIT;
END;

-- Scenario 3: Send Loan Due Reminders (Next 30 Days)

BEGIN
   FOR rec IN (
      SELECT l.LoanID, l.CustomerID, l.EndDate, c.Name
      FROM Loans l
      JOIN Customers c ON c.CustomerID = l.CustomerID
      WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
   ) LOOP
      DBMS_OUTPUT.PUT_LINE(
         'Reminder: Dear ' || rec.Name ||
         ', your loan (ID: ' || rec.LoanID ||
         ') is due on ' || TO_CHAR(rec.EndDate, 'DD-MON-YYYY')
      );
   END LOOP;
END;
