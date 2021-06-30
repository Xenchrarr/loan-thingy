using LoanThingy.Core;
using LoanThingy.Generator.Business;
using LoanThingy.Models;
using System;

namespace LoanThingy.Generator
{
    public class LoanFacade : FacadeBase
    {

        private readonly ILoanLogic loanLogic;


        public LoanFacade(LoanType loanType)
        {
            this.loanLogic = new LoanLogic(loanType);
        }
            

        public CustomRequest GetLoan(decimal amount, int year)
        {
            CustomRequest result;
            try
            {
                ILoan loan = this.loanLogic.GetLoan(amount, year);
                result = CreateOkRequest(loan);
            }
            catch (Exception ex)
            {
                //logger.ExceptionWrite(ex);
                result = CreateErrorRequest(ex);
            }
            return result;
        }

        public CustomRequest GetMonthlyPaymentForYear(decimal amount, int year)
        {
            CustomRequest result;
            try
            {
                decimal payment = this.loanLogic.GetMonthlyPaymentForYear(amount, year);
                result = CreateOkRequest(payment);
            }
            catch (Exception ex)
            {
                //logger.ExceptionWrite(ex);
                result = CreateErrorRequest(ex);
            }
            return result;
        }


    }
}
