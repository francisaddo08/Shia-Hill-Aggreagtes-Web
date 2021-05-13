using Microsoft.EntityFrameworkCore.Migrations;

namespace Aggregate_Direct_ShiaHill.Migrations
{
    public partial class April234 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalWeight",
                table: "OrderLine");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "TotalWeight",
                table: "OrderLine",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
