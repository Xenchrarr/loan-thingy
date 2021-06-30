using System;
using System.Collections.Generic;
using System.Text;

namespace LoanThingy.Models
{
    public class Payment
    {
        public decimal interestAmount { get; set; }
        public decimal payAmount { get; set; }
        public decimal totalAmount { get; set; }
        public int monthNumber { get; set; }
        public decimal remainingAfter { get; set; }

        public Payment() { }
        public Payment(decimal interestAmount,
            decimal payAmount,
            decimal totalAmount,
            int monthNumber)
        {
            this.interestAmount = interestAmount;
            this.payAmount = payAmount;
            this.totalAmount = totalAmount;
            this.monthNumber = monthNumber;
        }
    }
}
