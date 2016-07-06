# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160705094940) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string   "last_name"
    t.string   "first_name"
    t.string   "username"
    t.string   "password_digest"
    t.string   "email"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "blog_posts", force: :cascade do |t|
    t.string   "title"
    t.string   "username"
    t.string   "count"
    t.string   "place"
    t.string   "poster"
    t.string   "blogdate"
    t.datetime "date"
    t.string   "link"
    t.string   "blogid"
    t.string   "content1_eng"
    t.string   "content2_eng"
    t.string   "content3_eng"
    t.string   "content4_eng"
    t.string   "content5_eng"
    t.string   "content6_eng"
    t.string   "content7_eng"
    t.string   "content8_eng"
    t.string   "content9_eng"
    t.string   "content10_eng"
    t.string   "content11_eng"
    t.string   "content12_eng"
    t.string   "content13_eng"
    t.string   "content14_eng"
    t.string   "content15_eng"
    t.string   "content16_eng"
    t.string   "content17_eng"
    t.string   "content18_eng"
    t.string   "content19_eng"
    t.string   "content20_eng"
    t.string   "content1_kor"
    t.string   "content2_kor"
    t.string   "content3_kor"
    t.string   "content4_kor"
    t.string   "content5_kor"
    t.string   "content6_kor"
    t.string   "content7_kor"
    t.string   "content8_kor"
    t.string   "content9_kor"
    t.string   "content10_kor"
    t.string   "content11_kor"
    t.string   "content12_kor"
    t.string   "content13_kor"
    t.string   "content14_kor"
    t.string   "content15_kor"
    t.string   "content16_kor"
    t.string   "content17_kor"
    t.string   "content18_kor"
    t.string   "content19_kor"
    t.string   "content20_kor"
    t.string   "att1"
    t.string   "att2"
    t.string   "att3"
    t.string   "att4"
    t.string   "att5"
    t.string   "att6"
    t.string   "att7"
    t.string   "att8"
    t.string   "att9"
    t.string   "att10"
    t.string   "att11"
    t.string   "att12"
    t.string   "att13"
    t.string   "att14"
    t.string   "att15"
    t.string   "att16"
    t.string   "att17"
    t.string   "att18"
    t.string   "att19"
    t.string   "att20"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "blogs", force: :cascade do |t|
    t.string   "title"
    t.string   "poster"
    t.string   "blogdate"
    t.string   "link"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "career_post_replies", force: :cascade do |t|
    t.string   "title"
    t.string   "career_postid"
    t.string   "username"
    t.string   "content"
    t.datetime "date"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "career_posts", force: :cascade do |t|
    t.string   "title"
    t.string   "username"
    t.string   "count"
    t.datetime "date"
    t.string   "careerid"
    t.string   "location"
    t.string   "content1_eng"
    t.string   "content2_eng"
    t.string   "content3_eng"
    t.string   "content4_eng"
    t.string   "content5_eng"
    t.string   "content6_eng"
    t.string   "content7_eng"
    t.string   "content8_eng"
    t.string   "content9_eng"
    t.string   "content10_eng"
    t.string   "content11_eng"
    t.string   "content12_eng"
    t.string   "content13_eng"
    t.string   "content14_eng"
    t.string   "content15_eng"
    t.string   "content16_eng"
    t.string   "content17_eng"
    t.string   "content18_eng"
    t.string   "content19_eng"
    t.string   "content20_eng"
    t.string   "content1_kor"
    t.string   "content2_kor"
    t.string   "content3_kor"
    t.string   "content4_kor"
    t.string   "content5_kor"
    t.string   "content6_kor"
    t.string   "content7_kor"
    t.string   "content8_kor"
    t.string   "content9_kor"
    t.string   "content10_kor"
    t.string   "content11_kor"
    t.string   "content12_kor"
    t.string   "content13_kor"
    t.string   "content14_kor"
    t.string   "content15_kor"
    t.string   "content16_kor"
    t.string   "content17_kor"
    t.string   "content18_kor"
    t.string   "content19_kor"
    t.string   "content20_kor"
    t.string   "att1"
    t.string   "att2"
    t.string   "att3"
    t.string   "att4"
    t.string   "att5"
    t.string   "att6"
    t.string   "att7"
    t.string   "att8"
    t.string   "att9"
    t.string   "att10"
    t.string   "att11"
    t.string   "att12"
    t.string   "att13"
    t.string   "att14"
    t.string   "att15"
    t.string   "att16"
    t.string   "att17"
    t.string   "att18"
    t.string   "att19"
    t.string   "att20"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "careers", force: :cascade do |t|
    t.string   "title"
    t.string   "content"
    t.string   "poster"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "eventposts", force: :cascade do |t|
    t.string   "title"
    t.string   "username"
    t.string   "count"
    t.string   "place"
    t.string   "poster"
    t.string   "blogdate"
    t.datetime "date"
    t.string   "link"
    t.string   "eventid"
    t.string   "content1_eng"
    t.string   "content2_eng"
    t.string   "content3_eng"
    t.string   "content4_eng"
    t.string   "content5_eng"
    t.string   "content6_eng"
    t.string   "content7_eng"
    t.string   "content8_eng"
    t.string   "content9_eng"
    t.string   "content10_eng"
    t.string   "content11_eng"
    t.string   "content12_eng"
    t.string   "content13_eng"
    t.string   "content14_eng"
    t.string   "content15_eng"
    t.string   "content16_eng"
    t.string   "content17_eng"
    t.string   "content18_eng"
    t.string   "content19_eng"
    t.string   "content20_eng"
    t.string   "content1_kor"
    t.string   "content2_kor"
    t.string   "content3_kor"
    t.string   "content4_kor"
    t.string   "content5_kor"
    t.string   "content6_kor"
    t.string   "content7_kor"
    t.string   "content8_kor"
    t.string   "content9_kor"
    t.string   "content10_kor"
    t.string   "content11_kor"
    t.string   "content12_kor"
    t.string   "content13_kor"
    t.string   "content14_kor"
    t.string   "content15_kor"
    t.string   "content16_kor"
    t.string   "content17_kor"
    t.string   "content18_kor"
    t.string   "content19_kor"
    t.string   "content20_kor"
    t.string   "att1"
    t.string   "att2"
    t.string   "att3"
    t.string   "att4"
    t.string   "att5"
    t.string   "att6"
    t.string   "att7"
    t.string   "att8"
    t.string   "att9"
    t.string   "att10"
    t.string   "att11"
    t.string   "att12"
    t.string   "att13"
    t.string   "att14"
    t.string   "att15"
    t.string   "att16"
    t.string   "att17"
    t.string   "att18"
    t.string   "att19"
    t.string   "att20"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "events", force: :cascade do |t|
    t.string   "name"
    t.string   "eventdate"
    t.string   "poster"
    t.string   "link"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "express_yourself_post_replies", force: :cascade do |t|
    t.string   "title"
    t.string   "express_yourself_postid"
    t.string   "username"
    t.string   "content"
    t.datetime "date"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  create_table "express_yourself_posts", force: :cascade do |t|
    t.string   "title"
    t.string   "count"
    t.string   "express_yourselfid"
    t.string   "content1_eng"
    t.string   "content2_eng"
    t.string   "content3_eng"
    t.string   "content4_eng"
    t.string   "content5_eng"
    t.string   "content6_eng"
    t.string   "content7_eng"
    t.string   "content8_eng"
    t.string   "content9_eng"
    t.string   "content10_eng"
    t.string   "content11_eng"
    t.string   "content12_eng"
    t.string   "content13_eng"
    t.string   "content14_eng"
    t.string   "content15_eng"
    t.string   "content16_eng"
    t.string   "content17_eng"
    t.string   "content18_eng"
    t.string   "content19_eng"
    t.string   "content20_eng"
    t.string   "content1_kor"
    t.string   "content2_kor"
    t.string   "content3_kor"
    t.string   "content4_kor"
    t.string   "content5_kor"
    t.string   "content6_kor"
    t.string   "content7_kor"
    t.string   "content8_kor"
    t.string   "content9_kor"
    t.string   "content10_kor"
    t.string   "content11_kor"
    t.string   "content12_kor"
    t.string   "content13_kor"
    t.string   "content14_kor"
    t.string   "content15_kor"
    t.string   "content16_kor"
    t.string   "content17_kor"
    t.string   "content18_kor"
    t.string   "content19_kor"
    t.string   "content20_kor"
    t.string   "att1"
    t.string   "att2"
    t.string   "att3"
    t.string   "att4"
    t.string   "att5"
    t.string   "att6"
    t.string   "att7"
    t.string   "att8"
    t.string   "att9"
    t.string   "att10"
    t.string   "att11"
    t.string   "att12"
    t.string   "att13"
    t.string   "att14"
    t.string   "att15"
    t.string   "att16"
    t.string   "att17"
    t.string   "att18"
    t.string   "att19"
    t.string   "att20"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "express_yourselves", force: :cascade do |t|
    t.string   "title"
    t.string   "content"
    t.string   "poster"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "external_eventposts", force: :cascade do |t|
    t.string   "name"
    t.string   "username"
    t.string   "count"
    t.string   "guests"
    t.string   "individuals"
    t.string   "collaborations"
    t.string   "poster"
    t.string   "eventdate"
    t.datetime "date"
    t.string   "link"
    t.string   "eventid"
    t.string   "content1_eng"
    t.string   "content2_eng"
    t.string   "content3_eng"
    t.string   "content4_eng"
    t.string   "content5_eng"
    t.string   "content6_eng"
    t.string   "content7_eng"
    t.string   "content8_eng"
    t.string   "content9_eng"
    t.string   "content10_eng"
    t.string   "content11_eng"
    t.string   "content12_eng"
    t.string   "content13_eng"
    t.string   "content14_eng"
    t.string   "content15_eng"
    t.string   "content16_eng"
    t.string   "content17_eng"
    t.string   "content18_eng"
    t.string   "content19_eng"
    t.string   "content20_eng"
    t.string   "content1_kor"
    t.string   "content2_kor"
    t.string   "content3_kor"
    t.string   "content4_kor"
    t.string   "content5_kor"
    t.string   "content6_kor"
    t.string   "content7_kor"
    t.string   "content8_kor"
    t.string   "content9_kor"
    t.string   "content10_kor"
    t.string   "content11_kor"
    t.string   "content12_kor"
    t.string   "content13_kor"
    t.string   "content14_kor"
    t.string   "content15_kor"
    t.string   "content16_kor"
    t.string   "content17_kor"
    t.string   "content18_kor"
    t.string   "content19_kor"
    t.string   "content20_kor"
    t.string   "att1"
    t.string   "att2"
    t.string   "att3"
    t.string   "att4"
    t.string   "att5"
    t.string   "att6"
    t.string   "att7"
    t.string   "att8"
    t.string   "att9"
    t.string   "att10"
    t.string   "att11"
    t.string   "att12"
    t.string   "att13"
    t.string   "att14"
    t.string   "att15"
    t.string   "att16"
    t.string   "att17"
    t.string   "att18"
    t.string   "att19"
    t.string   "att20"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "external_events", force: :cascade do |t|
    t.string   "name"
    t.string   "eventdate"
    t.string   "poster"
    t.string   "link"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "freeboard_post_replies", force: :cascade do |t|
    t.string   "title"
    t.string   "freeboard_postid"
    t.string   "username"
    t.string   "content"
    t.datetime "date"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "freeboard_posts", force: :cascade do |t|
    t.string   "title"
    t.string   "username"
    t.string   "count"
    t.datetime "date"
    t.string   "freeboardid"
    t.string   "content1_eng"
    t.string   "content2_eng"
    t.string   "content3_eng"
    t.string   "content4_eng"
    t.string   "content5_eng"
    t.string   "content6_eng"
    t.string   "content7_eng"
    t.string   "content8_eng"
    t.string   "content9_eng"
    t.string   "content10_eng"
    t.string   "content11_eng"
    t.string   "content12_eng"
    t.string   "content13_eng"
    t.string   "content14_eng"
    t.string   "content15_eng"
    t.string   "content16_eng"
    t.string   "content17_eng"
    t.string   "content18_eng"
    t.string   "content19_eng"
    t.string   "content20_eng"
    t.string   "content1_kor"
    t.string   "content2_kor"
    t.string   "content3_kor"
    t.string   "content4_kor"
    t.string   "content5_kor"
    t.string   "content6_kor"
    t.string   "content7_kor"
    t.string   "content8_kor"
    t.string   "content9_kor"
    t.string   "content10_kor"
    t.string   "content11_kor"
    t.string   "content12_kor"
    t.string   "content13_kor"
    t.string   "content14_kor"
    t.string   "content15_kor"
    t.string   "content16_kor"
    t.string   "content17_kor"
    t.string   "content18_kor"
    t.string   "content19_kor"
    t.string   "content20_kor"
    t.string   "att1"
    t.string   "att2"
    t.string   "att3"
    t.string   "att4"
    t.string   "att5"
    t.string   "att6"
    t.string   "att7"
    t.string   "att8"
    t.string   "att9"
    t.string   "att10"
    t.string   "att11"
    t.string   "att12"
    t.string   "att13"
    t.string   "att14"
    t.string   "att15"
    t.string   "att16"
    t.string   "att17"
    t.string   "att18"
    t.string   "att19"
    t.string   "att20"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "freeboards", force: :cascade do |t|
    t.string   "title"
    t.string   "content"
    t.string   "poster"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "galleries", force: :cascade do |t|
    t.string   "file"
    t.string   "username"
    t.string   "count"
    t.string   "description"
    t.string   "eventdate"
    t.string   "event"
    t.string   "link"
    t.datetime "date"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "hotspot_post_replies", force: :cascade do |t|
    t.string   "title"
    t.string   "hotspot_postid"
    t.string   "username"
    t.string   "content"
    t.datetime "date"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "hotspot_posts", force: :cascade do |t|
    t.string   "title"
    t.string   "username"
    t.string   "count"
    t.datetime "date"
    t.string   "hotspotid"
    t.string   "content1_eng"
    t.string   "content2_eng"
    t.string   "content3_eng"
    t.string   "content4_eng"
    t.string   "content5_eng"
    t.string   "content6_eng"
    t.string   "content7_eng"
    t.string   "content8_eng"
    t.string   "content9_eng"
    t.string   "content10_eng"
    t.string   "content11_eng"
    t.string   "content12_eng"
    t.string   "content13_eng"
    t.string   "content14_eng"
    t.string   "content15_eng"
    t.string   "content16_eng"
    t.string   "content17_eng"
    t.string   "content18_eng"
    t.string   "content19_eng"
    t.string   "content20_eng"
    t.string   "content1_kor"
    t.string   "content2_kor"
    t.string   "content3_kor"
    t.string   "content4_kor"
    t.string   "content5_kor"
    t.string   "content6_kor"
    t.string   "content7_kor"
    t.string   "content8_kor"
    t.string   "content9_kor"
    t.string   "content10_kor"
    t.string   "content11_kor"
    t.string   "content12_kor"
    t.string   "content13_kor"
    t.string   "content14_kor"
    t.string   "content15_kor"
    t.string   "content16_kor"
    t.string   "content17_kor"
    t.string   "content18_kor"
    t.string   "content19_kor"
    t.string   "content20_kor"
    t.string   "att1"
    t.string   "att2"
    t.string   "att3"
    t.string   "att4"
    t.string   "att5"
    t.string   "att6"
    t.string   "att7"
    t.string   "att8"
    t.string   "att9"
    t.string   "att10"
    t.string   "att11"
    t.string   "att12"
    t.string   "att13"
    t.string   "att14"
    t.string   "att15"
    t.string   "att16"
    t.string   "att17"
    t.string   "att18"
    t.string   "att19"
    t.string   "att20"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "hotspots", force: :cascade do |t|
    t.string   "title"
    t.string   "content"
    t.string   "poster"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "photos", force: :cascade do |t|
    t.string   "title"
    t.string   "username"
    t.string   "count"
    t.string   "description"
    t.string   "eventdate"
    t.string   "event"
    t.string   "link"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "press_posts", force: :cascade do |t|
    t.string   "title"
    t.string   "username"
    t.string   "count"
    t.string   "writer"
    t.string   "poster"
    t.string   "pressdate"
    t.datetime "date"
    t.string   "link"
    t.string   "pressid"
    t.string   "content1_eng"
    t.string   "content2_eng"
    t.string   "content3_eng"
    t.string   "content4_eng"
    t.string   "content5_eng"
    t.string   "content6_eng"
    t.string   "content7_eng"
    t.string   "content8_eng"
    t.string   "content9_eng"
    t.string   "content10_eng"
    t.string   "content11_eng"
    t.string   "content12_eng"
    t.string   "content13_eng"
    t.string   "content14_eng"
    t.string   "content15_eng"
    t.string   "content16_eng"
    t.string   "content17_eng"
    t.string   "content18_eng"
    t.string   "content19_eng"
    t.string   "content20_eng"
    t.string   "content1_kor"
    t.string   "content2_kor"
    t.string   "content3_kor"
    t.string   "content4_kor"
    t.string   "content5_kor"
    t.string   "content6_kor"
    t.string   "content7_kor"
    t.string   "content8_kor"
    t.string   "content9_kor"
    t.string   "content10_kor"
    t.string   "content11_kor"
    t.string   "content12_kor"
    t.string   "content13_kor"
    t.string   "content14_kor"
    t.string   "content15_kor"
    t.string   "content16_kor"
    t.string   "content17_kor"
    t.string   "content18_kor"
    t.string   "content19_kor"
    t.string   "content20_kor"
    t.string   "att1"
    t.string   "att2"
    t.string   "att3"
    t.string   "att4"
    t.string   "att5"
    t.string   "att6"
    t.string   "att7"
    t.string   "att8"
    t.string   "att9"
    t.string   "att10"
    t.string   "att11"
    t.string   "att12"
    t.string   "att13"
    t.string   "att14"
    t.string   "att15"
    t.string   "att16"
    t.string   "att17"
    t.string   "att18"
    t.string   "att19"
    t.string   "att20"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "presses", force: :cascade do |t|
    t.string   "title"
    t.string   "pressdate"
    t.string   "poster"
    t.string   "link"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string   "teamname"
    t.string   "username"
    t.string   "password_digest"
    t.boolean  "admin"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "last_name"
    t.string   "first_name"
    t.string   "username"
    t.string   "gender"
    t.string   "dob"
    t.string   "location"
    t.string   "school"
    t.string   "company"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree


end
