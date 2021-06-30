using System;
using System.Collections.Generic;
using System.Text;

namespace LoanThingy.Models
{
    public class Loan : ILoan
    {
        public decimal interest { get; set; }
        public decimal averageMonthlyPayment { get; set; }
        public List<Payment> payments { get; set; }
        public int numberOfPayments { get; set; }

        public Loan() { }

        public Loan(decimal interest, decimal averageMonthlyPayment, List<Payment> payments)
        {
            this.interest = interest;
            this.averageMonthlyPayment = averageMonthlyPayment;
            this.payments = payments;
        }

    }
}
