using System;
using System.Collections.Generic;

namespace srez_api_net.Models;

public partial class Order
{
    public int Orderid { get; set; }

    public int? Userid { get; set; }

    public DateTime? Ordersdate { get; set; }

    public virtual ICollection<OrdersService> OrdersServices { get; set; } = new List<OrdersService>();

    public virtual User? User { get; set; }
}
