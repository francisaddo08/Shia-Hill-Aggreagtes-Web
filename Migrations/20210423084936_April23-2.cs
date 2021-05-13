using Microsoft.EntityFrameworkCore.Migrations;

namespace Aggregate_Direct_ShiaHill.Migrations
{
    public partial class April232 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ServiceDate",
                table: "Orders",
                newName: "CollectionDate");

            migrationBuilder.AddColumn<string>(
                name: "ActualCollectionDate",
                table: "Orders",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Fulfilled",
                table: "Orders",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ActualCollectionDate",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "Fulfilled",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "CollectionDate",
                table: "Orders",
                newName: "ServiceDate");
        }
    }
}
