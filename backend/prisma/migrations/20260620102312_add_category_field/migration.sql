-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_workshops" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "banner_image" TEXT,
    "venue" TEXT NOT NULL,
    "event_date" TEXT NOT NULL,
    "event_time" TEXT NOT NULL,
    "registration_open" BOOLEAN NOT NULL DEFAULT true,
    "max_seats" INTEGER,
    "google_form_url" TEXT,
    "price" TEXT,
    "category" TEXT NOT NULL DEFAULT 'Workshop',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_workshops" ("banner_image", "created_at", "description", "event_date", "event_time", "google_form_url", "id", "max_seats", "price", "registration_open", "title", "updated_at", "venue") SELECT "banner_image", "created_at", "description", "event_date", "event_time", "google_form_url", "id", "max_seats", "price", "registration_open", "title", "updated_at", "venue" FROM "workshops";
DROP TABLE "workshops";
ALTER TABLE "new_workshops" RENAME TO "workshops";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
