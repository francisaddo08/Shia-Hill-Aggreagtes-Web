using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Aggregate_Direct_ShiaHill.Migrations
{
    public partial class April233 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "OrderLine");

            migrationBuilder.DropColumn(
                name: "ProductName",
                table: "OrderLine");

            migrationBuilder.DropColumn(
                name: "ProductUrl",
                table: "OrderLine");

            migrationBuilder.DropColumn(
                name: "UnitPrice",
                table: "OrderLine");

            migrationBuilder.DropColumn(
                name: "Weight",
                table: "OrderLine");

            migrationBuilder.AddColumn<Guid>(
                name: "ProductID",
                table: "OrderLine",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_OrderLine_ProductID",
                table: "OrderLine",
                column: "ProductID");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderLine_Product_ProductID",
                table: "OrderLine",
                column: "ProductID",
                principalTable: "Product",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderLine_Product_ProductID",
                table: "OrderLine");

            migrationBuilder.DropIndex(
                name: "IX_OrderLine_ProductID",
                table: "OrderLine");

            migrationBuilder.DropColumn(
                name: "ProductID",
                table: "OrderLine");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "OrderLine",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ProductName",
                table: "OrderLine",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ProductUrl",
                table: "OrderLine",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "UnitPrice",
                table: "OrderLine",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Weight",
                table: "OrderLine",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
