using Microsoft.AspNetCore.Mvc;
using srez_api_net.Models;

namespace srez_api_net.Controllers
{
    public class OrdersForAppController : Controller
    {
        public ICollection<Order> Index()
        {
            OrdersForAppContext ordersForAppContext = new OrdersForAppContext();
            return ordersForAppContext.Orders.ToList();
        }
    }
}
