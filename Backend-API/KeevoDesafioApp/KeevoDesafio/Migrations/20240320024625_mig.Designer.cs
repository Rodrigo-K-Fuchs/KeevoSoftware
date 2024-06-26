﻿// <auto-generated />
using KeevoDesafio.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace KeevoDesafio.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20240320024625_mig")]
    partial class mig
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("KeevoDesafio.Model.Status", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<string>("statusNome")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("id");

                    b.ToTable("Statususes");
                });

            modelBuilder.Entity("KeevoDesafio.Model.Tarefa", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<string>("descricao")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("responsavel")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("statusId")
                        .HasColumnType("int");

                    b.Property<int>("tarefaTipoId")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("statusId");

                    b.HasIndex("tarefaTipoId");

                    b.ToTable("Tarefa");
                });

            modelBuilder.Entity("KeevoDesafio.Model.TarefasTipo", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<string>("tarefaNome")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("id");

                    b.ToTable("TarefasTipo");
                });

            modelBuilder.Entity("KeevoDesafio.Model.Tarefa", b =>
                {
                    b.HasOne("KeevoDesafio.Model.Status", "Status")
                        .WithMany()
                        .HasForeignKey("statusId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("KeevoDesafio.Model.TarefasTipo", "TarefaTipo")
                        .WithMany()
                        .HasForeignKey("tarefaTipoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Status");

                    b.Navigation("TarefaTipo");
                });
#pragma warning restore 612, 618
        }
    }
}
