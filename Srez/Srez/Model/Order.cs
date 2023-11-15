using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Srez.Model
{
    internal class Order
    {
        public int orderid { get; set; }
        public int userid { get; set; }
        public DateTime? ordersdate { get; set; }
        public ICollection<OrderService> Services { get; set; }
        public User user { get; set; }
    }
}
