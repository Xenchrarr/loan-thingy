using LoanThingy.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace LoanThingy.Generator.Business
{
    public interface ILoanLogic
    {

        ILoan GetLoan(Decimal amount, int year);
        decimal GetMonthlyPaymentForYear(Decimal amount, int year);
    }
}
