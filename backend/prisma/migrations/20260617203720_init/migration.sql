-- CreateTable
CREATE TABLE "admin_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'content_admin',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "blog_posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT NOT NULL,
    "category" TEXT,
    "author" TEXT NOT NULL,
    "image" TEXT,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "published_at" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "team_members" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "department" TEXT,
    "bio" TEXT,
    "image_url" TEXT,
    "linkedin_url" TEXT,
    "display_order" INTEGER NOT NULL DEFAULT 0,
    "council" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "site_settings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "workshops" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "banner_image" TEXT,
    "venue" TEXT NOT NULL,
    "event_date" TEXT NOT NULL,
    "event_time" TEXT NOT NULL,
    "registration_open" BOOLEAN NOT NULL DEFAULT true,
    "max_seats" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "workshop_registrations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "college_name" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "year_of_study" TEXT NOT NULL,
    "workshop_id" TEXT NOT NULL,
    "additional_notes" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "workshop_registrations_workshop_id_fkey" FOREIGN KEY ("workshop_id") REFERENCES "workshops" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "incubation_applications" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "full_name" TEXT NOT NULL,
    "college_name" TEXT NOT NULL,
    "startup_name" TEXT NOT NULL,
    "problem_statement" TEXT NOT NULL,
    "target_audience" TEXT NOT NULL,
    "startup_stage" TEXT NOT NULL,
    "support_needed" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'New',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "visionx_member_applications" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "full_name" TEXT NOT NULL,
    "college_name" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "year_of_study" TEXT NOT NULL,
    "role_interested" TEXT NOT NULL,
    "why_join" TEXT NOT NULL,
    "relevant_experience" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "contact_messages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_users_email_key" ON "admin_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "blog_posts_slug_key" ON "blog_posts"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "site_settings_key_key" ON "site_settings"("key");
