class User < ActiveRecord::Base


  devise :database_authenticatable, :confirmable, :registerable, 
         :recoverable, :rememberable, :trackable, :validatable, :timeoutable
  validates :username, :presence => true, :uniqueness => true
  validates :first_name, :presence => true
  validates :last_name, :presence => true
  validates :dob, :presence => true
  validates :gender, :presence => true

def update_with_password(params, *options)
    current_password = params.delete(:current_password)

if params[:password].blank?
  params.delete(:password)
  params.delete(:password_confirmation) if params[:password_confirmation].blank?
end

result = if params[:password].blank? || valid_password?(current_password)
  update_attributes(params, *options)
else
  self.assign_attributes(params, *options)
  self.valid?
  self.errors.add(:current_password, current_password.blank? ? :blank : :invalid)
  false
end

    clean_up_passwords
    result
end

 def confirm!
  super
  if confirmed_at_changed? and confirmed_at_was.nil?
    UserMailer.welcome_email(self).deliver if self.confirmed_at_changed?
  end
end

end
# def after_create
#   if account.nil?
#   self.account = Account.new
#   self.save
#   end
# end


# Setup accessible (or protected) attributes for your model
# attr_accessible :email, :username, :prename, :surname, :phone, :street, :number, :location,
#                 :password, :password_confirmation
