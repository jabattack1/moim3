class CreateBlogPosts < ActiveRecord::Migration
  def change
    create_table :blog_posts do |t|
      t.string :title
      t.string :username
      t.string :count
      t.string :place
      t.string :poster
      t.string :blogdate
      t.datetime :date
      t.string :link
      t.string :blogid
      t.string :content1_eng
      t.string :content2_eng
      t.string :content3_eng
      t.string :content4_eng
      t.string :content5_eng
      t.string :content6_eng
      t.string :content7_eng
      t.string :content8_eng
      t.string :content9_eng
      t.string :content10_eng
      t.string :content11_eng
      t.string :content12_eng
      t.string :content13_eng
      t.string :content14_eng
      t.string :content15_eng
      t.string :content16_eng
      t.string :content17_eng
      t.string :content18_eng
      t.string :content19_eng
      t.string :content20_eng
      t.string :content1_kor
      t.string :content2_kor
      t.string :content3_kor
      t.string :content4_kor
      t.string :content5_kor
      t.string :content6_kor
      t.string :content7_kor
      t.string :content8_kor
      t.string :content9_kor
      t.string :content10_kor
      t.string :content11_kor
      t.string :content12_kor
      t.string :content13_kor
      t.string :content14_kor
      t.string :content15_kor
      t.string :content16_kor
      t.string :content17_kor
      t.string :content18_kor
      t.string :content19_kor
      t.string :content20_kor
      t.string :att1
      t.string :att2
      t.string :att3
      t.string :att4
      t.string :att5
      t.string :att6
      t.string :att7
      t.string :att8
      t.string :att9
      t.string :att10
      t.string :att11
      t.string :att12
      t.string :att13
      t.string :att14
      t.string :att15
      t.string :att16
      t.string :att17
      t.string :att18
      t.string :att19
      t.string :att20

      t.timestamps null: false
    end
  end
end
