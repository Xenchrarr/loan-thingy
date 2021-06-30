using Newtonsoft.Json;
using System;

namespace LoanThingy.Core
{
    public static class Extensions
    {


        /// <summary>
        /// Serialize any object as JSON
        /// </summary>
        /// <param name="obj"></param>
        /// <returns>string</returns>
        public static string ToJson(this object obj)
        {
            if (obj is null)
            {
                return "";
            }
            string json = JsonConvert.SerializeObject(
                obj,
                Formatting.None,
                new JsonSerializerSettings
                {
                    NullValueHandling = NullValueHandling.Ignore,
                    
                }
            );
            return json;
        }




    }
}
