/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("settings").del();
  await knex("settings").insert([
    {
      title: "LogChimp",
      description: "Track user feedback to build better products",
      accentColor: "484d7c",
      logo: "https://retm.app/app-logo-icon.png",
      icon: "https://retm.app/app-logo-icon.png",
      isPoweredBy: true,
    },
  ]);
}

// NOTE: backward compatible with common.js for knex
exports.seed = seed;
