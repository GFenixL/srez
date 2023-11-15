using System;
using System.Collections.Generic;

namespace srez_api_net.Models;

public partial class Service
{
    public int Serviceid { get; set; }

    public string? Servicename { get; set; }

    public decimal? ServiceCost { get; set; }

    public virtual ICollection<OrdersService> OrdersServices { get; set; } = new List<OrdersService>();
}
