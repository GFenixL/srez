using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Srez.Model
{
    internal class Order
    {
        public int ID { get; set; }
        public int UserID { get; set; }
        public ICollection<OrderService> Services { get; set; }
    }
}
