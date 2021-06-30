

using LoanThingy.Core;

namespace LoanThingy.Models
{
    public class CustomRequest
    {
        public StatusCode StatusCode { get; set; } = StatusCode.Ok;
        public object Data { get; set; }
        public string ErrorMessage { get; set; }
    }
}
