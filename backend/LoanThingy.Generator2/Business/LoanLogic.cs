using LoanThingy.Models;
using System;
using System.Collections.Generic;
using System.Text;
using LoanThingy.Core;
using System.Linq;

namespace LoanThingy.Generator.Business
{
    public class LoanLogic : ILoanLogic
    {
        LoanType loanType;
        Loan loan;
        public LoanLogic(LoanType loanType) 
        {
            this.loanType = loanType;

            switch (loanType)
            {
                case LoanType.house:
                     this.loan = new HouseLoan();
                    break;
                case LoanType.car:
                    throw new NotImplementedException();
                default:
                    throw new NotImplementedException();
            }
        }
    
        
        public ILoan GetLoan(decimal amount, int year)
        {
            if (year < 1)
            {
                throw new NotImplementedException();
            }
            loan.numberOfPayments = GetMonthFromYear(year);
            loan.payments = GeneratePayments(loan.numberOfPayments, amount);
            loan.averageMonthlyPayment = CalculateMonthlyCost(amount, loan.interest, loan.numberOfPayments);
            return loan;


        }

        public decimal GetMonthlyPaymentForYear(decimal amount, int year)
        {
            throw new NotImplementedException();
        }



        private List<Payment> GeneratePayments(int numberOfPayments, decimal amount)
        {
            List<Payment> payments = new List<Payment>();
            decimal interestRate = loan.interest / 100;



            decimal new_balance;
            decimal ending_balance = amount;
            

         decimal interest_paid, annual_rate, principle_paid, payment;

            int count = 1;

            // Get our standard payment which is 1/20 of loan
            payment = amount / numberOfPayments;

            while (ending_balance > (decimal)0.0)
            {
                Payment payment1 = new Payment();
                new_balance = ending_balance;

                // Calculate interest by multiplying rate against balance
                interest_paid = new_balance * (interestRate / (decimal)12.0);

                // Subtract interest from your payment
                principle_paid = payment - interest_paid;

                // Subtract final payment from running balance
                ending_balance = new_balance - principle_paid;

                // If the balance remaining plus its interest is less than payment amount
                // Then print out 0 balance, the interest paid and that balance minus the interest will tell us
                // how much principle you paid to get to zero.

                if ((new_balance + interest_paid) < payment)
                {
                    payment1.totalAmount = new_balance + interest_paid;
                    payment1.interestAmount = interest_paid;
                    payment1.payAmount = new_balance - interest_paid;
                    payment1.remainingAfter = 0;
                }
                else
                {
                    payment1.totalAmount = payment;
                    payment1.interestAmount = interest_paid;
                    payment1.payAmount = new_balance - interest_paid;
                    payment1.remainingAfter = ending_balance;
                }
                payment1.monthNumber = count;
                count++;
                payments.Add(payment1);

            }

            return payments;
        }

        private decimal CalculateMonthlyCost(decimal amount, decimal interest, int numberOfPayments)
        {
            // rate of interest and number of payments for monthly payments
            var rateOfInterest = interest / 1200;

            // loan amount = (interest rate * loan amount) / (1 - (1 + interest rate)^(number of payments * -1))
            return (rateOfInterest * amount) / (decimal)(1 - Math.Pow(1 + (double)rateOfInterest, numberOfPayments * -1));

            
        }

        private int GetMonthFromYear(int years)
        {
            return years * 12;
        }
    }
}
