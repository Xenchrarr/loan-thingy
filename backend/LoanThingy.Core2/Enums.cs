using System;
using System.Collections.Generic;
using System.Text;

namespace LoanThingy.Core
{

        public enum StatusCode
        {
            Ok = 1,
            Warning = 2,
            Error = 3,
            WTF = 4,
        }

        public enum LoanType
        {
            house = 0,
            car = 1
        }
    
}
