using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace srez_api_net.Models;

public partial class OrdersForAppContext : DbContext
{
    public OrdersForAppContext()
    {
    }

    public OrdersForAppContext(DbContextOptions<OrdersForAppContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrdersService> OrdersServices { get; set; }

    public virtual DbSet<Service> Services { get; set; }

    public virtual DbSet<Session> Sessions { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer(File.ReadAllText("connectionString.txt"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Orderid).HasName("PK__orders__080E37756AE9E5B4");

            entity.ToTable("orders");

            entity.Property(e => e.Orderid).HasColumnName("orderid");
            entity.Property(e => e.Ordersdate)
                .HasColumnType("datetime")
                .HasColumnName("ordersdate");
            entity.Property(e => e.Userid).HasColumnName("userid");

            entity.HasOne(d => d.User).WithMany(p => p.Orders)
                .HasForeignKey(d => d.Userid)
                .HasConstraintName("FK__orders__userid__3B75D760");
        });

        modelBuilder.Entity<OrdersService>(entity =>
        {
            entity.HasKey(e => e.Ordersservicesid).HasName("PK__orders_s__CDC83E59BF5D9F98");

            entity.ToTable("orders_services");

            entity.Property(e => e.Ordersservicesid).HasColumnName("ordersservicesid");
            entity.Property(e => e.Ordersid).HasColumnName("ordersid");
            entity.Property(e => e.Servicesid).HasColumnName("servicesid");

            entity.HasOne(d => d.Orders).WithMany(p => p.OrdersServices)
                .HasForeignKey(d => d.Ordersid)
                .HasConstraintName("FK__orders_se__order__3E52440B");

            entity.HasOne(d => d.Services).WithMany(p => p.OrdersServices)
                .HasForeignKey(d => d.Servicesid)
                .HasConstraintName("FK__orders_se__servi__3F466844");
        });

        modelBuilder.Entity<Service>(entity =>
        {
            entity.HasKey(e => e.Serviceid).HasName("PK__service__45516CA7CA317845");

            entity.ToTable("service");

            entity.Property(e => e.Serviceid).HasColumnName("serviceid");
            entity.Property(e => e.ServiceCost)
                .HasColumnType("money")
                .HasColumnName("service_cost");
            entity.Property(e => e.Servicename)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("servicename");
        });

        modelBuilder.Entity<Session>(entity =>
        {
            entity.HasKey(e => e.Sessionsid).HasName("PK__sessions__64E1D3C3663B17B6");

            entity.ToTable("sessions");

            entity.Property(e => e.Sessionsid).HasColumnName("sessionsid");
            entity.Property(e => e.Expdate)
                .IsRowVersion()
                .IsConcurrencyToken()
                .HasColumnName("expdate");
            entity.Property(e => e.Userid).HasColumnName("userid");

            entity.HasOne(d => d.User).WithMany(p => p.Sessions)
                .HasForeignKey(d => d.Userid)
                .HasConstraintName("FK__sessions__userid__4222D4EF");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Userid).HasName("PK__users__CBA1B2577BC8CF41");

            entity.ToTable("users");

            entity.Property(e => e.Userid).HasColumnName("userid");
            entity.Property(e => e.Userfullname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("userfullname");
            entity.Property(e => e.Userlogin)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("userlogin");
            entity.Property(e => e.Userpassword)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("userpassword");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
