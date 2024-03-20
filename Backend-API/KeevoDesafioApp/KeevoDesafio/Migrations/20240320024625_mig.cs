using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KeevoDesafio.Migrations
{
    /// <inheritdoc />
    public partial class mig : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Statususes",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    statusNome = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Statususes", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "TarefasTipo",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    tarefaNome = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TarefasTipo", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Tarefa",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    statusId = table.Column<int>(type: "int", nullable: false),
                    descricao = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    responsavel = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    tarefaTipoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tarefa", x => x.id);
                    table.ForeignKey(
                        name: "FK_Tarefa_Statususes_statusId",
                        column: x => x.statusId,
                        principalTable: "Statususes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Tarefa_TarefasTipo_tarefaTipoId",
                        column: x => x.tarefaTipoId,
                        principalTable: "TarefasTipo",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tarefa_statusId",
                table: "Tarefa",
                column: "statusId");

            migrationBuilder.CreateIndex(
                name: "IX_Tarefa_tarefaTipoId",
                table: "Tarefa",
                column: "tarefaTipoId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tarefa");

            migrationBuilder.DropTable(
                name: "Statususes");

            migrationBuilder.DropTable(
                name: "TarefasTipo");
        }
    }
}
