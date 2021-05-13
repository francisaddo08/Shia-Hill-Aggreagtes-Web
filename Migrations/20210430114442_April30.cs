using Microsoft.EntityFrameworkCore.Migrations;

namespace Aggregate_Direct_ShiaHill.Migrations
{
    public partial class April30 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ServicedAreas");

            migrationBuilder.DropColumn(
                name: "CostPerKillometer",
                table: "Deliveries");

            migrationBuilder.DropColumn(
                name: "Weight",
                table: "Deliveries");

            migrationBuilder.AddColumn<int>(
                name: "DeliveryAreaID",
                table: "Deliveries",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TransportCostID",
                table: "Deliveries",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Deliveries_DeliveryAreaID",
                table: "Deliveries",
                column: "DeliveryAreaID");

            migrationBuilder.CreateIndex(
                name: "IX_Deliveries_TransportCostID",
                table: "Deliveries",
                column: "TransportCostID");

            migrationBuilder.AddForeignKey(
                name: "FK_Deliveries_DeliveryAreas_DeliveryAreaID",
                table: "Deliveries",
                column: "DeliveryAreaID",
                principalTable: "DeliveryAreas",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Deliveries_TransportCost_TransportCostID",
                table: "Deliveries",
                column: "TransportCostID",
                principalTable: "TransportCost",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Deliveries_DeliveryAreas_DeliveryAreaID",
                table: "Deliveries");

            migrationBuilder.DropForeignKey(
                name: "FK_Deliveries_TransportCost_TransportCostID",
                table: "Deliveries");

            migrationBuilder.DropIndex(
                name: "IX_Deliveries_DeliveryAreaID",
                table: "Deliveries");

            migrationBuilder.DropIndex(
                name: "IX_Deliveries_TransportCostID",
                table: "Deliveries");

            migrationBuilder.DropColumn(
                name: "DeliveryAreaID",
                table: "Deliveries");

            migrationBuilder.DropColumn(
                name: "TransportCostID",
                table: "Deliveries");

            migrationBuilder.AddColumn<double>(
                name: "CostPerKillometer",
                table: "Deliveries",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Weight",
                table: "Deliveries",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.CreateTable(
                name: "ServicedAreas",
                columns: table => new
                {
                    ServiceAreaID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Distance = table.Column<double>(type: "float", nullable: false),
                    District = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrderID = table.Column<int>(type: "int", nullable: false),
                    Region = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Unit = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServicedAreas", x => x.ServiceAreaID);
                    table.ForeignKey(
                        name: "FK_ServicedAreas_Orders_OrderID",
                        column: x => x.OrderID,
                        principalTable: "Orders",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ServicedAreas_OrderID",
                table: "ServicedAreas",
                column: "OrderID",
                unique: true);
        }
    }
}
