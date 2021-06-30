using LoanThingy.Core;
using LoanThingy.Models;
using System;

namespace LoanThingy.Generator
{
    public class FacadeBase
    {
        public static CustomRequest CreateErrorRequest(Exception ex)
        {
            CustomRequest request = new CustomRequest
            {
                StatusCode = StatusCode.Error,
                ErrorMessage = ex.Message,
                Data = ex
            };
            return request;
        }

        public static CustomRequest CreateOkRequest(object data = null)
        {
            CustomRequest request = new CustomRequest
            {
                Data = data
            };
            return request;
        }

        public static CustomRequest CreateWarningRequest(object data)
        {
            CustomRequest request = new CustomRequest
            {
                StatusCode = StatusCode.Warning,
                Data = data
            };
            return request;
        }
    }
}
