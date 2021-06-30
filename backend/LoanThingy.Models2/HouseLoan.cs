using System;
using System.Collections.Generic;

namespace LoanThingy.Models
{
    public class HouseLoan : Loan, ILoan
    {

        public HouseLoan() {
            this.interest = (decimal)3.5;
        }
        public HouseLoan(decimal averageMonthlyPayment, List<Payment> payments)
        {
            this.interest = (decimal)3.5;
            this.averageMonthlyPayment = averageMonthlyPayment;
            this.payments = payments;
        }
    }
}
