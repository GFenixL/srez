using System;
using System.Collections.Generic;

namespace srez_api_net.Models;

public partial class Session
{
    public int Sessionsid { get; set; }

    public int? Userid { get; set; }

    public byte[] Expdate { get; set; } = null!;

    public virtual User? User { get; set; }
}
