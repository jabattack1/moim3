class CreateExpressYourselfPosts < ActiveRecord::Migration
  def change
    create_table :express_yourself_posts do |t|
      t.string :title
      t.timestamptz :date
      t.string :username
      t.string :expres_yourselfid
      t.string :content1-eng
      t.string :content2-eng
      t.string :content3-eng
      t.string :content4-eng
      t.string :content5-eng
      t.string :content6-eng
      t.string :content7-eng
      t.string :content8-eng
      t.string :content9-eng
      t.string :content10-eng
      t.string :content11-eng
      t.string :content12-eng
      t.string :content13-eng
      t.string :content14-eng
      t.string :content15-eng
      t.string :content16-eng
      t.string :content17-eng
      t.string :content18-eng
      t.string :content19-eng
      t.string :content20-eng
      t.string :content1-kor
      t.string :content2-kor
      t.string :content3-kor
      t.string :content4-kor
      t.string :content5-kor
      t.string :content6-kor
      t.string :content7-kor
      t.string :content8-kor
      t.string :content9-kor
      t.string :content10-kor
      t.string :content11-kor
      t.string :content12-kor
      t.string :content13-kor
      t.string :content14-kor
      t.string :content15-kor
      t.string :content16-kor
      t.string :content17-kor
      t.string :content18-kor
      t.string :content19-kor
      t.string :content20-kor
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
