﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace Aggregate_Direct_ShiaHill.Migrations
{
    public partial class April301 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Weight",
                table: "Deliveries",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Weight",
                table: "Deliveries");
        }
    }
}
