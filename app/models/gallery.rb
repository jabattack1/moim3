class Gallery < ActiveRecord::Base
	has_attached_file :image
	validates_attachment :image,
                     content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] }
    has_attached_file :image,
                  styles: { thumb: ["64x64#", :jpg] }
    has_attached_file :image,
                  styles: { thumb: ["64x64#", :jpg],
                            original: ['500x500>', :jpg] },
                  convert_options: { thumb: "-quality 75 -strip",
                                     original: "-quality 85 -strip" }
    has_attached_file :image, :styles => lambda { |attachment| { :thumb => (attachment.instance.title == 'Special' ? "100x100#" : "64x64#") } }                                     

end
