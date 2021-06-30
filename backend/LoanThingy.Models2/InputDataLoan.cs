using LoanThingy.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoanThingy.Models
{
    public class InputDataLoan
    {
        public decimal amount { get; set; }
        public int year { get; set; }

        public LoanType loanType { get; set; }
    }
}
