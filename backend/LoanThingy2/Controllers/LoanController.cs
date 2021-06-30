
using LoanThingy.Core;
using LoanThingy.Generator;
using LoanThingy.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Web.Http;

namespace LoanThingy2.Controllers
{
    public class LoanController : ApiController
    {

        [HttpPost]
        public string GetLoan(InputDataLoan inputDataLoan)
        {

            LoanFacade facade = this.GetFacade(inputDataLoan.loanType);
            return facade.GetLoan(inputDataLoan.amount, inputDataLoan.year).ToJson();
        }

        public string GetMonthlyPaymentForYear(decimal amount, int year, LoanType loanType)
        {
            LoanFacade facade = this.GetFacade(loanType);
            return facade.GetLoan(amount, year).ToJson();
        }

       



        private LoanFacade GetFacade(LoanType loanType) 
        {
            LoanFacade facade = null;
            try
            {
                facade = new LoanFacade(loanType);

            }
            catch (Exception ex)
            {
                // Log exception
            }
            return facade;
        }
    }
}