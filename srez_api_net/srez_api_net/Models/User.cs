using System;
using System.Collections.Generic;

namespace srez_api_net.Models;

public partial class User
{
    public int Userid { get; set; }

    public string? Userfullname { get; set; }

    public string? Userlogin { get; set; }

    public string? Userpassword { get; set; }

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual ICollection<Session> Sessions { get; set; } = new List<Session>();
}
