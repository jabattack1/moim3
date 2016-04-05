class User < ActiveRecord::Base


  devise :database_authenticatable, :confirmable, :registerable, 
         :recoverable, :rememberable, :trackable, :validatable, :timeoutable
  validates :username, :presence => true, :uniqueness => true
  validates :first_name, :presence => true
  validates :last_name, :presence => true
  validates :dob, :presence => true
  validates :gender, :presence => true

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


