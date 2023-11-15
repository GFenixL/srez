using System;
using System.Collections.Generic;

namespace srez_api_net.Models;

public partial class OrdersService
{
    public int Ordersservicesid { get; set; }

    public int? Ordersid { get; set; }

    public int? Servicesid { get; set; }

    public virtual Order? Orders { get; set; }

    public virtual Service? Services { get; set; }
}
